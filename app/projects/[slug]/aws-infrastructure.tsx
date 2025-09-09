import { Metadata } from 'next';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const metadata: Metadata = {
  title: 'Multi-Tier AWS Infrastructure | Prasad Narkhede Portfolio',
  description: 'Scalable and highly available architecture for multiple client applications.',
  keywords: 'AWS Architecture, High Availability, Multi-Tier Infrastructure',
};

const projectContent = `# AWS Multi-App Cloud Architecture

## 1. Non-Functional Requirements (NFRs)

| Quality Attribute | Requirement |
| ----------------- | ----------- |
| Availability | 99.9% uptime SLA for apps (RDS Multi-AZ, ALB health checks, ASG redundancy). |
| Reliability | Zero-downtime deployments; automated failover for RDS; EBS snapshots for recovery. |
| Performance | ALB latency < 200 ms; Redis session access < 5 ms; Web tier scaling to handle 2x expected peak load. |
| Scalability | ASG scaling 1–5 instances based on CPU ≥ 70%; architecture supports horizontal scaling. |
| Disaster Recovery | RPO = 15 min (RDS snapshots + AWS Backup); RTO = 30 min (failover in alternate AZ). |
| Security | IAM least privilege; SG restricted to required ports; ACM-managed TLS certificates; AWS WAF with OWASP Top 10 rules. |
| Compliance | Data encrypted at rest (S3 SSE-S3, RDS, EFS with KMS); encrypted in transit (HTTPS, NFS over TLS). |
| Monitoring | CloudWatch metrics & alarms; custom dashboards; SNS alerts to ops team. |
| Cost Efficiency | Target ~40% savings with ASG scaling, right-sized instances (db.t3.small, cache.t3.micro). |
| Operational Simplicity | Automated backups, patching via SSM, single pane of glass dashboards. |

## 2. To-Be Architecture (Future State)

### 2.1 Networking
- VPC: 10.0.0.0/16
- Subnets: 2 Public (ALB, Bastion) + 2 Private (EC2, RDS, EFS, Redis)
- Gateways: IGW for public; NAT GW for private instances
- NACLs: Restrict traffic; private subnets block internet

### 2.2 Compute
- Fixed EC2 (Docker host): Amazon Linux 2, Docker, docker-compose. Runs PHP, Node.js, Python containers. Termination protection enabled. Mounted to EFS at /var/apps/docker. Daily EBS snapshots & AMI backups.
- Auto Scaling Group (ASG): 1–5 EC2 instances (Amazon Linux 2 + Nginx). Mounted to EFS at /var/apps/web. Scaling: CPU ≥ 70%. Health check: /health.

### 2.3 Storage
- EFS: Max I/O mode for concurrency. Mounted to both fixed EC2 & ASG. Used for code/configs only.
- S3: Uploads, media, backups, logs. Lifecycle → Glacier (30d), Expire (90d). SSE-S3 encryption.

### 2.4 Database
- RDS MySQL (db.t3.small): Multi-AZ, 20 GB gp3 SSD. Auto-scaling storage. 7-day backup retention. Parameter tuning for performance.
- ElastiCache Redis (cache.t3.micro): In-memory session & cache storage. Private subnet, low-latency access.

### 2.5 Load Balancing & Health Checks
- ALB (public subnets, HTTPS via ACM)
- Target Group 1: ASG → /web*, health /health
- Target Group 2: Fixed EC2 → /api*, per-container /health checks
- Path-based routing
- WAF with managed rules (SQLi, XSS, rate limiting)

### 2.6 Security
- IAM roles with least privilege
- Security Groups (ALB, EC2, RDS, EFS, Redis)
- ACM for TLS certs (*.example.com)
- WAF on ALB for OWASP protections
- SSM Parameter Store for secrets

### 2.7 CI/CD
- GitHub/CodePipeline integration (optional phase)
- Jenkins or AWS CodePipeline to deploy containers/code to EFS

### 2.8 Monitoring & Alerts
- CloudWatch: EC2 (CPU, Network, Credit Balance), RDS (Connections, Free Storage), EFS (Burst Credit Balance), Redis (CacheHits, CacheMisses)
- Alarms: CPU > 80%, CreditBalance < 100, RDS free storage < 5 GB, EFS BurstCreditBalance < 100 GB
- Dashboards for ops team

### 2.9 Diagram
\`\`\`mermaid
graph TD
A[Client Browser] -->|HTTPS| B[Route 53<br>DNS]
B --> C[ALB<br>HTTPS, Path Routing]

subgraph VPC
    subgraph Public
        C -->|TLS| D[WAF]
        E[Bastion Host via SSM]
    end
    
    subgraph Private
        F[ASG Web Apps<br>EFS:/apps/web] --> H[RDS MySQL<br>Multi-AZ]
        G[Fixed EC2<br>Docker Apps<br>EFS:/apps/docker] --> H
        F --> I[EFS]
        G --> I
        F --> J[S3]
        G --> J
        F --> K[ElastiCache Redis]
        G --> K
    end
end

H -.-> L[AWS Backup]
I -.-> L
G -.-> L
K -.-> M[CloudWatch & Alarms]
\`\`\`

## 3. Architecture Decision Records (ADR)

| Decision | Alternatives | Justification |
| -------- | ------------ | ------------- |
| Use RDS MySQL | Aurora, Self-managed MySQL | RDS provides managed service, Multi-AZ HA, cheaper than Aurora for <200 users |
| Use ElastiCache Redis for sessions | Store in DB, Store in S3 | Redis provides sub-ms latency vs 10–30ms for S3 and avoids DB contention |
| Use EFS for code/configs | S3, EBS | Needed for multi-instance consistency; S3 not suitable for shared file system |
| Fixed EC2 with termination protection | ASG min=1, Lambda | Ensures stable environment for Docker apps requiring consistent runtime |
| Route 53 for DNS | GoDaddy | Seamless ACM certificate validation & AWS-native DNS integration |
| ALB with path-based routing | NLB, Separate ALBs | ALB supports SSL termination, WAF integration, and app-level routing |

## 4. Implementation Plan
### Phase 1 – Preparation
- Create GitHub repo for Infra-as-Code (Terraform/CloudFormation)
- Define tagging standards (e.g., App=MultiApp, Env=Prod)
- IAM setup for least-privilege roles

### Phase 2 – Networking
- Create VPC (10.0.0.0/16)
- Create subnets (2 Public, 2 Private)
- Deploy IGW + NAT Gateway
- Configure route tables & NACLs

### Phase 3 – Security
- Create IAM roles (EC2, RDS, S3, EFS, Redis, SSM)
- Configure SGs for each service
- Enable ACM certificates

### Phase 4 – Compute
- Launch Fixed EC2 with Docker + EFS mount
- Configure ASG with Launch Template (Nginx + EFS mount)
- Setup scaling policies

### Phase 5 – Database
- Provision RDS MySQL (db.t3.small, Multi-AZ)
- Configure parameter groups
- Setup automated snapshots

### Phase 6 – Storage
- Create EFS with Max I/O mode
- Create S3 bucket with lifecycle policies
- Mount EFS to EC2 & ASG

### Phase 7 – Caching
- Deploy ElastiCache Redis cluster
- Store endpoint in SSM Parameter Store

### Phase 8 – Load Balancing
- Deploy ALB with listeners (HTTP→HTTPS)
- Configure Target Groups & health checks
- Attach WAF managed rules

### Phase 9 – Monitoring & Alerts
- Enable CloudWatch metrics & dashboards
- Setup SNS alerts for alarms
- Enable CloudWatch log groups

### Phase 10 – CI/CD (Optional)
- Setup CodePipeline/Jenkins
- Automate deployments to EFS & Docker

### Phase 11 – Testing
- Functional tests for apps
- Load test with 2x expected traffic
- DR drill: RDS failover, EFS restore, Redis failover

### Phase 12 – Handover
- Documentation (runbooks, credentials, architecture diagram)
- Knowledge transfer session
- Access management finalized

Keywords: AWS Multi-App Architecture, High Availability, Cloud Design, DevOps, Infrastructure`;

export default function AWSInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Multi-Tier AWS Infrastructure</h1>
        <p className="text-lg text-gray-600 mb-8">Scalable and highly available architecture for multiple client applications.</p>
        <MarkdownRenderer content={projectContent} />
      </div>
    </div>
  );
}