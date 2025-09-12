'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Code } from '@/components/ui/code';
import { Cloud, Database, Lock, Server, Zap, GitBranch, Monitor, Shield } from 'lucide-react';
import MermaidChart from '@/components/MarkdownRenderer';

const sections = [
  { id: 'overview', title: 'Overview', icon: <Cloud className="w-5 h-5" /> },
  { id: 'objectives', title: 'Business & Technical Objectives', icon: <Zap className="w-5 h-5" /> },
  { id: 'nfrs', title: 'Non-Functional Requirements', icon: <Lock className="w-5 h-5" /> },
  { id: 'architecture', title: 'To-Be Architecture', icon: <Server className="w-5 h-5" /> },
  { id: 'adr', title: 'Architecture Decision Records', icon: <GitBranch className="w-5 h-5" /> },
  { id: 'implementation', title: 'Implementation Plan', icon: <Monitor className="w-5 h-5" /> },
  { id: 'diagram', title: 'Architecture Diagram', icon: <Server className="w-5 h-5" /> },
  { id: 'outcomes', title: 'Key Outcomes', icon: <Zap className="w-5 h-5" /> },
  { id: 'services', title: 'AWS Services & DevOps Tools', icon: <Cloud className="w-5 h-5" /> },
  { id: 'gallery', title: 'Gallery', icon: <Shield className="w-5 h-5" /> },
  { id: 'keywords', title: 'Keywords', icon: <Lock className="w-5 h-5" /> },
];

export default function AWSInfrastructureClient() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sectionElements = sections.map((section) => ({
        id: section.id,
        offsetTop: document.getElementById(section.id)?.offsetTop || 0,
      }));

      const currentSection = sectionElements.reduce((prev, curr) => {
        return curr.offsetTop <= scrollPosition && curr.offsetTop > prev.offsetTop ? curr : prev;
      }, { id: 'overview', offsetTop: 0 });

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mermaidCode = `
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
  `;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-lg p-6 fixed md:sticky top-24 h-auto md:h-screen">
        <ScrollArea className="h-[calc(100vh-6rem)]">
          <nav>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className={`flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-100 transition-colors ${
                      activeSection === section.id ? 'bg-blue-200 text-blue-900 font-semibold' : ''
                    }`}
                  >
                    {section.icon}
                    <span className="ml-3">{section.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Multi-Tier AWS Infrastructure</h1>
        <p className="text-lg text-gray-600 mb-8">
          Scalable and highly available architecture for multiple client applications.
        </p>

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Overview</h2>
          <p className="text-gray-700">
            This project showcases the design and implementation of a scalable, reliable, and secure AWS cloud
            infrastructure to host multiple client applications (PHP, Node.js, Python). The architecture supports high
            availability, cost efficiency, and automation-first DevOps practices, replacing a costly third-party cloud
            vendor setup with a fully managed AWS environment.
          </p>
          <p className="text-gray-700 mt-2">
            As the first Cloud & DevOps Engineer in my company, I was responsible for end-to-end architecture design,
            automation, and deployment strategy, ensuring production readiness for critical business applications.
          </p>
        </section>

        {/* Objectives */}
        <section id="objectives" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Business & Technical Objectives</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Scalability:</strong> Handle unpredictable traffic by auto-scaling web apps horizontally.</li>
            <li><strong>Reliability:</strong> Zero-downtime deployments with Multi-AZ failover.</li>
            <li><strong>Performance:</strong> Sub-200ms ALB response, &lt;1ms Redis sessions.</li>
            <li><strong>Security & Compliance:</strong> IAM least privilege, encryption, WAF protection.</li>
            <li><strong>Disaster Recovery:</strong> RPO = 15 min, RTO = 30 min.</li>
            <li><strong>Cost Optimization:</strong> ~40% savings via ASG scaling & right-sizing.</li>
            <li><strong>Operational Simplicity:</strong> Unified monitoring, automated backups, patching.</li>
          </ul>
        </section>

        {/* Non-Functional Requirements */}
        <section id="nfrs" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Non-Functional Requirements (NFRs)</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quality Attribute</TableHead>
                <TableHead>Requirement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Availability</TableCell>
                <TableCell>99.9% SLA with RDS Multi-AZ, ALB checks, ASG redundancy</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reliability</TableCell>
                <TableCell>Zero-downtime deployments, EBS snapshots for recovery</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Performance</TableCell>
                <TableCell>ALB &lt; 200ms, Redis &lt; 5ms, scale 2× peak load</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Scalability</TableCell>
                <TableCell>ASG 1–5 instances @ CPU ≥ 70%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Disaster Recovery</TableCell>
                <TableCell>RPO = 15 min, RTO = 30 min</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Security</TableCell>
                <TableCell>IAM least privilege, SGs, ACM TLS, WAF OWASP rules</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Compliance</TableCell>
                <TableCell>Data encrypted (S3, RDS, EFS, TLS in transit)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Monitoring</TableCell>
                <TableCell>CloudWatch dashboards, alarms, SNS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cost Efficiency</TableCell>
                <TableCell>~40% savings, db.t3.small, cache.t3.micro</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Simplicity</TableCell>
                <TableCell>Automated backups, SSM Patch Manager</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* To-Be Architecture */}
        <section id="architecture" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">To-Be Architecture (Future State)</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>VPC with public/private subnets across 2 AZs.</li>
            <li>Compute: ASG (EC2 + Nginx + EFS), Fixed EC2 (Docker: PHP, Node.js, Python).</li>
            <li>Database & Cache: RDS MySQL (Multi-AZ), ElastiCache Redis.</li>
            <li>Storage: EFS (code/configs), S3 (uploads, logs, backups).</li>
            <li>Networking & Security: ALB with path-based routing, WAF, ACM, IAM.</li>
            <li>Monitoring & DR: CloudWatch dashboards, AWS Backup for RDS/EFS/EC2.</li>
            <li>DNS: Route 53 ALIAS records (migrated from GoDaddy).</li>
          </ul>
        </section>

        {/* Architecture Decision Records */}
        <section id="adr" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Architecture Decision Records (ADR)</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Decision</TableHead>
                <TableHead>Alternatives</TableHead>
                <TableHead>Justification</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Use RDS MySQL</TableCell>
                <TableCell>Aurora, Self-managed MySQL</TableCell>
                <TableCell>RDS provides managed service, Multi-AZ HA, cheaper than Aurora for &lt;200 users</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Use ElastiCache Redis for sessions</TableCell>
                <TableCell>Store in DB, Store in S3</TableCell>
                <TableCell>Redis provides sub-ms latency vs 10–30ms for S3 and avoids DB contention</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Use EFS for code/configs</TableCell>
                <TableCell>S3, EBS</TableCell>
                <TableCell>Needed for multi-instance consistency; S3 not suitable for shared file system</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fixed EC2 with termination protection</TableCell>
                <TableCell>ASG min=1, Lambda</TableCell>
                <TableCell>Ensures stable environment for Docker apps requiring consistent runtime</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Route 53 for DNS</TableCell>
                <TableCell>GoDaddy</TableCell>
                <TableCell>Seamless ACM certificate validation & AWS-native DNS integration</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ALB with path-based routing</TableCell>
                <TableCell>NLB, Separate ALBs</TableCell>
                <TableCell>ALB supports SSL termination, WAF integration, and app-level routing</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Implementation Plan */}
        <section id="implementation" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Implementation Plan</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>VPC + networking</li>
            <li>IAM + SGs + ACM</li>
            <li>EC2 (ASG + Docker host)</li>
            <li>RDS + Redis</li>
            <li>EFS + S3</li>
            <li>ALB + WAF</li>
            <li>Monitoring + SNS</li>
            <li>Backups + DR drills</li>
            <li>CI/CD pipelines</li>
            <li>Testing & handover</li>
          </ol>
        </section>

        {/* Architecture Diagram */}
        <section id="diagram" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Architecture Diagram</h2>
          <MermaidChart chart={mermaidCode} />
        </section>

        {/* Key Outcomes */}
        <section id="outcomes" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Key Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>✅ 99.9% uptime with redundancy.</li>
            <li>✅ Redis reduced session latency from 30ms → &lt;1ms.</li>
            <li>✅ 40% cost savings with ASG scaling.</li>
            <li>✅ Strong security with IAM + WAF.</li>
            <li>✅ Automated DR, SSL renewals, patching.</li>
          </ul>
        </section>

        {/* AWS Services & DevOps Tools */}
        <section id="services" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">AWS Services & DevOps Tools Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'EC2 (ASG + Fixed Docker)', icon: <Server className="w-6 h-6 text-orange-500" /> },
              { title: 'RDS MySQL (Multi-AZ)', icon: <Database className="w-6 h-6 text-orange-500" /> },
              { title: 'ElastiCache Redis', icon: <Zap className="w-6 h-6 text-orange-500" /> },
              { title: 'EFS', icon: <Server className="w-6 h-6 text-orange-500" /> },
              { title: 'S3', icon: <Server className="w-6 h-6 text-orange-500" /> },
              { title: 'ALB + WAF', icon: <Shield className="w-6 h-6 text-orange-500" /> },
              { title: 'Route 53', icon: <Cloud className="w-6 h-6 text-orange-500" /> },
              { title: 'IAM + ACM', icon: <Lock className="w-6 h-6 text-orange-500" /> },
              { title: 'CloudWatch', icon: <Monitor className="w-6 h-6 text-orange-500" /> },
              { title: 'AWS Backup', icon: <Server className="w-6 h-6 text-orange-500" /> },
              { title: 'SSM', icon: <Server className="w-6 h-6 text-orange-500" /> },
              { title: 'Terraform (IaC)', icon: <GitBranch className="w-6 h-6 text-orange-500" /> },
              { title: 'Docker (Containers)', icon: <Server className="w-6 h-6 text-orange-500" /> },
              { title: 'GitHub Actions (CI/CD)', icon: <GitBranch className="w-6 h-6 text-orange-500" /> },
              { title: 'GitLab CI/CD', icon: <GitBranch className="w-6 h-6 text-orange-500" /> },
              { title: 'CloudWatch Alarms/Dashboards', icon: <Monitor className="w-6 h-6 text-orange-500" /> },
            ].map((service, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    {service.icon}
                    <span className="ml-2">{service.title}</span>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Terraform EFS Config</CardTitle>
              </CardHeader>
              <CardContent>
                <Code language="hcl">
                  {`
resource "aws_efs_file_system" "app_efs" {
  creation_token = "app-efs"
  encrypted      = true
  tags = {
    Name = "AppEFS"
  }
}

resource "aws_efs_mount_target" "app_efs_mt" {
  count           = length(var.subnets)
  file_system_id  = aws_efs_file_system.app_efs.id
  subnet_id       = var.subnets[count.index]
  security_groups = [aws_security_group.efs_sg.id]
}
                  `}
                </Code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Terraform ElastiCache Config</CardTitle>
              </CardHeader>
              <CardContent>
                <Code language="hcl">
                  {`
resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "app-redis"
  engine              = "redis"
  node_type           = "cache.t3.micro"
  num_cache_nodes     = 1
  parameter_group_name = "default.redis6.x"
  port                = 6379
  subnet_group_name   = aws_elasticache_subnet_group.redis_subnet.name
  security_group_ids  = [aws_security_group.redis_sg.id]
}
                  `}
                </Code>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Keywords */}
        <section id="keywords" className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Keywords</h2>
          <p className="text-gray-700">
            AWS Multi-App Architecture, Cloud Infrastructure, High Availability, Scalable Applications, DevOps Projects,
            AWS Solutions Architect, Terraform, Docker, CI/CD, Infrastructure as Code, Cloud Automation, Cloud Monitoring,
            RDS Multi-AZ, Redis Cache, AWS Backup, Route 53, WAF Security.
          </p>
        </section>
      </main>
    </div>
  );
}