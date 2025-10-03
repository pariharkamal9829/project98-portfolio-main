import { useTheme } from '@/contexts/ThemeContext';

const FloatingElements = () => {
  const { theme } = useTheme();

  if (theme === 'dark') {
    // Dark mode: Show subtle scratch patterns
    return (
      <div className="fixed inset-0 pointer-events-none z-0 scratch-pattern opacity-30" />
    );
  }

  // Light mode: Show floating flower petals
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 10 + 15}s`,
    delay: `${Math.random() * 5}s`,
    size: `${Math.random() * 20 + 10}px`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-flower opacity-40 blur-sm" />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
