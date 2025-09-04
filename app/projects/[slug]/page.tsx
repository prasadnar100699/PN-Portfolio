import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const projects = {
  'aws-multi-app-architecture': {
    title: 'AWS Multi-App Architecture with Auto Scaling & High Availability',
    description: 'Comprehensive cloud infrastructure design for hosting multiple client applications with enterprise-grade reliability, security, and performance.',
    content: `
# AWS Multi-App Architecture with Auto Scaling & High Availability

## Project Overview

This project involved designing and implementing a highly scalable, secure, and cost-effective AWS infrastructure to host 30+ PHP and Node.js applications migrated from a third-party vendor. The architecture ensures high availability, automatic scaling, and optimized performance while maintaining security best practices.

## Architecture Components

### Core Infrastructure
- **Amazon EC2**: Auto Scaling Groups with custom scaling policies based on CPU utilization and request count
- **Application Load Balancer (ALB)**: Distributes traffic across healthy instances with health checks
- **Amazon RDS**: Multi-AZ MySQL database setup for high availability and automated backups
- **Amazon EFS**: Shared file system for application assets and user uploads across instances
- **ElastiCache Redis**: Session storage and caching layer for improved application performance

### Network & Security
- **VPC Design**: Multi-subnet architecture with public/private subnet separation
- **Security Groups**: Fine-grained access controls for each tier
- **Route 53**: DNS management with health checks and failover routing
- **AWS Certificate Manager (ACM)**: Automated SSL/TLS certificate provisioning and renewal

### Monitoring & Alerting
- **CloudWatch**: Comprehensive monitoring for infrastructure metrics and application logs
- **SNS**: Alert notifications for critical infrastructure events
- **Custom Dashboards**: Real-time visibility into system performance and health

## Implementation Highlights

### Infrastructure as Code
All infrastructure is defined and managed using Terraform, ensuring:
- **Reproducible Deployments**: Consistent environments across development, staging, and production
- **Version Control**: Infrastructure changes tracked in Git with proper review processes
- **Automated Provisioning**: One-click deployment of entire infrastructure stack

### Cost Optimization Strategies
Achieved 40% cost reduction through:
- **Reserved Instances**: Strategic use of 1-year and 3-year reservations for predictable workloads
- **Auto Scaling**: Dynamic scaling based on actual demand patterns
- **CPU Credits Monitoring**: Optimized t3 instance usage for burstable performance
- **S3 Lifecycle Policies**: Automated data archival for long-term storage cost reduction

### High Availability Design
- **Multi-AZ Deployment**: Applications span multiple availability zones
- **Database Failover**: Automatic RDS failover with minimal downtime
- **Load Balancer Health Checks**: Automatic removal of unhealthy instances from traffic
- **EFS Cross-AZ Access**: Shared storage accessible from any availability zone

## Technical Implementation

### Auto Scaling Configuration
\`\`\`hcl
resource "aws_autoscaling_group" "web_asg" {
  name                = "web-app-asg"
  vpc_zone_identifier = var.private_subnet_ids
  target_group_arns   = [aws_lb_target_group.web_tg.arn]
  health_check_type   = "ELB"
  health_check_grace_period = 300

  min_size         = 2
  max_size         = 10
  desired_capacity = 4

  launch_template {
    id      = aws_launch_template.web_template.id
    version = "$Latest"
  }

  tag {
    key                 = "Name"
    value              = "web-app-instance"
    propagate_at_launch = true
  }
}
\`\`\`

### Application Load Balancer Setup
\`\`\`hcl
resource "aws_lb" "main" {
  name               = "main-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = var.public_subnet_ids

  enable_deletion_protection = false

  tags = {
    Environment = var.environment
    Project     = "multi-app-architecture"
  }
}
\`\`\`

## Results & Impact

### Performance Metrics
- **99.9% Uptime**: Achieved through multi-AZ deployment and health checks
- **< 200ms Response Time**: Optimized through ElastiCache and efficient load balancing
- **Zero Downtime Deployments**: Blue-green deployment strategy with ALB target groups

### Cost Savings
- **40% Reduction**: In overall AWS costs through optimization strategies
- **$3,000+ Monthly Savings**: Through reserved instances and right-sizing
- **Automated Cost Monitoring**: CloudWatch alarms for budget thresholds

### Operational Excellence
- **Automated Backups**: Daily RDS snapshots with 30-day retention
- **Security Compliance**: WAF rules, security groups, and IAM best practices
- **Monitoring Coverage**: 100% infrastructure visibility with custom CloudWatch dashboards

## Lessons Learned

1. **Right-sizing is Critical**: Regular monitoring and adjustment of instance types based on actual usage patterns
2. **EFS vs S3 Trade-offs**: EFS provides convenience but S3 + CloudFront offers better performance for static assets
3. **Reserved Instance Strategy**: Mix of standard and convertible RIs provides best cost optimization
4. **Health Check Tuning**: Properly configured health checks are essential for avoiding false positives

## Future Enhancements

- **Container Migration**: Transition to EKS for better resource utilization
- **Multi-Region Setup**: Disaster recovery across multiple AWS regions
- **Advanced Monitoring**: Integration with third-party APM tools for deeper insights
- **CI/CD Integration**: Automated infrastructure updates through GitLab pipelines

---

**Keywords**: AWS Architecture, High Availability, Cloud Automation, Infrastructure as Code, DevOps Case Study, Auto Scaling, Load Balancing, Cost Optimization, Multi-AZ Deployment
    `,
    tags: ['AWS', 'Terraform', 'Docker', 'Redis', 'Route 53', 'CloudWatch'],
    keywords: 'AWS Architecture, High Availability, Cloud Automation, Infrastructure as Code, DevOps Case Study'
  }
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects[params.slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: 'Project Not Found'
    };
  }

  return {
    title: `${project.title} | Prasad Narkhede Portfolio`,
    description: project.description,
    keywords: project.keywords,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br>').replace(/```hcl/g, '<pre><code class="language-hcl">').replace(/```/g, '</code></pre>') }} />
        </div>
      </div>
    </div>
  );
}