import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Github, Calendar, Star, Zap, Award, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import RippleEffect from '@/components/RippleEffect';
import ScrollReveal from '@/components/ScrollReveal';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'AWS Cloud Migration & Modernization',
      description: 'Complete cloud migration of enterprise applications to AWS with zero downtime, implementing microservices architecture using EKS and containerization strategies.',
      detailedDescription: 'Led the migration of 50+ legacy services to AWS cloud infrastructure, implementing containerization with Docker and Kubernetes orchestration. Achieved 99.9% uptime during transition and reduced operational costs by 40%.',
      image: project1,
      category: 'AWS',
      tags: ['AWS', 'Kubernetes', 'EKS', 'Docker', 'Microservices', 'CloudFormation'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      metrics: {
        uptime: '99.9%',
        costReduction: '40%',
        services: '50+'
      },
      timeline: '6 months',
      role: 'Lead DevOps Engineer'
    },
    {
      title: 'CI/CD Pipeline Automation Platform',
      description: 'Built comprehensive CI/CD pipeline platform using GitLab CI, Jenkins, and automated testing frameworks, reducing deployment time by 80%.',
      detailedDescription: 'Designed and implemented enterprise-grade CI/CD pipeline supporting multiple deployment environments with automated testing, security scanning, and deployment rollback capabilities.',
      image: project2,
      category: 'DevOps Tools',
      tags: ['GitLab CI', 'Jenkins', 'Docker', 'Ansible', 'Terraform', 'SonarQube'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      metrics: {
        deploymentTime: '80% faster',
        environments: '5',
        automatedTests: '1000+'
      },
      timeline: '4 months',
      role: 'DevOps Architect'
    },
    {
      title: 'Multi-Cloud Infrastructure as Code',
      description: 'Developed Infrastructure as Code templates for AWS, Azure, and GCP using Terraform, enabling consistent deployments across cloud providers.',
      detailedDescription: 'Created reusable Terraform modules for multi-cloud infrastructure provisioning, implementing best practices for security, scalability, and cost optimization.',
      image: project3,
      category: 'IaC',
      tags: ['Terraform', 'AWS', 'Azure', 'GCP', 'Packer', 'Vault'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      metrics: {
        clouds: '3',
        modules: '25+',
        deploymentTime: '90% faster'
      },
      timeline: '3 months',
      role: 'Cloud Infrastructure Engineer'
    },
    {
      title: 'Kubernetes Production Clusters',
      description: 'Designed and deployed production-grade Kubernetes clusters with high availability, auto-scaling, and comprehensive monitoring solutions.',
      detailedDescription: 'Implemented enterprise Kubernetes clusters with advanced features including RBAC, network policies, service mesh integration, and multi-zone deployment strategies.',
      image: project1,
      category: 'DevOps Tools',
      tags: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Istio', 'ArgoCD'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      metrics: {
        nodes: '100+',
        uptime: '99.95%',
        applications: '200+'
      },
      timeline: '5 months',
      role: 'Kubernetes Specialist'
    },
    {
      title: 'Observability & Monitoring Stack',
      description: 'Implemented comprehensive monitoring and logging solution using Prometheus, Grafana, ELK stack, and custom alerting systems.',
      detailedDescription: 'Built end-to-end observability platform providing real-time metrics, logs, and traces for microservices architecture with intelligent alerting and incident response automation.',
      image: project2,
      category: 'DevOps Tools',
      tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'AlertManager', 'PagerDuty'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      metrics: {
        metrics: '10K+',
        alerts: '99.5% accuracy',
        logVolume: '1TB/day'
      },
      timeline: '3 months',
      role: 'Site Reliability Engineer'
    },
    {
      title: 'Serverless Microservices Architecture',
      description: 'Built scalable serverless applications using AWS Lambda, API Gateway, and DynamoDB with event-driven architecture patterns.',
      detailedDescription: 'Designed and implemented serverless microservices using AWS Lambda with automatic scaling, cost optimization, and event-driven communication patterns.',
      image: project3,
      category: 'AWS',
      tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'EventBridge', 'Step Functions', 'CloudWatch'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      metrics: {
        functions: '50+',
        costSaving: '60%',
        requests: '10M/month'
      },
      timeline: '4 months',
      role: 'Serverless Architect'
    },
  ];

  const filters = ['All', 'AWS', 'Azure', 'DevOps Tools', 'IaC'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Header Section */}
        <ScrollReveal direction="down">
          <motion.div
            className="text-center mb-16 sm:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              DevOps Portfolio
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Showcasing innovative cloud infrastructure solutions, automation frameworks, and scalable DevOps implementations 
              that drive digital transformation and operational excellence.
            </motion.p>
            
            {/* Portfolio Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            >
              {[
                { icon: Code, label: 'Projects', value: '20+' },
                { icon: Star, label: 'Technologies', value: '15+' },
                { icon: Zap, label: 'Deployments', value: '100+' },
                { icon: Award, label: 'Success Rate', value: '99.9%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal direction="up" delay={0.2}>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-2 text-primary font-semibold"
            >
              <Filter className="h-5 w-5" />
              <span>Filter by:</span>
            </motion.div>
            {filters.map((filter, index) => (
              <RippleEffect key={filter}>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-primary to-accent text-white border-primary shadow-lg'
                      : 'bg-card hover:bg-primary/10 text-foreground border-border hover:border-primary/50'
                  }`}
                >
                  {filter}
                </motion.button>
              </RippleEffect>
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Featured Projects Section */}
        {activeFilter === 'All' && (
          <ScrollReveal direction="up" delay={0.3}>
            <motion.div className="mb-16 sm:mb-20">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Featured Projects
              </motion.h2>
              <motion.p
                className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Highlighted projects demonstrating advanced DevOps practices and innovative cloud solutions
              </motion.p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.slice(0, 2).map((project, index) => (
                  <ScrollReveal key={project.title} direction="scale" delay={index * 0.2}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="group relative"
                    >
                      <RippleEffect>
                        <Card className="h-full border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden bg-gradient-to-br from-card to-card/50 group-hover:shadow-2xl">
                          {/* Featured Badge */}
                          <div className="absolute top-4 right-4 z-10">
                            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-3 py-1">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                          
                          {/* Project Image */}
                          <div className="relative h-48 sm:h-56 overflow-hidden">
                            <motion.img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              whileHover={{ scale: 1.1 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            
                            {/* Overlay Actions */}
                            <motion.div
                              className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            >
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white/90 rounded-full text-foreground hover:bg-white transition-colors"
                                onClick={() => window.open(project.demoUrl, '_blank')}
                              >
                                <ExternalLink className="h-5 w-5" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white/90 rounded-full text-foreground hover:bg-white transition-colors"
                                onClick={() => window.open(project.githubUrl, '_blank')}
                              >
                                <Github className="h-5 w-5" />
                              </motion.button>
                            </motion.div>
                          </div>
                          
                          <CardContent className="p-6 space-y-4">
                            {/* Project Header */}
                            <div className="space-y-3">
                              <div className="flex items-start justify-between gap-3">
                                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                  {project.title}
                                </h3>
                                <Badge variant="secondary" className="shrink-0">
                                  {project.category}
                                </Badge>
                              </div>
                              
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {project.timeline}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Award className="h-4 w-4" />
                                  {project.role}
                                </div>
                              </div>
                            </div>
                            
                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed">
                              {project.detailedDescription}
                            </p>
                            
                            {/* Key Metrics */}
                            <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="text-lg font-bold text-primary">{value}</div>
                                  <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                </div>
                              ))}
                            </div>
                            
                            {/* Technologies */}
                            <div className="space-y-3">
                              <h4 className="text-sm font-semibold text-foreground">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                  <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: tagIndex * 0.05 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                                  >
                                    {tag}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </RippleEffect>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        )}

        {/* All Projects Grid */}
        <ScrollReveal direction="up" delay={0.4}>
          <motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {activeFilter === 'All' ? 'All Projects' : `${activeFilter} Projects`}
            </motion.h2>
            <motion.p
              className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive collection of DevOps and cloud infrastructure projects showcasing technical expertise
            </motion.p>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <RippleEffect>
                      <Card className="h-full border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden glow-hover bg-gradient-to-br from-card to-card/50 group-hover:shadow-xl">
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-background/80 text-foreground border border-border">
                              {project.category}
                            </Badge>
                          </div>
                          
                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            </div>
                          )}
                          
                          {/* Overlay Actions */}
                          <motion.div
                            className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-white/90 rounded-full text-foreground hover:bg-white transition-colors"
                              onClick={() => window.open(project.demoUrl, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-white/90 rounded-full text-foreground hover:bg-white transition-colors"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github className="h-4 w-4" />
                            </motion.button>
                          </motion.div>
                        </div>
                        
                        <CardContent className="p-6 space-y-4">
                          {/* Project Title & Meta */}
                          <div className="space-y-2">
                            <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {project.timeline}
                              </div>
                              <div className="flex items-center gap-1">
                                <Award className="h-3 w-3" />
                                {project.role}
                              </div>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="space-y-3">
                            <h4 className="text-xs font-semibold text-foreground">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                <motion.span
                                  key={tag}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: tagIndex * 0.05 }}
                                  whileHover={{ scale: 1.05 }}
                                  className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-all cursor-pointer"
                                >
                                  {tag}
                                </motion.span>
                              ))}
                              {project.tags.length > 4 && (
                                <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                                  +{project.tags.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* Key Metrics */}
                          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                            {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-sm font-bold text-primary">{value}</div>
                                <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </RippleEffect>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal direction="up" delay={0.6}>
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 max-w-4xl mx-auto">
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                Ready to Build Something Amazing?
              </motion.h3>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate on your next DevOps transformation project. From cloud migration to CI/CD implementation, 
                I'm here to help you achieve operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <Button
                    asChild
                    size="lg"
                    className="relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-8 py-4 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <a href="/contact">
                      Start a Project
                      <ExternalLink className="h-5 w-5 ml-2" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm px-8 py-4 font-semibold"
                  >
                    <a href="/resume">
                      View Full Resume
                      <ExternalLink className="h-5 w-5 ml-2" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Portfolio;
