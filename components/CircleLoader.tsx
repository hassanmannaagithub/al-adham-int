// components/CircleLoader.tsx
import { motion } from 'framer-motion';

interface CircleLoaderProps {
  size?: number;
  color?: string;
}

const CircleLoader = ({ size = 40, color = '#ffffff' }: CircleLoaderProps) => {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `3px solid rgba(255, 255, 255, 0.2)`,
        borderTop: `3px solid ${color}`,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
};

export default CircleLoader;