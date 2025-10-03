import { motion } from 'framer-motion';
import { useState } from 'react';

interface TechIconProps {
  icon: React.ReactNode;
  name: string;
  color: string;
  delay?: number;
}

const TechIcon = ({ icon, name, color, delay = 0 }: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 200 }}
      whileHover={{ 
        scale: 1.2, 
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.5 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="p-6 rounded-2xl bg-card border-2 border-border transition-all duration-300 relative overflow-hidden"
        style={{
          borderColor: isHovered ? color : undefined,
          boxShadow: isHovered ? `0 0 30px ${color}40` : undefined,
        }}
        animate={isHovered ? { y: [0, -5, 0] } : {}}
        transition={{ repeat: isHovered ? Infinity : 0, duration: 0.6 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10"
          style={{ backgroundColor: color }}
          animate={isHovered ? { scale: [1, 1.5, 1] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        
        {/* Icon */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-3"
          style={{ color: isHovered ? color : undefined }}
          animate={isHovered ? { rotate: [0, 360] } : {}}
          transition={{ duration: 0.6 }}
        >
          {icon}
          <span className="text-sm font-semibold text-foreground group-hover:text-inherit transition-colors">
            {name}
          </span>
        </motion.div>

        {/* Glow effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap pointer-events-none"
        style={{
          backgroundColor: color,
          color: '#fff',
        }}
      >
        {name}
      </motion.div>
    </motion.div>
  );
};

export default TechIcon;
