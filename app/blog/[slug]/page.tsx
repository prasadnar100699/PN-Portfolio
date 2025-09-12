import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const blogPosts = {
  'aws-efs-latency-solutions': {
    title: 'Fixing AWS EFS Latency: Why ElastiCache & S3 are Better for Sessions & Uploads',
    description: 'Deep dive into AWS EFS performance issues and solutions using ElastiCache and S3',
    content: `
# Fixing AWS EFS Latency: Why ElastiCache & S3 are Better for Sessions & Uploads

## The Problem: EFS Performance Bottlenecks

When I first migrated our 30+ applications to AWS, I initially chose Amazon EFS (Elastic File System) for shared storage, thinking it would be the perfect solution for session data and file uploads. However, I quickly discovered that EFS can introduce significant latency issues that impact application performance.

## Understanding EFS Limitations

### Latency Issues
- **Network Overhead**: EFS operates over NFS, adding network latency for every file operation
- **Throughput Modes**: General Purpose mode has credit-based performance that can be limiting
- **IOPS Constraints**: Random I/O operations are significantly slower compared to local storage

### Real-World Impact
In our production environment, we noticed:
- Session read/write operations taking 50-100ms longer
- File upload processing creating bottlenecks during peak traffic
- Database connection pooling being affected by slow session retrieval

## The Solution: Strategic Service Selection

### ElastiCache for Session Management

Instead of storing sessions in EFS, we migrated to ElastiCache Redis:

\`\`\`php
// Before: EFS-based sessions (slow)
session_save_path('/mnt/efs/sessions');

// After: Redis-based sessions (fast)
$redis = new Redis();
$redis->connect('your-elasticache-endpoint.cache.amazonaws.com', 6379);
\`\`\`

**Benefits**:
- **Sub-millisecond latency** for session operations
- **Automatic failover** with Multi-AZ setup
- **Built-in expiration** for session cleanup
- **Horizontal scaling** capability

### S3 for File Uploads and Static Assets

For file uploads, we implemented direct S3 uploads:

\`\`\`javascript
// Direct S3 upload with presigned URLs
const uploadFile = async (file) => {
  const presignedUrl = await getPresignedUrl(file.name);
  const response = await fetch(presignedUrl, {
    method: 'PUT',
    body: file
  });
  return response.url.split('?')[0]; // Clean URL without query params
};
\`\`\`

**Advantages**:
- **Unlimited scalability** for storage
- **Global edge locations** with CloudFront
- **Lifecycle policies** for cost optimization
- **Event-driven processing** with Lambda triggers

## Implementation Architecture

### Session Management Flow
1. **User Login**: Application generates session ID
2. **Redis Storage**: Session data stored in ElastiCache with TTL
3. **Application Access**: Fast session retrieval for each request
4. **Automatic Cleanup**: Redis handles session expiration

### File Upload Flow
1. **Client Request**: Application generates presigned S3 URL
2. **Direct Upload**: Client uploads directly to S3 bucket
3. **Event Trigger**: S3 event triggers Lambda for processing
4. **Database Update**: Application receives upload confirmation

## Performance Improvements

### Before (EFS-based)
- Session operations: 50-100ms average latency
- File uploads: 200-500ms for small files
- Concurrent user limit: ~100 users before degradation

### After (ElastiCache + S3)
- Session operations: < 5ms average latency
- File uploads: Offloaded from application servers
- Concurrent users: 500+ users with consistent performance

## Cost Optimization

### ElastiCache Costs
- **Right-sizing**: Started with cache.t3.micro for development
- **Production scaling**: cache.r6g.large for high-traffic applications
- **Reserved instances**: 40% savings with 1-year commitment

### S3 Storage Optimization
- **Intelligent Tiering**: Automatic cost optimization for varying access patterns
- **Lifecycle policies**: Move old files to IA and Glacier storage classes
- **CloudFront**: Reduced S3 request costs with edge caching

## Implementation Tips

### ElastiCache Best Practices
1. **Enable backups** for production environments
2. **Use cluster mode** for high availability
3. **Monitor memory utilization** and eviction policies
4. **Implement proper key expiration** strategies

### S3 Security Considerations
1. **Bucket policies** with least privilege access
2. **Presigned URL expiration** (5-15 minutes)
3. **CORS configuration** for web application access
4. **Encryption at rest** with KMS keys

## Conclusion

The migration from EFS to ElastiCache + S3 resulted in:
- **95% improvement** in session operation latency
- **60% reduction** in application server load
- **30% cost savings** through optimized resource usage
- **Better user experience** with faster page loads

This experience taught me that choosing the right AWS service for the specific use case is crucial for optimal performance and cost efficiency.

---

**Keywords**: EFS Performance, AWS ElastiCache, Cloud Optimization, S3 vs EFS, Session Management, Redis Performance, AWS Cost Optimization
    `,
    tags: ['EFS Performance', 'AWS ElastiCache', 'Cloud Optimization'],
    keywords: 'EFS Performance, AWS ElastiCache, Cloud Optimization, S3 vs EFS, Session Management'
  }
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found'
    };
  }

  return {
    title: `${post.title} | Prasad Narkhede Blog`,
    description: post.description,
    keywords: post.keywords,
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/```php/g, '<pre><code class="language-php">').replace(/```javascript/g, '<pre><code class="language-javascript">').replace(/```/g, '</code></pre>') }} />
        </div>
      </div>
    </div>
  );
}