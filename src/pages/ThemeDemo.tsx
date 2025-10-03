import { motion } from 'framer-motion';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeDemo = () => {
  const { theme, isTransitioning } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10">
      <div className="text-center space-y-8">
        <motion.h1 
          className="text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Theme Toggler Demo
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Click the theme toggler to see the amazing 360° center-spread transition effect!
          The animation starts from the button center and spreads across the entire screen in just 1 second.
        </motion.p>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <div className="relative">
            <AnimatedThemeToggler size="lg" className="scale-150" />
            
            {/* Pulsing ring around toggler */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 scale-150"
              style={{
                borderColor: theme === 'dark' ? '#3b82f6' : '#f59e0b'
              }}
              animate={{
                scale: [1.5, 1.8, 1.5],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            Current theme: <span className="font-semibold text-primary">{theme}</span>
          </p>
          {isTransitioning && (
            <motion.p 
              className="text-sm text-accent font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              ✨ Theme transition in progress...
            </motion.p>
          )}
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: '🌅', title: 'Light Mode', desc: 'Bright & Clean' },
            { icon: '🌙', title: 'Dark Mode', desc: 'Easy on Eyes' },
            { icon: '⚡', title: 'Fast Transition', desc: '1 Second Animation' },
            { icon: '🎨', title: 'Beautiful Effects', desc: 'Sparkles & Ripples' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeDemo;