import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUp, Github, Cloud, Server, Container, Wrench, GitBranch, Code2, Shield, Database, Mail, Award, Users, Zap, Download, GraduationCap, Briefcase, FolderOpen, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import profileHero from '@/assets/profile-hero.jpg';
import TechIcon from '@/components/TechIcon';
import RippleEffect from '@/components/RippleEffect';
import ScrollReveal from '@/components/ScrollReveal';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const features = [
    { icon: Cloud, title: 'Cloud Architecture', description: 'AWS & Azure expertise', color: 'text-orange-500' },
    { icon: Server, title: 'DevOps Engineering', description: 'CI/CD & Automation', color: 'text-blue-500' },
    { icon: Database, title: 'Infrastructure', description: 'IaC with Terraform', color: 'text-purple-500' },
    { icon: Shield, title: 'Security', description: 'DevSecOps practices', color: 'text-green-500' },
  ];

  const stats = [
    { icon: Award, number: '20+', label: 'Projects Completed', color: 'text-yellow-500' },
    { icon: Users, number: '15+', label: 'Happy Clients', color: 'text-blue-500' },
    { icon: Zap, number: '3+', label: 'Years Experience', color: 'text-purple-500' },
  ];

  const achievements = [
    { 
      icon: GraduationCap, 
      title: 'Education', 
      value: 'B.E. in E&TC Engineering',
      subtitle: 'JSPM\'s RSCOE, Pune',
      color: 'text-blue-500'
    },
    { 
      icon: Briefcase, 
      title: 'Experience', 
      value: '3+ Years',
      subtitle: 'DevOps & Cloud Engineering',
      color: 'text-green-500'
    },
    { 
      icon: FolderOpen, 
      title: 'Projects', 
      value: '20+ Completed',
      subtitle: 'Deployments, CI/CD, Infrastructure',
      color: 'text-orange-500'
    },
    { 
      icon: Trophy, 
      title: 'Certifications', 
      value: '10+ Earned',
      subtitle: 'AWS, Azure, Kubernetes',
      color: 'text-purple-500'
    },
  ];

  const techStack = [
    { 
      icon: <Cloud size={40} />, 
      name: 'AWS', 
      color: '#FF9900',
      expertise: 'Expert'
    },
    { 
      icon: <Container size={40} />, 
      name: 'Docker', 
      color: '#2496ED',
      expertise: 'Advanced'
    },
    { 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001z"/></svg>,
      name: 'Kubernetes', 
      color: '#326CE5',
      expertise: 'Advanced'
    },
    { 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.447 3.724l-6.508 1.424a.5.5 0 0 0-.378.44l-.813 7.431a.5.5 0 0 0 .121.39l4.984 5.937a.5.5 0 0 0 .754.013l5.148-5.934a.5.5 0 0 0 .122-.39l-.806-7.43a.5.5 0 0 0-.377-.441l-2.247-.491z"/></svg>,
      name: 'Terraform', 
      color: '#844FBA',
      expertise: 'Expert'
    },
    { 
      icon: <GitBranch size={40} />, 
      name: 'GitLab CI', 
      color: '#FC6D26',
      expertise: 'Advanced'
    },
    { 
      icon: <Code2 size={40} />, 
      name: 'Jenkins', 
      color: '#D24939',
      expertise: 'Intermediate'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              animate={{
                x: [0, mousePosition.x * 0.02, 0],
                y: [0, mousePosition.y * 0.02, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              style={{
                left: `${5 + (i * 4)}%`,
                top: `${10 + (i * 3)}%`,
                width: `${6 + (i % 3) * 2}px`,
                height: `${6 + (i % 3) * 2}px`,
                background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                opacity: 0.3
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* LEFT SIDE - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 text-center lg:text-left"
              >
                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for Projects</span>
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Kamal Parihar
                    </span>
                  </motion.h1>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light"
                  >
                    DevOps Engineer & Cloud Solutions Architect
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 max-w-2xl mx-auto lg:mx-0"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Transforming businesses through cutting-edge cloud infrastructure and DevOps automation. 
                    Specialized in AWS, Azure, Kubernetes, and modern CI/CD pipelines.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
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
                      <Link to="/contact">
                        Let's Collaborate
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
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
                      <Link to="/portfolio">
                        View Portfolio
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-3 gap-6 pt-8"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.3 
                        }}
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 mb-2 ${stat.color}`}
                      >
                        <stat.icon className="h-6 w-6" />
                      </motion.div>
                      <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE - Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative flex justify-center"
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 20px hsl(var(--primary) / 0.5)',
                        '0 0 60px hsl(var(--accent) / 0.8)',
                        '0 0 20px hsl(var(--primary) / 0.5)'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  {/* Profile Image */}
                  <motion.div
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img
                      src={profileHero}
                      alt="Kamal Parihar - DevOps Engineer"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Floating Tech Icons */}
                  {[
                    { icon: Cloud, position: 'top-0 right-8', delay: 0, color: 'text-orange-500' },
                    { icon: Server, position: 'bottom-8 left-0', delay: 0.5, color: 'text-blue-500' },
                    { icon: Container, position: 'top-12 left-4', delay: 1, color: 'text-cyan-500' },
                    { icon: Database, position: 'bottom-0 right-12', delay: 1.5, color: 'text-green-500' }
                  ].map(({ icon: Icon, position, delay, color }, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${position} p-3 bg-card border border-border rounded-full shadow-lg backdrop-blur-sm`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -10, 0]
                      }}
                      transition={{
                        opacity: { delay: 2 + delay, duration: 0.6 },
                        scale: { delay: 2 + delay, duration: 0.6 },
                        y: { duration: 3, repeat: Infinity, delay: delay }
                      }}
                      whileHover={{ scale: 1.2, y: -5 }}
                    >
                      <Icon className={`h-5 w-5 ${color}`} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                What I Bring to Your Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expertise in modern cloud technologies and DevOps practices to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <RippleEffect>
                    <Card className="p-6 h-full border-2 border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50 group-hover:shadow-lg">
                      <div className="space-y-4">
                        <motion.div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 ${feature.color} group-hover:scale-110 transition-transform`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <feature.icon className="h-6 w-6" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </Card>
                  </RippleEffect>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Achievements Section */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                Professional Achievements
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A glimpse of my professional journey and accomplishments in the cloud and DevOps space
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="p-6 h-full border-2 border-border hover:border-primary/50 transition-all duration-300 bg-card group-hover:shadow-lg">
                    <div className="space-y-4 text-center">
                      <motion.div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 ${achievement.color} group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <achievement.icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h3>
                        <div className="text-xl font-bold text-primary mb-2">
                          {achievement.value}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Tech Stack Section */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tools and technologies I use to build scalable, reliable, and secure cloud solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <Card className="p-6 h-full border-2 border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50 group-hover:shadow-lg">
                    <div className="space-y-4 text-center">
                      <motion.div
                        className="flex justify-center"
                        style={{ color: tech.color }}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {tech.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {tech.name}
                        </h3>
                        <Badge variant="secondary" className="mt-2 text-xs">
                          {tech.expertise}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                  Ready to Transform Your Infrastructure?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how I can help accelerate your cloud journey and optimize your DevOps processes.
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
                      <Link to="/contact">
                        <Mail className="h-5 w-5 mr-2" />
                        Get In Touch
                      </Link>
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
                      <Link to="/resume">
                        <Download className="h-5 w-5 mr-2" />
                        Download Resume
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Git-themed Back to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0,
          rotate: showScrollTop ? 0 : 180
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        <motion.div
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative group cursor-pointer"
          onClick={scrollToTop}
        >
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Main button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full shadow-xl border-2 border-background flex items-center justify-center group-hover:shadow-2xl transition-all duration-300">
            {/* Git branch animation background */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%'
              }}
            />
            
            {/* Icons */}
            <motion.div
              className="relative z-10 flex items-center justify-center"
              whileHover={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 0.5 }}
            >
              <ArrowUp className="h-6 w-6 text-white font-bold" strokeWidth={2.5} />
            </motion.div>
            
            {/* Git icon overlay on hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              initial={{ scale: 0.5, rotate: 45 }}
              whileHover={{ scale: 0.8, rotate: 0 }}
            >
              <Github className="h-4 w-4 text-white" />
            </motion.div>
          </div>
          
          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            initial={{ x: 10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
                <GitBranch className="h-4 w-4 text-primary" />
                <span>git checkout main</span>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-l-border border-y-4 border-y-transparent" />
            </div>
          </motion.div>
          
          {/* Floating particles around button */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              animate={{
                x: [0, Math.sin(i * 2) * 20, 0],
                y: [0, Math.cos(i * 2) * 20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 15}%`
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;