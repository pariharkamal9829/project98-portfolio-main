import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Cloud, Server, Container, Code2, Eye, Settings, Terminal, GitBranch } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import RippleEffect from '@/components/RippleEffect';
import ScrollReveal from '@/components/ScrollReveal';
import CertificateSlider from '@/components/CertificateSlider';

const Resume = () => {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Tech Innovators Ltd',
      period: '2024 - Present',
      location: 'Remote',
      description: 'Leading cloud infrastructure automation and CI/CD pipeline implementation for enterprise applications.',
      achievements: [
        'Automated deployment processes reducing deployment time by 70%',
        'Implemented monitoring solutions improving system uptime to 99.9%',
        'Led migration of legacy systems to containerized microservices'
      ]
    },
    {
      title: 'Junior DevOps Engineer',
      company: 'Cloud Solutions Inc',
      period: '2023 - 2024',
      location: 'Pune, India',
      description: 'Supported infrastructure management and automation for multiple client projects.',
      achievements: [
        'Developed Infrastructure as Code templates using Terraform',
        'Optimized AWS costs resulting in 30% reduction in monthly expenses',
        'Implemented automated backup and disaster recovery solutions'
      ]
    },
    {
      title: 'Systems Trainee',
      company: 'Digital Systems Corp',
      period: '2023 - 2023',
      location: 'Pune, India',
      description: 'Gained hands-on experience in Linux administration and cloud technologies.',
      achievements: [
        'Configured and maintained Linux servers for development environments',
        'Assisted in implementing Docker containerization for applications',
        'Participated in 24/7 on-call rotation for production support'
      ]
    },
  ];

  const education = [
    {
      degree: 'B.E. in Electronics & Telecommunication Engineering',
      institution: 'JSPM\'s Rajarshi Shahu College of Engineering, Pune',
      period: '2019 - 2023',
      grade: 'CGPA: 8.2/10',
      highlights: [
        'Relevant Coursework: Computer Networks, Operating Systems, Database Management',
        'Final Year Project: Cloud-based IoT Device Management System',
        'Active member of Technical Society and Coding Club'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Maharashtra State Board',
      period: '2017 - 2019',
      grade: 'Percentage: 85.6%',
      highlights: [
        'Science Stream with Mathematics, Physics, Chemistry',
        'School Representative in Inter-School Science Exhibition'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-ASA-12345',
      status: 'Active'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2024',
      credentialId: 'CKA-67890',
      status: 'Active'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023',
      credentialId: 'DCA-54321',
      status: 'Active'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '2023',
      credentialId: 'HCT-98765',
      status: 'Active'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'AZ900-11111',
      status: 'Active'
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: '2024',
      credentialId: 'GCP-PCA-22222',
      status: 'Active'
    }
  ];

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      proficiency: 90,
      color: '#FF9900',
      description: 'AWS (EC2, S3, Lambda, VPC), Azure, Google Cloud Platform',
      technologies: ['AWS', 'Azure', 'GCP', 'EC2', 'S3', 'Lambda']
    },
    {
      title: 'Container Technologies',
      icon: Container,
      proficiency: 85,
      color: '#2496ED',
      description: 'Docker, Kubernetes, Container Orchestration',
      technologies: ['Docker', 'Kubernetes', 'Podman', 'Helm']
    },
    {
      title: 'Infrastructure as Code',
      icon: Settings,
      proficiency: 88,
      color: '#844FBA',
      description: 'Terraform, CloudFormation, Ansible',
      technologies: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
    },
    {
      title: 'CI/CD Tools',
      icon: GitBranch,
      proficiency: 85,
      color: '#FC6D26',
      description: 'Jenkins, GitHub Actions, GitLab CI/CD',
      technologies: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Azure DevOps']
    },
    {
      title: 'Monitoring & Logging',
      icon: Eye,
      proficiency: 80,
      color: '#E6522C',
      description: 'Prometheus, Grafana, ELK Stack, CloudWatch',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch']
    },
    {
      title: 'Operating Systems',
      icon: Server,
      proficiency: 90,
      color: '#0078D4',
      description: 'Linux (Ubuntu, CentOS, RHEL), Windows Server',
      technologies: ['Linux', 'Ubuntu', 'CentOS', 'RHEL', 'Windows']
    },
    {
      title: 'Scripting & Programming',
      icon: Code2,
      proficiency: 85,
      color: '#3776AB',
      description: 'Python, Bash, PowerShell, YAML, JSON',
      technologies: ['Python', 'Bash', 'PowerShell', 'YAML', 'JSON']
    },
    {
      title: 'Version Control',
      icon: Terminal,
      proficiency: 90,
      color: '#F05032',
      description: 'Git, GitHub, GitLab, Bitbucket',
      technologies: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          
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
                Professional Resume
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Comprehensive overview of my professional journey, technical expertise, and educational background
              </motion.p>
              
              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Kamal_Parihar_DevOps_Resume.pdf';
                    link.click();
                  }}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF Resume
                </motion.button>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Professional Summary Section */}
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div className="mb-16 sm:mb-20 lg:mb-24">
              <Card className="p-8 sm:p-10 lg:p-12 border-2 border-primary/20 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm">
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Professional Summary
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center max-w-5xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Passionate DevOps Engineer with 6+ months of hands-on experience in cloud infrastructure, containerization, and automation. 
                  Proficient in AWS, Docker, Kubernetes, and modern CI/CD practices. Recently graduated with a Bachelor's in Electronics & 
                  Telecommunication Engineering, bringing fresh perspectives and strong technical fundamentals to cloud-native solutions. 
                  Committed to continuous learning and implementing best practices in infrastructure automation and system reliability.
                </motion.p>
              </Card>
            </motion.div>
          </ScrollReveal>

          {/* Experience & Education Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
            
            {/* Experience Section */}
            <div className="space-y-8">
              <ScrollReveal direction="left" delay={0.2}>
                <motion.div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"
                    >
                      <Briefcase className="h-8 w-8 text-primary" />
                    </motion.div>
                    Professional Experience
                  </h2>

                  <div className="relative space-y-8">
                    {/* Timeline line */}
                    <motion.div 
                      className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-30"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                      style={{ originY: 0 }}
                    />

                    {experiences.map((exp, index) => (
                      <ScrollReveal key={index} direction="left" delay={index * 0.15}>
                        <motion.div
                          whileHover={{ x: 8 }}
                          className="relative pl-16"
                        >
                          <motion.div 
                            className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="w-4 h-4 rounded-full bg-white" />
                          </motion.div>

                          <RippleEffect>
                            <Card className="p-6 sm:p-8 border-2 hover:border-primary/50 transition-all duration-300 glow-hover cursor-pointer bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-accent/5">
                              <div className="space-y-4">
                                <div>
                                  <motion.h3 
                                    className="text-xl sm:text-2xl font-bold text-foreground mb-2"
                                    whileHover={{ x: 5 }}
                                  >
                                    {exp.title}
                                  </motion.h3>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                                    <span className="hidden sm:block text-muted-foreground">•</span>
                                    <p className="text-muted-foreground font-medium">{exp.location}</p>
                                  </div>
                                  <p className="text-sm sm:text-base text-accent font-medium mb-3">{exp.period}</p>
                                </div>
                                
                                <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                                
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                                  <ul className="space-y-2">
                                    {exp.achievements.map((achievement, achIndex) => (
                                      <motion.li
                                        key={achIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * achIndex }}
                                        className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                                      >
                                        <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                                        {achievement}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </Card>
                          </RippleEffect>
                        </motion.div>
                      </ScrollReveal>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Education Section */}
            <div className="space-y-8">
              <ScrollReveal direction="right" delay={0.3}>
                <motion.div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 flex items-center gap-4">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="p-3 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl"
                    >
                      <GraduationCap className="h-8 w-8 text-secondary" />
                    </motion.div>
                    Education
                  </h2>

                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <ScrollReveal key={index} direction="right" delay={index * 0.15}>
                        <RippleEffect>
                          <Card className="p-6 sm:p-8 glow-hover border-2 hover:border-secondary/50 transition-all duration-300 cursor-pointer bg-gradient-to-br from-card to-card/50 hover:from-secondary/5 hover:to-accent/5">
                            <div className="space-y-4">
                              <div>
                                <motion.h3 
                                  className="text-xl sm:text-2xl font-bold text-foreground mb-2"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  {edu.degree}
                                </motion.h3>
                                <p className="text-secondary font-semibold text-lg mb-1">{edu.institution}</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                  <p className="text-accent font-medium">{edu.period}</p>
                                  <span className="hidden sm:block text-muted-foreground">•</span>
                                  <p className="text-muted-foreground font-medium">{edu.grade}</p>
                                </div>
                              </div>
                              
                              {edu.highlights && (
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-foreground">Highlights:</h4>
                                  <ul className="space-y-2">
                                    {edu.highlights.map((highlight, hlIndex) => (
                                      <motion.li
                                        key={hlIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * hlIndex }}
                                        className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                                      >
                                        <span className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></span>
                                        {highlight}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </Card>
                        </RippleEffect>
                      </ScrollReveal>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>

          {/* Technical Skills Section - Full Width */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <ScrollReveal direction="up" delay={0.4}>
              <motion.div>
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Technical Skills
                </motion.h2>
                <motion.p
                  className="text-center text-muted-foreground mb-12 sm:mb-16 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Comprehensive expertise across cloud platforms, DevOps tools, and modern infrastructure technologies
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                  {skillCategories.map((category, index) => (
                    <ScrollReveal key={category.title} direction="scale" delay={index * 0.1}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -10 }}
                        className="group h-full"
                      >
                        <RippleEffect>
                          <Card className="p-6 lg:p-8 h-full border-2 border-border hover:border-primary/50 transition-all duration-500 glow-hover bg-gradient-to-br from-card to-card/50 group-hover:from-primary/5 group-hover:to-accent/5 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                              <div className="w-full h-full bg-gradient-to-br from-primary to-accent" />
                            </div>
                            
                            <div className="relative space-y-6">
                              {/* Header */}
                              <div className="flex items-center gap-4">
                                <motion.div
                                  className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors shadow-lg"
                                  whileHover={{ rotate: [0, -12, 12, -12, 0] }}
                                  transition={{ duration: 0.6 }}
                                  style={{ color: category.color }}
                                >
                                  <category.icon className="h-8 w-8 lg:h-10 lg:w-10" />
                                </motion.div>
                                <div className="flex-1">
                                  <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    {category.title}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    Proficiency: <span className="font-bold text-primary">{category.proficiency}%</span>
                                  </p>
                                </div>
                              </div>

                              {/* Progress Bar */}
                              <div className="space-y-3">
                                <motion.div
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                                  style={{ originX: 0 }}
                                  className="relative"
                                >
                                  <div className="w-full bg-muted rounded-full h-4 overflow-hidden shadow-inner">
                                    <motion.div
                                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-lg"
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${category.proficiency}%` }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                    />
                                  </div>
                                </motion.div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {category.description}
                                </p>
                              </div>

                              {/* Technologies */}
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-foreground">Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {category.technologies.map((tech, techIndex) => (
                                    <motion.span
                                      key={tech}
                                      initial={{ opacity: 0, scale: 0.7, y: 20 }}
                                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ 
                                        delay: 0.8 + index * 0.1 + techIndex * 0.05,
                                        type: "spring",
                                        stiffness: 200
                                      }}
                                      whileHover={{ scale: 1.15, y: -3, rotateZ: 2 }}
                                      className="px-3 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-xs font-semibold border border-primary/20 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:border-primary/40 transition-all cursor-pointer shadow-sm hover:shadow-md"
                                    >
                                      {tech}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Card>
                        </RippleEffect>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Certifications Section */}
          <div className="mb-16 sm:mb-20">
            <ScrollReveal direction="up" delay={0.5}>
              <motion.div>
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Professional Certifications
                </motion.h2>
                <motion.p
                  className="text-center text-muted-foreground mb-12 sm:mb-16 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Industry-recognized certifications demonstrating expertise in cloud platforms and DevOps technologies
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {certifications.map((cert, index) => (
                    <ScrollReveal key={cert.name} direction="scale" delay={index * 0.1}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -8 }}
                        className="group"
                      >
                        <RippleEffect>
                          <Card className="p-6 lg:p-8 h-full border-2 border-border hover:border-accent/50 transition-all duration-300 glow-hover bg-gradient-to-br from-card to-card/50 group-hover:from-accent/5 group-hover:to-primary/5 relative overflow-hidden">
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-xs font-semibold border border-green-500/30">
                                {cert.status}
                              </span>
                            </div>
                            
                            <div className="space-y-4 pt-4">
                              <div>
                                <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight mb-3">
                                  {cert.name}
                                </h3>
                                <p className="text-accent font-semibold text-base mb-2">{cert.issuer}</p>
                                <p className="text-sm text-muted-foreground mb-1">
                                  <span className="font-medium">Issued:</span> {cert.date}
                                </p>
                                <p className="text-xs text-muted-foreground/80">
                                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </RippleEffect>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Call to Action */}
          <ScrollReveal direction="up" delay={0.6}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  Ready to Collaborate?
                </motion.h3>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  I'm always open to discussing new opportunities, exciting projects, and innovative solutions. 
                  Let's connect and explore how we can work together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    View Portfolio
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Resume;
