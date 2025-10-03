import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle, User, FileText, Github, Linkedin, Twitter, Instagram, Youtube, Globe, Calendar, ArrowRight, Users, ExternalLink, Star, Heart, Coffee, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import RippleEffect from '@/components/RippleEffect';
import ScrollReveal from '@/components/ScrollReveal';

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  color: string;
  hoverColor: string;
  description: string;
}

interface SocialLink {
  icon: React.ReactNode;
  name: string;
  url: string;
  username: string;
  color: string;
  hoverColor: string;
  followers?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const contactMethods: ContactMethod[] = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "kamal.parihar@example.com",
      link: "mailto:kamal.parihar@example.com",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950",
      description: "Send me an email anytime - I typically respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
      color: "text-green-500",
      hoverColor: "hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-950",
      description: "Call me during IST business hours (9 AM - 6 PM)"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Pune, Maharashtra, India",
      link: "https://maps.google.com/?q=Pune,Maharashtra,India",
      color: "text-orange-500",
      hoverColor: "hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950",
      description: "Available for remote work and local meetings in Pune"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule Meeting",
      value: "Book a 30-min call",
      link: "https://calendly.com/kamal-parihar",
      color: "text-purple-500",
      hoverColor: "hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950",
      description: "Schedule a consultation call to discuss your project"
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com/kamal-parihar",
      username: "@kamal-parihar",
      color: "text-gray-900 dark:text-white",
      hoverColor: "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900",
      followers: "1.2k"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/kamal-parihar",
      username: "Kamal Parihar",
      color: "text-blue-600",
      hoverColor: "hover:bg-blue-600 hover:text-white",
      followers: "2.5k"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      url: "https://twitter.com/kamal_devops",
      username: "@kamal_devops",
      color: "text-sky-500",
      hoverColor: "hover:bg-sky-500 hover:text-white",
      followers: "892"
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      name: "YouTube",
      url: "https://youtube.com/@kamaldevops",
      username: "Kamal DevOps",
      color: "text-red-500",
      hoverColor: "hover:bg-red-500 hover:text-white",
      followers: "5.4k"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      name: "Portfolio",
      url: "https://kamal-parihar.dev",
      username: "kamal-parihar.dev",
      color: "text-emerald-500",
      hoverColor: "hover:bg-emerald-500 hover:text-white",
      followers: "Portfolio"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      url: "https://instagram.com/kamal.devops",
      username: "@kamal.devops",
      color: "text-pink-500",
      hoverColor: "hover:bg-pink-500 hover:text-white",
      followers: "1.8k"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
              Let's Connect
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Ready to transform your infrastructure? Let's discuss your next project and explore how we can 
              build something amazing together. I'm always excited to tackle new challenges.
            </motion.p>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto"
            >
              {[
                { icon: Clock, label: 'Response Time', value: '< 24h' },
                { icon: MessageCircle, label: 'Availability', value: '24/7' },
                { icon: Users, label: 'Projects', value: '20+' },
                { icon: Heart, label: 'Success Rate', value: '100%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          
          {/* LEFT SIDE - Contact Form */}
          <ScrollReveal direction="left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Send Me a Message
                </motion.h2>
                <motion.p
                  className="text-muted-foreground text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you as soon as possible.
                </motion.p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <Card className="p-6 sm:p-8 border-2 border-border hover:border-primary/50 transition-colors bg-gradient-to-br from-card to-card/50">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-2"
                          >
                            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                              <User className="h-4 w-4 text-primary" />
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              required
                              className="border-2 focus:border-primary transition-colors"
                            />
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="space-y-2"
                          >
                            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                              <Mail className="h-4 w-4 text-primary" />
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              required
                              className="border-2 focus:border-primary transition-colors"
                            />
                          </motion.div>
                        </div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="space-y-2"
                        >
                          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            Subject *
                          </label>
                          <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Project Discussion"
                            required
                            className="border-2 focus:border-primary transition-colors"
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                          className="space-y-2"
                        >
                          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <MessageCircle className="h-4 w-4 text-primary" />
                            Message *
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell me about your project requirements, timeline, and how I can help you achieve your goals..."
                            rows={6}
                            required
                            className="border-2 focus:border-primary transition-colors resize-none"
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                          className="pt-4"
                        >
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group"
                          >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              size="lg"
                              className="relative w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-4 shadow-xl hover:shadow-2xl transition-all"
                            >
                              {isSubmitting ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                                  Sending...
                                </motion.div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <Send className="h-5 w-5" />
                                  Send Message
                                </div>
                              )}
                            </Button>
                          </motion.div>
                        </motion.div>
                      </form>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center space-y-6"
                  >
                    <Card className="p-8 border-2 border-green-500/50 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-6"
                      >
                        <div className="p-4 bg-green-500 rounded-full">
                          <CheckCircle className="h-8 w-8 text-white" />
                        </div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-600 dark:text-green-400 leading-relaxed">
                        Thank you for reaching out! I've received your message and will get back to you within 24 hours. 
                        In the meantime, feel free to connect with me on social media.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="mt-6 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                      >
                        Send Another Message
                      </Button>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </ScrollReveal>

          {/* RIGHT SIDE - Contact Methods & Social Links */}
          <ScrollReveal direction="right">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Get in Touch
                </motion.h2>
                
                <div className="grid grid-cols-1 gap-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <RippleEffect>
                        <Card className="p-6 border-2 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer bg-gradient-to-br from-card to-card/50 group-hover:shadow-lg">
                          <a href={method.link} className="flex items-start gap-4">
                            <motion.div
                              className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 ${method.color} group-hover:scale-110 transition-transform`}
                              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              {method.icon}
                            </motion.div>
                            <div className="flex-1 space-y-2">
                              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                {method.title}
                              </h3>
                              <p className="font-semibold text-primary">{method.value}</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {method.description}
                              </p>
                            </div>
                            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </a>
                        </Card>
                      </RippleEffect>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div className="space-y-6">
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  Connect on Social Media
                </motion.h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group"
                    >
                      <RippleEffect>
                        <Card className="p-4 border-2 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer bg-gradient-to-br from-card to-card/50 group-hover:shadow-lg">
                          <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                          >
                            <motion.div
                              className={`p-2 rounded-lg ${social.color} group-hover:scale-110 transition-transform`}
                              whileHover={{ rotate: [0, -15, 15, -15, 0] }}
                              transition={{ duration: 0.4 }}
                            >
                              {social.icon}
                            </motion.div>
                            <div className="flex-1">
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {social.name}
                              </div>
                              <div className="text-sm text-muted-foreground">{social.username}</div>
                            </div>
                            <div className="text-right">
                              <Badge variant="secondary" className="text-xs">
                                {social.followers}
                              </Badge>
                            </div>
                          </a>
                        </Card>
                      </RippleEffect>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Fun Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="space-y-4"
              >
                <Card className="p-6 border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center mb-4"
                  >
                    <Coffee className="h-8 w-8 text-accent" />
                  </motion.div>
                  <h4 className="font-bold text-foreground mb-2">Coffee Chat?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Love discussing cloud architecture over coffee? I'm always up for a virtual coffee chat to talk about the latest in DevOps and cloud technologies!
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4"
                  >
                    <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Coffee Chat
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>

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
                Ready to Start Your Project?
              </motion.h3>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you need cloud migration, CI/CD implementation, or infrastructure automation, 
                I'm here to help you achieve your goals. Let's build something amazing together!
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
                    <a href="mailto:kamal.parihar@example.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Email Me Directly
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
                    <a href="/portfolio">
                      <Zap className="h-5 w-5 mr-2" />
                      View My Work
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

export default Contact;