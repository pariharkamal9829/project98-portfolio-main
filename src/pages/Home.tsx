import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Server, Container, Wrench, GitBranch, Code2, Shield, Database, Mail, Award, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import profileHero from '@/assets/profile-hero.jpg';
import TechIcon from '@/components/TechIcon';
import RippleEffect from '@/components/RippleEffect';
import ScrollReveal from '@/components/ScrollReveal';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: Cloud, title: 'Cloud Architecture', description: 'AWS & Azure expertise' },
    { icon: Server, title: 'DevOps Engineering', description: 'CI/CD & Automation' },
    { icon: Database, title: 'Infrastructure', description: 'IaC with Terraform' },
    { icon: Shield, title: 'Security', description: 'DevSecOps practices' },
  ];

  const stats = [
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '20+', label: 'Happy Clients' },
    { icon: Zap, number: '5+', label: 'Years Experience' },
  ];

  const techStack = [
    { 
      icon: <Cloud size={40} />, 
      name: 'AWS', 
      color: '#FF9900' 
    },
    { 
      icon: <Container size={40} />, 
      name: 'Docker', 
      color: '#2496ED' 
    },
    { 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.857-1.073L11.2.513a1.606 1.606 0 0 1 1.595 0l8.246 3.984c.431.209.749.604.854 1.075l2.062 8.955c.108.47-.005.963-.308 1.339z"/></svg>,
      name: 'Kubernetes', 
      color: '#326CE5' 
    },
    { 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.447 3.724l-6.508 1.424a.5.5 0 0 0-.378.44l-.813 7.431a.5.5 0 0 0 .121.39l4.984 5.937a.5.5 0 0 0 .754.013l5.148-5.934a.5.5 0 0 0 .122-.39l-.806-7.43a.5.5 0 0 0-.377-.441l-2.247-.491zm2.545 1.094l.755 6.962-4.832 5.573-4.681-5.575.762-6.962 3.998-.873 4.014.875zM11.995 1.5c1.354 0 2.558.348 3.613 1.043a6.865 6.865 0 0 1 2.542 2.828c.599 1.177.901 2.463.901 3.858 0 1.354-.299 2.64-.901 3.857a6.865 6.865 0 0 1-2.542 2.829c-1.055.695-2.26 1.043-3.613 1.043-1.354 0-2.558-.348-3.613-1.043a6.865 6.865 0 0 1-2.542-2.829C5.241 11.909 4.94 10.623 4.94 9.229c0-1.395.301-2.681.901-3.858a6.865 6.865 0 0 1 2.542-2.828C9.437 1.848 10.641 1.5 11.995 1.5z"/></svg>,
      name: 'Terraform', 
      color: '#844FBA' 
    },
    { 
      icon: <GitBranch size={40} />, 
      name: 'GitLab CI', 
      color: '#FC6D26' 
    },
    { 
      icon: <Code2 size={40} />, 
      name: 'Jenkins', 
      color: '#D24939' 
    },
    { 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"/></svg>,
      name: 'Azure', 
      color: '#0078D4' 
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Professional Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              animate={{
                x: [0, mousePosition.x * 0.02, 0],
                y: [0, mousePosition.y * 0.02, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              style={{
                left: `${5 + (i * 4.5)}%`,
                top: `${10 + (i * 3)}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE - Name, Title, Summary */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold"
              >
                <Zap size={16} />
                Senior DevOps Engineer
              </motion.div>

              {/* Name & Title */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl font-bold"
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    John Doe
                  </span>
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl text-muted-foreground font-light"
                >
                  Cloud Solutions Architect & DevOps Expert
                </motion.h2>
              </div>

              {/* Professional Summary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Transforming businesses through cutting-edge cloud infrastructure and DevOps automation. 
                  Specialized in AWS, Azure, Kubernetes, and modern CI/CD pipelines.
                </p>
                <p className="text-base text-muted-foreground/80 leading-relaxed max-w-xl">
                  5+ years building scalable, secure, and efficient cloud solutions for enterprise clients. 
                  Passionate about infrastructure as code and continuous innovation.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center gap-2 mb-1">
                      <stat.icon className="h-5 w-5 text-primary" />
                      <span className="text-2xl font-bold text-primary">{stat.number}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-4 group shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link to="/contact">
                      Let's Work Together
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                    className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-4 group"
                  >
                    <Link to="/portfolio">
                      View Portfolio
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative w-96 h-96">
                <motion.div
                  className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl mx-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={profileHero}
                    alt="DevOps Engineer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <ScrollReveal direction="up">
        <div className="max-w-6xl mx-auto mb-32 px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technology Arsenal
          </motion.h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Mastering the latest tools and technologies to deliver exceptional cloud solutions
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 0.1}>
                <RippleEffect>
                  <motion.div
                    whileHover={{ scale: 1.1, y: -10 }}
                    className="p-4 rounded-xl bg-card border-2 border-border glow-hover hover:border-primary transition-all group cursor-pointer text-center"
                  >
                    <TechIcon icon={tech.icon} color={tech.color} name={tech.name} />
                  </motion.div>
                </RippleEffect>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Features Grid */}
      <ScrollReveal direction="up">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 0.1}>
                <RippleEffect>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 rounded-2xl bg-card border-2 border-border glow-hover hover:border-primary transition-all group cursor-pointer h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                </RippleEffect>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Ready to Start Section */}
      <ScrollReveal direction="up">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center px-4 max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 p-8">
            <motion.h3
              className="text-3xl font-bold mb-4"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              Ready to Start Your Project?
            </motion.h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">
              Whether it's a web application, mobile app, or DevOps solution, I'm here to help bring your ideas to life. 
              Let's create something extraordinary together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-4 group"
                >
                  <Link to="/contact">
                    Start a Conversation
                    <Mail className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                  className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-4 group"
                >
                  <Link to="/portfolio">
                    View My Work
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </ScrollReveal>
    </div>
  );
};

export default Home;