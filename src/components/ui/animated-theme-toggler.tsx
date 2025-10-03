import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Stars, CloudRain } from 'lucide-react';
import { Button } from './button';
import { useTheme } from '@/contexts/ThemeContext';

interface AnimatedThemeTogglerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedThemeToggler: React.FC<AnimatedThemeTogglerProps> = ({
  className = '',
  size = 'md'
}) => {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const [isClicked, setIsClicked] = useState(false);
  const isDark = theme === 'dark';

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const handleToggle = () => {
    if (isTransitioning) return;
    
    setIsClicked(true);
    toggleTheme();
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      disabled={isTransitioning}
      data-theme-toggler
      className={`
        relative overflow-hidden border-2 transition-all duration-500 rounded-xl
        ${sizeClasses[size]}
        ${isDark 
          ? 'border-blue-400/50 bg-gradient-to-br from-slate-900 to-slate-800 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/25' 
          : 'border-amber-300/50 bg-gradient-to-br from-amber-50 to-orange-100 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/25'
        }
        ${isTransitioning ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          background: isDark 
            ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* Global Transition Indicator */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ 
              scale: [0, 1.5, 2.5, 4],
              opacity: [0.8, 0.6, 0.3, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              background: isDark 
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)'
                : 'radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, rgba(251, 191, 36, 0.3) 50%, transparent 70%)'
            }}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Click Ripple Effect */}
      <AnimatePresence>
        {isClicked && (
          <>
            <motion.div
              className="absolute inset-0 rounded-xl"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 6, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                background: isDark 
                  ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)'
              }}
            />
            {/* Secondary ripple */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 8, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
              style={{
                background: isDark 
                  ? 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 60%)'
                  : 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 60%)'
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Sun Icon with Rays */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? 180 : 0,
          opacity: isDark ? 0 : 1
        }}
        transition={{ 
          duration: 0.4,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 200,
          damping: 10
        }}
      >
        <div className="relative">
          <Sun 
            size={iconSizes[size]} 
            className="text-white drop-shadow-lg"
          />
          {/* Sun Rays */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-2 bg-white/60 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '50% 100%',
                transform: `translate(-50%, -100%) rotate(${i * 45}deg) translateY(-14px)`
              }}
              animate={{
                opacity: isDark ? 0 : [0.4, 1, 0.4],
                scale: isDark ? 0 : [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Moon Icon with Craters */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : -180,
          opacity: isDark ? 1 : 0
        }}
        transition={{ 
          duration: 0.4,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 200,
          damping: 10
        }}
      >
        <div className="relative">
          <Moon 
            size={iconSizes[size]} 
            className="text-blue-200 drop-shadow-lg"
          />
          {/* Moon Craters */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-blue-300/60 rounded-full" />
          <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-blue-300/40 rounded-full" />
        </div>
      </motion.div>

      {/* Stars Effect for Dark Mode */}
      <AnimatePresence>
        {isDark && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${15 + (i % 2) * 30}%`
                }}
              >
                <Stars 
                  size={8} 
                  className="text-blue-300"
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 1.5 + i * 0.3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Light Mode Sparkles */}
      <AnimatePresence>
        {!isDark && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${20 + (i % 3) * 25}%`
                }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.5, 1.5, 0.5],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 1.8,
                  delay: i * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        whileHover={{
          boxShadow: isDark 
            ? '0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 10px rgba(59, 130, 246, 0.2)'
            : '0 0 20px rgba(251, 191, 36, 0.4), inset 0 0 10px rgba(251, 191, 36, 0.2)'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 pointer-events-none"
        animate={{
          borderColor: isDark 
            ? ['rgba(59, 130, 246, 0.3)', 'rgba(59, 130, 246, 0.6)', 'rgba(59, 130, 246, 0.3)']
            : ['rgba(251, 191, 36, 0.3)', 'rgba(251, 191, 36, 0.6)', 'rgba(251, 191, 36, 0.3)']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </Button>
  );
};