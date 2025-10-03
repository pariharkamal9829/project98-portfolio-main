import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import RippleEffect from '@/components/RippleEffect';
import ScrollReveal from '@/components/ScrollReveal';
import CertificateSlider from '@/components/CertificateSlider';

const Resume = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Led cloud migration projects, implemented CI/CD pipelines, managed Kubernetes clusters',
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Innovations Ltd',
      period: '2019 - 2021',
      description: 'Automated infrastructure deployment, optimized AWS costs, developed monitoring solutions',
    },
    {
      title: 'Systems Administrator',
      company: 'Digital Systems Corp',
      period: '2017 - 2019',
      description: 'Managed Linux servers, implemented backup solutions, maintained network infrastructure',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tech University',
      period: '2013 - 2017',
    },
  ];

  const skills = [
    { name: 'AWS', level: 95 },
    { name: 'Kubernetes', level: 90 },
    { name: 'Docker', level: 92 },
    { name: 'Terraform', level: 88 },
    { name: 'Jenkins/CI/CD', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Ansible', level: 83 },
    { name: 'Monitoring (Prometheus)', level: 87 },
  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal direction="down">
          <motion.h1
            className="text-5xl font-bold text-center mb-12 text-gradient-primary"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Resume
          </motion.h1>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <ScrollReveal direction="left" delay={0.2}>
              <motion.div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Briefcase className="h-8 w-8 text-primary" />
                  </motion.div>
                  Experience
                </h2>

                <div className="relative space-y-6">
                  {/* Timeline line */}
                  <motion.div 
                    className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-aws"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ originY: 0 }}
                  />

                  {experiences.map((exp, index) => (
                    <ScrollReveal key={index} direction="left" delay={index * 0.1}>
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="relative pl-12"
                      >
                        <motion.div 
                          className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center glow-primary"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                        </motion.div>

                        <RippleEffect>
                          <Card className="p-6 border-2 hover:border-primary transition-all glow-hover cursor-pointer">
                            <motion.h3 
                              className="text-xl font-semibold mb-1"
                              whileHover={{ x: 5 }}
                            >
                              {exp.title}
                            </motion.h3>
                            <p className="text-primary font-medium mb-2">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                            <p className="text-foreground/80">{exp.description}</p>
                          </Card>
                        </RippleEffect>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Education Section */}
            <ScrollReveal direction="left" delay={0.3}>
              <motion.div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </motion.div>
                  Education
                </h2>

                {education.map((edu, index) => (
                  <RippleEffect key={index}>
                    <Card className="p-6 glow-hover border-2 hover:border-secondary transition-all cursor-pointer">
                      <motion.h3 
                        className="text-xl font-semibold mb-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <p className="text-secondary font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </Card>
                  </RippleEffect>
                ))}
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Column - Skills & Certifications */}
          <div className="space-y-8">
            {/* Skills Section */}
            <ScrollReveal direction="right" delay={0.2}>
              <motion.div>
                <h2 className="text-3xl font-bold mb-6">Skills</h2>

                <Card className="p-6 space-y-5 glow-hover border-2 hover:border-accent transition-all">
                  {skills.map((skill, index) => (
                    <ScrollReveal key={skill.name} direction="right" delay={index * 0.05}>
                      <motion.div
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <motion.span 
                            className="font-medium"
                            whileHover={{ scale: 1.05, color: 'hsl(var(--primary))' }}
                          >
                            {skill.name}
                          </motion.span>
                          <motion.span 
                            className="text-sm text-muted-foreground"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          style={{ originX: 0 }}
                        >
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </Card>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Certificates Section - Full Width */}
        <div className="mt-16">
          <CertificateSlider />
        </div>
      </div>
    </div>
  );
};

export default Resume;
