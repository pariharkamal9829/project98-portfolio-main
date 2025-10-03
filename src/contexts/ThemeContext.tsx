import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme;
    return stored || 'dark';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const createCircularTransition = (newTheme: Theme) => {
    setIsTransitioning(true);
    
    // Get button position for origin point
    const themeButton = document.querySelector('[data-theme-toggler]') as HTMLElement;
    let centerX = '50%';
    let centerY = '50%';
    
    if (themeButton) {
      const rect = themeButton.getBoundingClientRect();
      centerX = `${rect.left + rect.width / 2}px`;
      centerY = `${rect.top + rect.height / 2}px`;
    }
    
    // Create multiple overlay elements for wave effect
    const createWave = (delay: number, opacity: number, duration: number) => {
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
        background: radial-gradient(circle at ${centerX} ${centerY}, ${
          newTheme === 'dark' 
            ? `rgba(15, 23, 42, ${opacity})` 
            : `rgba(255, 255, 255, ${opacity})`
        } 0%, transparent 0%);
        transition: background ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      `;
      
      document.body.appendChild(overlay);
      
      setTimeout(() => {
        overlay.style.background = `radial-gradient(circle at ${centerX} ${centerY}, ${
          newTheme === 'dark' 
            ? `rgba(15, 23, 42, ${opacity})` 
            : `rgba(255, 255, 255, ${opacity})`
        } 150%, transparent 150%)`;
      }, delay);
      
      // Clean up this wave
      setTimeout(() => {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      }, delay + duration + 100);
    };
    
    // Create multiple waves with different timing
    createWave(0, 0.9, 1000);     // Main wave - 1 second
    createWave(100, 0.6, 900);    // Second wave
    createWave(200, 0.3, 800);    // Third wave
    
    // Apply theme change halfway through animation
    setTimeout(() => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
    }, 500);
    
    // Add sparkle effects
    setTimeout(() => {
      createSparkleEffect(centerX, centerY, newTheme);
    }, 600);
    
    // Clean up
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  const createSparkleEffect = (centerX: string, centerY: string, newTheme: Theme) => {
    // Create sparkles
    for (let i = 0; i < 12; i++) {
      const sparkle = document.createElement('div');
      const angle = (i / 12) * Math.PI * 2;
      const distance = 100 + Math.random() * 200;
      const sparkleX = `calc(${centerX} + ${Math.cos(angle) * distance}px)`;
      const sparkleY = `calc(${centerY} + ${Math.sin(angle) * distance}px)`;
      
      sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: ${newTheme === 'dark' ? '#3b82f6' : '#f59e0b'};
        border-radius: 50%;
        left: ${sparkleX};
        top: ${sparkleY};
        z-index: 10000;
        pointer-events: none;
        opacity: 0;
        transform: scale(0);
        box-shadow: 0 0 10px ${newTheme === 'dark' ? '#3b82f6' : '#f59e0b'};
        animation: sparkle-appear 0.6s ease-out forwards;
      `;
      
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        if (document.body.contains(sparkle)) {
          document.body.removeChild(sparkle);
        }
      }, 700);
    }

    // Create particle burst
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      const angle = (i / 8) * Math.PI * 2;
      const distance = 50;
      const particleX = `calc(${centerX} + ${Math.cos(angle) * distance}px)`;
      const particleY = `calc(${centerY} + ${Math.sin(angle) * distance}px)`;
      
      particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: ${newTheme === 'dark' ? '#60a5fa' : '#fbbf24'};
        border-radius: 50%;
        left: ${particleX};
        top: ${particleY};
        z-index: 10000;
        pointer-events: none;
        opacity: 1;
        transform: scale(1);
        animation: particle-burst 0.8s ease-out forwards;
      `;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 800);
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, []);

  const toggleTheme = () => {
    if (isTransitioning) return;
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    createCircularTransition(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
