import { motion } from 'framer-motion';
import { FC } from 'react';

// Animation 1: Enhanced Trading Circle
export const TradingCircleAnimation: FC = () => {
  const icons = ["💱", "📈", "🌾", "🚛", "📊", "🤝"];
  
  return (
    <div className="relative w-48 h-48">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ scale: 0 }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: Math.cos(((2 * Math.PI) / icons.length) * index) * 70,
            y: Math.sin(((2 * Math.PI) / icons.length) * index) * 70,
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }
          }}
        >
          <span className="text-3xl">{icon}</span>
        </motion.div>
      ))}
      <motion.div
        className="absolute inset-0 border-2 border-white/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-400 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

// Animation 2: Trading Graph
export const TradingGraphAnimation: FC = () => {
  return (
    <motion.div className="w-32 h-32 relative">
      <motion.div
        className="absolute bottom-0 left-0 w-1 h-16 bg-green-400"
        initial={{ height: 0 }}
        animate={{
          height: [0, 64, 32, 48, 16, 64],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute text-2xl"
        animate={{
          y: [-32, -64, -32, -48, -16, -64],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        📈
      </motion.div>
    </motion.div>
  );
};

// Animation 3: Exchange Flow
export const ExchangeFlowAnimation: FC = () => {
  return (
    <div className="relative w-48 h-24 flex items-center justify-center">
      <motion.div
        className="flex items-center gap-4"
        animate={{
          x: [-20, 20, -20]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-2xl">🌾</span>
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="text-2xl">💱</span>
        </motion.div>
        <span className="text-2xl">💰</span>
      </motion.div>
    </div>
  );
};

// Animation 4: Global Trade Network
export const GlobalTradeAnimation: FC = () => {
  const nodes = [
    { x: 0, y: 0, icon: "🏭" },
    { x: -40, y: -40, icon: "🚢" },
    { x: 40, y: -40, icon: "🛩️" },
    { x: -40, y: 40, icon: "🚛" },
    { x: 40, y: 40, icon: "📦" },
  ];

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ x: node.x, y: node.y }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            delay: index * 0.3,
            repeat: Infinity,
          }}
        >
          <span className="text-2xl">{node.icon}</span>
        </motion.div>
      ))}
      {/* Connecting lines */}
      <svg className="absolute w-full h-full">
        <motion.path
          d="M0,0 L-40,-40 M0,0 L40,-40 M0,0 L-40,40 M0,0 L40,40"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4"
          animate={{
            strokeDashoffset: [0, -8]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
};
