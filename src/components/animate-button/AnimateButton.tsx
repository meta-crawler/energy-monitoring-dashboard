import React from 'react';
// third-party
import { motion } from 'framer-motion';

interface IAnimateButtonProps {
  children: React.ReactNode;
}

const AnimateButton = ({ children }: IAnimateButtonProps) => (
  <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
    {children}
  </motion.div>
);

export default AnimateButton;
