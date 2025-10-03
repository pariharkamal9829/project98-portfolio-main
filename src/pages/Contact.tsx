import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle, User, FileText, Github, Linkedin, Twitter, Instagram, Youtube, Globe, Calendar, ArrowRight, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

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
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      color: "text-red-500",
      hoverColor: "hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "text-green-500",
      hoverColor: "hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-950",
      description: "Call me during business hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950",
      description: "Available for local meetings"
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      username: "@yourusername",
      color: "text-gray-900 dark:text-white",
      hoverColor: "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900",
      followers: "1.2k"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      username: "Your Name",
      color: "text-blue-600",
      hoverColor: "hover:bg-blue-600 hover:text-white",
      followers: "2.5k"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      username: "@yourusername",
      color: "text-sky-500",
      hoverColor: "hover:bg-sky-500 hover:text-white",
      followers: "892"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      username: "@yourusername",
      color: "text-pink-500",
      hoverColor: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white",
      followers: "643"
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      name: "YouTube",
      url: "https://youtube.com/@yourusername",
      username: "@yourusername",
      color: "text-red-600",
      hoverColor: "hover:bg-red-600 hover:text-white",
      followers: "1.8k"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      name: "Portfolio",
      url: "https://yourwebsite.com",
      username: "yourwebsite.com",
      color: "text-emerald-500",
      hoverColor: "hover:bg-emerald-500 hover:text-white",
      followers: "Live"
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
    <section className="py-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -5, 5, 0],
                scale: [1, 1.1, 1, 1.05, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <MessageCircle className="h-12 w-12 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              LET'S CONNECT
            </h1>
          </motion.div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-6"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you. Let's build something amazing together!
          </motion.p>
        </motion.div>

        {/* Main Contact Section - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT SIDE - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <Card className="bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Phone className="h-6 w-6 text-primary" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`block p-4 rounded-lg border-2 border-border ${method.hoverColor} transition-all duration-300 group`}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`p-3 rounded-full bg-background ${method.color} group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {method.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-current transition-colors">
                          {method.description}
                        </p>
                        <p className="font-mono text-sm text-primary group-hover:text-current transition-colors">
                          {method.value}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-current group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Send className="h-6 w-6 text-primary" />
                  Send Message
                  <Badge className="ml-auto bg-green-500 text-white">
                    <Clock className="h-3 w-3 mr-1" />
                    24h Response
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 360, 0]
                        }}
                        transition={{ duration: 1 }}
                        className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label className="text-sm font-medium mb-2 flex items-center gap-2">
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
                            className="border-2 border-border focus:border-primary transition-colors"
                          />
                        </motion.div>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label className="text-sm font-medium mb-2 flex items-center gap-2">
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
                            className="border-2 border-border focus:border-primary transition-colors"
                          />
                        </motion.div>
                      </div>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Subject *
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project Discussion / Collaboration / General Inquiry"
                          required
                          className="border-2 border-border focus:border-primary transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <MessageCircle className="h-4 w-4 text-primary" />
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project, ideas, or how we can collaborate..."
                          rows={6}
                          required
                          className="border-2 border-border focus:border-primary transition-colors resize-none"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CENTER - Meeting Scheduler */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16 flex justify-center"
        >
          <div className="w-full max-w-md">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 shadow-xl">
              <CardContent className="p-6 text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="mb-4"
                >
                  <Calendar className="h-12 w-12 mx-auto text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Schedule a Meeting</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Book a free 30-minute consultation call
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold group"
                  >
                    <a href="https://calendly.com/yourusername" target="_blank" rel="noopener noreferrer">
                      Book a Call
                      <Calendar className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                </motion.div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  <span className="text-xs text-green-600">Available for new projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Social Media Grid Section - Connect With Me */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl justify-center">
                <Globe className="h-6 w-6 text-primary" />
                Connect With Me
                <Badge className="ml-2 bg-blue-500 text-white">
                  <Users className="h-3 w-3 mr-1" />
                  6.8k+ Followers
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-lg border-2 border-border ${social.hoverColor} transition-all duration-300 group text-center`}
                  >
                    <motion.div
                      className={`mx-auto mb-2 p-3 rounded-full bg-background ${social.color} group-hover:scale-110 transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {social.icon}
                    </motion.div>
                    <h3 className="font-semibold text-sm group-hover:text-current transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-xs text-muted-foreground group-hover:text-current transition-colors">
                      {social.username}
                    </p>
                    {social.followers && (
                      <Badge variant="outline" className="mt-1 text-xs group-hover:border-current transition-colors">
                        {social.followers}
                      </Badge>
                    )}
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;