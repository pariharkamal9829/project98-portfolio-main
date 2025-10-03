import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Eye, ArrowRight, BookOpen, Code, Share2, Heart, MessageCircle, ExternalLink, Filter, Search, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  tags: string[];
  category: 'Frontend' | 'Backend' | 'DevOps' | 'AI/ML' | 'Mobile' | 'Tutorial';
  featured: boolean;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'react-best-practices',
    title: 'React Best Practices for 2024: Building Scalable Applications',
    excerpt: 'Discover the latest React patterns, hooks optimization, and architectural decisions that will make your applications more maintainable and performant.',
    content: 'In this comprehensive guide, we explore modern React development...',
    author: 'Your Name',
    publishDate: '2024-09-15',
    readTime: '8 min read',
    views: 2847,
    likes: 124,
    comments: 23,
    tags: ['React', 'JavaScript', 'Frontend', 'Performance'],
    category: 'Frontend',
    featured: true,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Cdefs%3E%3ClinearGradient id='reactBlog' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2361dafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2321232a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23reactBlog)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3EReact Best Practices%3C/text%3E%3Ctext x='50%25' y='65%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3E2024 Edition%3C/text%3E%3C/svg%3E",
    link: '/blog/react-best-practices'
  },
  {
    id: 'typescript-advanced',
    title: 'Advanced TypeScript: Utility Types and Conditional Logic',
    excerpt: 'Deep dive into TypeScript\'s powerful type system with practical examples of utility types, conditional types, and advanced patterns.',
    content: 'TypeScript has evolved significantly over the years...',
    author: 'Your Name',
    publishDate: '2024-08-28',
    readTime: '12 min read',
    views: 1923,
    likes: 89,
    comments: 15,
    tags: ['TypeScript', 'JavaScript', 'Types', 'Advanced'],
    category: 'Frontend',
    featured: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Cdefs%3E%3ClinearGradient id='tsBlog' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233178c6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e3a8a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23tsBlog)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='white' text-anchor='middle'%3EAdvanced TypeScript%3C/text%3E%3Ctext x='50%25' y='65%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EUtility Types & More%3C/text%3E%3C/svg%3E",
    link: '/blog/typescript-advanced'
  },
  {
    id: 'nodejs-microservices',
    title: 'Building Microservices with Node.js and Docker',
    excerpt: 'Learn how to architect, develop, and deploy scalable microservices using Node.js, Express, Docker, and modern DevOps practices.',
    content: 'Microservices architecture has become the standard...',
    author: 'Your Name',
    publishDate: '2024-08-10',
    readTime: '15 min read',
    views: 3421,
    likes: 156,
    comments: 34,
    tags: ['Node.js', 'Docker', 'Microservices', 'DevOps'],
    category: 'Backend',
    featured: true,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Cdefs%3E%3ClinearGradient id='nodeBlog' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23339933;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23026e00;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23nodeBlog)'/%3E%3Ctext x='50%25' y='40%25' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='white' text-anchor='middle'%3ENode.js Microservices%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EDocker & DevOps%3C/text%3E%3C/svg%3E",
    link: '/blog/nodejs-microservices'
  },
  {
    id: 'ai-integration',
    title: 'Integrating AI APIs into Web Applications',
    excerpt: 'Practical guide to implementing AI features in your web apps using OpenAI, Google AI, and other modern AI services.',
    content: 'Artificial Intelligence is transforming web development...',
    author: 'Your Name',
    publishDate: '2024-07-22',
    readTime: '10 min read',
    views: 4567,
    likes: 203,
    comments: 45,
    tags: ['AI', 'APIs', 'OpenAI', 'Integration'],
    category: 'AI/ML',
    featured: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Cdefs%3E%3ClinearGradient id='aiBlog' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%237c3aed;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%235b21b6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23aiBlog)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial,sans-serif' font-size='22' font-weight='bold' fill='white' text-anchor='middle'%3EAI Integration%3C/text%3E%3Ctext x='50%25' y='65%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EWeb Applications%3C/text%3E%3C/svg%3E",
    link: '/blog/ai-integration'
  },
  {
    id: 'kubernetes-deployment',
    title: 'Kubernetes Deployment Strategies for Production',
    excerpt: 'Master production-ready Kubernetes deployments with rolling updates, blue-green deployments, and monitoring strategies.',
    content: 'Deploying applications to Kubernetes in production...',
    author: 'Your Name',
    publishDate: '2024-07-05',
    readTime: '18 min read',
    views: 2134,
    likes: 98,
    comments: 28,
    tags: ['Kubernetes', 'DevOps', 'Deployment', 'Production'],
    category: 'DevOps',
    featured: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Cdefs%3E%3ClinearGradient id='k8sBlog' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23326ce5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e3a8a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23k8sBlog)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='white' text-anchor='middle'%3EKubernetes%3C/text%3E%3Ctext x='50%25' y='65%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EProduction Deployments%3C/text%3E%3C/svg%3E",
    link: '/blog/kubernetes-deployment'
  },
  {
    id: 'react-native-performance',
    title: 'React Native Performance Optimization Techniques',
    excerpt: 'Boost your React Native app performance with proven optimization strategies, memory management, and native module integration.',
    content: 'Performance is crucial for mobile applications...',
    author: 'Your Name',
    publishDate: '2024-06-18',
    readTime: '14 min read',
    views: 1876,
    likes: 87,
    comments: 19,
    tags: ['React Native', 'Mobile', 'Performance', 'Optimization'],
    category: 'Mobile',
    featured: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Cdefs%3E%3ClinearGradient id='rnBlog' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2361dafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23282c34;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23rnBlog)'/%3E%3Ctext x='50%25' y='40%25' font-family='Arial,sans-serif' font-size='18' font-weight='bold' fill='white' text-anchor='middle'%3EReact Native%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial,sans-serif' font-size='14' fill='white' text-anchor='middle'%3EPerformance Tips%3C/text%3E%3C/svg%3E",
    link: '/blog/react-native-performance'
  }
];

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'AI/ML', 'Mobile', 'Tutorial'];

const TechnicalBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      let filtered = blogPosts;

      // Filter by category
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(post => post.category === selectedCategory);
      }

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      setFilteredPosts(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'bg-blue-500 hover:bg-blue-600';
      case 'Backend': return 'bg-green-500 hover:bg-green-600';
      case 'DevOps': return 'bg-orange-500 hover:bg-orange-600';
      case 'AI/ML': return 'bg-purple-500 hover:bg-purple-600';
      case 'Mobile': return 'bg-pink-500 hover:bg-pink-600';
      case 'Tutorial': return 'bg-cyan-500 hover:bg-cyan-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
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
              <BookOpen className="h-12 w-12 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TECHNICAL BLOGS
            </h1>
          </motion.div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Knowledge Sharing
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore my technical insights, tutorials, and deep dives into modern web development, DevOps practices, and emerging technologies.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-2 border-border focus:border-primary transition-colors"
            />
            {isSearching && (
              <motion.div
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
              </motion.div>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-background border border-border hover:border-primary hover:bg-primary/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="inline h-4 w-4 mr-1" />
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && !searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐
              </motion.div>
              Featured Posts
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)} text-white border-0`}>
                        {post.category}
                      </Badge>
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-black border-0">
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.publishDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {formatViews(post.views)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary group"
                      >
                        <a href={post.link} className="flex items-center justify-center gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            {selectedCategory === 'All' ? 'All Posts' : `${selectedCategory} Posts`}
            <Badge variant="secondary">{filteredPosts.length}</Badge>
          </h3>

          <AnimatePresence mode="wait">
            {isSearching ? (
              <div className="flex justify-center items-center h-64">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full"
                />
              </div>
            ) : filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                <p className="text-muted-foreground">
                  {searchTerm ? `No posts match "${searchTerm}"` : `No posts in ${selectedCategory} category`}
                </p>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <Card className="h-full bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl">
                      <div className="relative overflow-hidden h-40">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Badge className={`absolute top-3 left-3 ${getCategoryColor(post.category)} text-white border-0 text-xs`}>
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge className="absolute top-3 right-3 bg-yellow-500 text-black border-0 text-xs">
                            ⭐
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.publishDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {formatViews(post.views)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              {post.comments}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            asChild
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary group"
                          >
                            <a href={post.link} className="flex items-center justify-center gap-1">
                              <span className="text-xs">Read</span>
                              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="px-3"
                          >
                            <Share2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest technical insights, tutorials, and industry trends delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Subscribe
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalBlogs;