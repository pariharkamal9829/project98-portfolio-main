import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import RippleEffect from '@/components/RippleEffect';
import ScrollReveal from '@/components/ScrollReveal';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'AWS Cloud Migration',
      description: 'Migrated 50+ services to AWS with zero downtime using Kubernetes and EKS',
      image: project1,
      category: 'AWS',
      tags: ['AWS', 'Kubernetes', 'EKS', 'Docker'],
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Implemented GitLab CI/CD pipeline reducing deployment time by 80%',
      image: project2,
      category: 'DevOps Tools',
      tags: ['GitLab CI', 'Docker', 'Ansible', 'Terraform'],
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning with Terraform across multi-cloud',
      image: project3,
      category: 'AWS',
      tags: ['Terraform', 'AWS', 'Azure', 'IaC'],
    },
    {
      title: 'Kubernetes Cluster Setup',
      description: 'Designed and deployed production-grade Kubernetes clusters with high availability',
      image: project1,
      category: 'DevOps Tools',
      tags: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
    },
    {
      title: 'Monitoring & Logging',
      description: 'Implemented comprehensive monitoring using Prometheus, Grafana, and ELK stack',
      image: project2,
      category: 'DevOps Tools',
      tags: ['Prometheus', 'Grafana', 'ELK', 'Monitoring'],
    },
    {
      title: 'Serverless Architecture',
      description: 'Built serverless applications using AWS Lambda, API Gateway, and DynamoDB',
      image: project3,
      category: 'AWS',
      tags: ['AWS Lambda', 'API Gateway', 'Serverless', 'DynamoDB'],
    },
  ];

  const filters = ['All', 'AWS', 'Azure', 'DevOps Tools'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal direction="down">
          <motion.div
            className="text-center mb-12"
          >
            <motion.h1 
              className="text-5xl font-bold mb-4 text-gradient-primary"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Portfolio
            </motion.h1>
            <p className="text-xl text-muted-foreground">
              Showcasing my DevOps & Cloud infrastructure projects
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal direction="up" delay={0.2}>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Filter className="h-5 w-5 text-primary" />
            </motion.div>
            {filters.map((filter, index) => (
              <RippleEffect key={filter}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant={activeFilter === filter ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(filter)}
                    className={activeFilter === filter ? 'glow-primary' : 'glow-hover'}
                  >
                    {filter}
                  </Button>
                </motion.div>
              </RippleEffect>
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.title + index} direction="scale" delay={index * 0.1}>
                <motion.div
                  layout
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <RippleEffect>
                    <Card className="overflow-hidden h-full border-2 hover:border-primary transition-all glow-hover group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                          whileHover={{ scale: 1.15, rotate: 2 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-aws opacity-0 group-hover:opacity-90 transition-opacity flex items-end justify-center pb-4"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.9 }}
                        >
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Button size="sm" className="glow-primary bg-card text-foreground hover:bg-card/90">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Project
                            </Button>
                          </motion.div>
                        </motion.div>

                        {/* Animated corner accent */}
                        <motion.div
                          className="absolute top-0 right-0 w-16 h-16 bg-primary/20"
                          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        />
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + tagIndex * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 cursor-pointer"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </RippleEffect>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;
