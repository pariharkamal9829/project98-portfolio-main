import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/resume', label: 'Resume' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gradient-primary flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.5 18C26.433 18 28 16.433 28 14.5C28 12.567 26.433 11 24.5 11C24.224 11 23.958 11.036 23.705 11.103C23.119 9.27 21.38 8 19.333 8C16.755 8 14.667 10.089 14.667 12.667C14.667 12.956 14.697 13.238 14.754 13.51C14.506 13.478 14.252 13.462 13.995 13.462C11.789 13.462 10 15.251 10 17.457C10 19.663 11.789 21.452 13.995 21.452H24.5C26.433 21.452 28 19.885 28 17.952C28 16.019 26.433 14.452 24.5 14.452Z" fill="currentColor"/>
              <circle cx="22" cy="8" r="2.5" fill="currentColor"/>
            </svg>
            CloudOps Pro
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <AnimatedThemeToggler size="md" className="glow-soft" />
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
