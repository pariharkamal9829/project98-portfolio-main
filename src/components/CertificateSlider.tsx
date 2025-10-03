import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Award, Shield, CheckCircle, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  link: string;
  date: string;
  description: string;
  level: 'Professional' | 'Associate' | 'Expert' | 'Fundamental';
  verified: boolean;
}

const certificates: Certificate[] = [
  {
    id: 'java',
    title: 'Java Crash Course',
    issuer: 'Udemy',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='javaGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f97316;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ea580c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23javaGrad)'/%3E%3Ctext x='50%25' y='40%25' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3EJAVA%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial,sans-serif' font-size='16' fill='white' text-anchor='middle'%3ECrash Course%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EUdemy%3C/text%3E%3C/svg%3E",
    link: '/certificate/java',
    date: '2024',
    description: 'Comprehensive Java programming fundamentals and advanced concepts',
    level: 'Professional',
    verified: true
  },
  {
    id: 'sql',
    title: 'SQL With Relational Database',
    issuer: 'IBM',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='sqlGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230891b2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23sqlGrad)'/%3E%3Ctext x='50%25' y='40%25' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3ESQL%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3ERelational Database%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EIBM%3C/text%3E%3C/svg%3E",
    link: '/certificate/sql',
    date: '2024',
    description: 'Database design, SQL queries, and relational database management',
    level: 'Associate',
    verified: true
  },
  {
    id: 'htmlcssjs',
    title: 'HTML, CSS, Javascript',
    issuer: 'Great Learning',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='webGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23dc2626;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2316a34a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23eab308;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23webGrad)'/%3E%3Ctext x='50%25' y='35%25' font-family='Arial,sans-serif' font-size='18' font-weight='bold' fill='white' text-anchor='middle'%3EHTML CSS JS%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EWeb Development%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EGreat Learning%3C/text%3E%3C/svg%3E",
    link: '/certificate/htmlcssjs',
    date: '2023',
    description: 'Frontend web development fundamentals and responsive design',
    level: 'Fundamental',
    verified: true
  },
  {
    id: 'ai',
    title: 'Learn AI Skill Challenge',
    issuer: 'Microsoft',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='aiGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%237c3aed;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%235b21b6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23aiGrad)'/%3E%3Ctext x='50%25' y='40%25' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3EAI%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3ESkill Challenge%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EMicrosoft%3C/text%3E%3C/svg%3E",
    link: '/certificate/ai',
    date: '2024',
    description: 'Artificial Intelligence and Machine Learning fundamentals',
    level: 'Expert',
    verified: true
  },
  {
    id: 'react',
    title: 'React Development',
    issuer: 'Meta',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='reactGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2361dafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2321232a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23reactGrad)'/%3E%3Ctext x='50%25' y='40%25' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3EREACT%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EDevelopment%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EMeta%3C/text%3E%3C/svg%3E",
    link: '/certificate/react',
    date: '2024',
    description: 'Modern React development with hooks and advanced patterns',
    level: 'Professional',
    verified: true
  },
  {
    id: 'aws',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='awsGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff9900;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23232f3e;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23awsGrad)'/%3E%3Ctext x='50%25' y='35%25' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3EAWS%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3ECloud Practitioner%3C/text%3E%3Ctext x='50%25' y='75%25' font-family='Arial,sans-serif' font-size='12' fill='white' text-anchor='middle'%3EAmazon Web Services%3C/text%3E%3C/svg%3E",
    link: '/certificate/aws',
    date: '2023',
    description: 'Cloud computing fundamentals and AWS services overview',
    level: 'Professional',
    verified: true
  }
];

const CertificateSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        // Mobile: 1 card with generous margins
        setCardsPerView(1);
      } else if (window.innerWidth < 1200) {
        // Tablet: 2 cards with perfect spacing
        setCardsPerView(2);
      } else {
        // Laptop/Desktop: 4 cards maximum with optimal margins
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleCertificates = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % certificates.length;
      visible.push({ ...certificates[index], displayIndex: index });
    }
    return visible;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-gradient-to-r from-purple-600 to-purple-800 text-white';
      case 'Professional': return 'bg-gradient-to-r from-blue-600 to-blue-800 text-white';
      case 'Associate': return 'bg-gradient-to-r from-green-600 to-green-800 text-white';
      case 'Fundamental': return 'bg-gradient-to-r from-orange-600 to-orange-800 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Expert': return <Star className="h-3 w-3" />;
      case 'Professional': return <Award className="h-3 w-3" />;
      case 'Associate': return <Shield className="h-3 w-3" />;
      case 'Fundamental': return <CheckCircle className="h-3 w-3" />;
      default: return <Award className="h-3 w-3" />;
    }
  };

  return (
    <section className="py-16 px-4 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
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
              <Award className="h-12 w-12 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              CERTIFICATES
            </h2>
          </motion.div>
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-4"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            SHOWCASE
          </motion.h3>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore my verified achievements and certifications that highlight my skills and dedication to continuous learning.
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <motion.button
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl rounded-full group ${
              cardsPerView === 1 
                ? 'left-2 p-2' // Mobile: Closer to edge, smaller
                : cardsPerView === 2 
                ? 'left-4 p-2.5' // Tablet: Medium positioning
                : cardsPerView === 4
                ? 'left-2 p-2' // Laptop (4 cards): Closer to edge, smaller
                : 'left-6 p-3' // Fallback: Further from edge, larger
            }`}
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className={`transition-transform group-hover:-translate-x-1 ${
              cardsPerView === 1 || cardsPerView === 4 ? 'h-5 w-5' : 'h-6 w-6'
            }`} />
          </motion.button>

          <motion.button
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl rounded-full group ${
              cardsPerView === 1 
                ? 'right-2 p-2' // Mobile: Closer to edge, smaller
                : cardsPerView === 2 
                ? 'right-4 p-2.5' // Tablet: Medium positioning
                : cardsPerView === 4
                ? 'right-2 p-2' // Laptop (4 cards): Closer to edge, smaller
                : 'right-6 p-3' // Fallback: Further from edge, larger
            }`}
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className={`transition-transform group-hover:translate-x-1 ${
              cardsPerView === 1 || cardsPerView === 4 ? 'h-5 w-5' : 'h-6 w-6'
            }`} />
          </motion.button>

          {/* Cards Container */}
          <div className={`overflow-hidden rounded-2xl ${
            cardsPerView === 4 ? 'px-2' : 'px-4 md:px-8 lg:px-12'
          }`}>
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / cardsPerView)}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6
              }}
              style={{
                width: `${300}%`,
                gap: cardsPerView === 1 ? '0' : cardsPerView === 2 ? '1rem' : cardsPerView === 4 ? '0.5rem' : '1rem'
              }}
            >
              {/* Render certificates 3 times for infinite loop */}
              {[...certificates, ...certificates, ...certificates].map((cert, globalIndex) => {
                const actualIndex = globalIndex % certificates.length;
                return (
                  <motion.div
                    key={`${cert.id}-${globalIndex}`}
                    className="flex-shrink-0"
                    style={{ 
                      width: cardsPerView === 1 
                        ? `${100/3}%` // Mobile: 33.33% of the 300% container = 100% visible
                        : cardsPerView === 2 
                        ? `${50/3}%` // Tablet: 16.67% of 300% container = 50% visible each
                        : cardsPerView === 4
                        ? `${25/3}%` // Laptop: 8.33% of 300% container = 25% visible each (4 cards)
                        : `${33.333/3}%` // Fallback
                    }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`h-full p-2 ${
                      cardsPerView === 1 
                        ? 'mx-auto max-w-sm w-full' // Mobile: Centered with max width
                        : cardsPerView === 2 
                        ? 'mx-auto max-w-md w-full' // Tablet: Centered, medium max width
                        : cardsPerView === 4
                        ? 'mx-auto max-w-xs w-full' // Laptop (4 cards): Centered, extra small max width
                        : 'mx-auto max-w-lg w-full' // Fallback: Centered, large max width
                    }`}>
                      <Card className="h-full bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden group shadow-xl hover:shadow-2xl relative">
                        {/* Verified Badge */}
                        {cert.verified && (
                          <motion.div
                            className="absolute top-4 right-4 z-10"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5 + (globalIndex % cardsPerView) * 0.1, type: "spring" }}
                          >
                            <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-lg">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          </motion.div>
                        )}

                        {/* Level Badge */}
                        <motion.div
                          className="absolute top-4 left-4 z-10"
                          initial={{ scale: 0, x: -20 }}
                          animate={{ scale: 1, x: 0 }}
                          transition={{ delay: 0.3 + (globalIndex % cardsPerView) * 0.1, type: "spring" }}
                        >
                          <Badge className={`${getLevelColor(cert.level)} border-0 shadow-lg font-semibold`}>
                            {getLevelIcon(cert.level)}
                            <span className="ml-1">{cert.level}</span>
                          </Badge>
                        </motion.div>

                        {/* Image Container */}
                        <div className={`relative overflow-hidden ${
                          cardsPerView === 1 
                            ? 'h-48' // Mobile: Smaller height
                            : cardsPerView === 2 
                            ? 'h-52' // Tablet: Medium height
                            : cardsPerView === 4
                            ? 'h-44' // Laptop (4 cards): Compact height
                            : 'h-56' // Fallback: Full height
                        }`}>
                          <motion.img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          />
                          
                          {/* Floating Animation Elements */}
                          <motion.div
                            className="absolute top-2 left-2 w-2 h-2 bg-white/50 rounded-full"
                            animate={{
                              y: [0, -10, 0],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: actualIndex * 0.3
                            }}
                          />
                          <motion.div
                            className="absolute bottom-2 right-2 w-1 h-1 bg-primary/70 rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: actualIndex * 0.2
                            }}
                          />
                        </div>

                        {/* Content */}
                        <div className={`space-y-4 ${
                          cardsPerView === 1 
                            ? 'p-4' // Mobile: Compact padding
                            : cardsPerView === 2 
                            ? 'p-5' // Tablet: Medium padding
                            : cardsPerView === 4
                            ? 'p-4' // Laptop (4 cards): Compact padding
                            : 'p-6' // Fallback: Full padding
                        }`}>
                          <div>
                            <motion.h3
                              className={`font-bold mb-2 group-hover:text-primary transition-colors ${
                                cardsPerView === 1 
                                  ? 'text-lg' // Mobile: Smaller title
                                  : cardsPerView === 2 
                                  ? 'text-xl' // Tablet: Medium title
                                  : cardsPerView === 4
                                  ? 'text-lg' // Laptop (4 cards): Smaller title
                                  : 'text-xl' // Fallback: Full title
                              }`}
                              whileHover={{ scale: 1.02 }}
                            >
                              {cert.title}
                            </motion.h3>
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                                {cert.issuer}
                              </p>
                              <Badge className="text-xs border border-border">
                                {cert.date}
                              </Badge>
                            </div>
                          </div>

                          <p className={`text-muted-foreground leading-relaxed ${
                            cardsPerView === 1 
                              ? 'text-xs' // Mobile: Smaller description
                              : cardsPerView === 4
                              ? 'text-xs' // Laptop (4 cards): Smaller description
                              : 'text-sm' // Tablet/Laptop: Normal description
                          }`}>
                            {cert.description}
                          </p>

                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              asChild
                              className={`bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 ${
                                cardsPerView === 1 
                                  ? 'w-full px-4 py-2 text-sm' // Mobile: Full width, smaller
                                  : cardsPerView === 4
                                  ? 'w-full px-4 py-2 text-xs' // Laptop (4 cards): Full width, extra small
                                  : 'w-auto px-6' // Tablet/Laptop: Auto width
                              }`}
                            >
                              <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Shield className="h-4 w-4" />
                                Verify
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </motion.div>
                        </div>

                        {/* Credly-style corner decoration */}
                        <motion.div
                          className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/10 to-transparent"
                          animate={{
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: actualIndex * 0.5
                          }}
                          style={{
                            clipPath: "polygon(100% 100%, 100% 0%, 50% 100%)"
                          }}
                        />
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {certificates.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary scale-125 shadow-lg shadow-primary/30'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: currentIndex === index ? 1.25 : 1,
                  backgroundColor: currentIndex === index ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground) / 0.3)'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSlider;