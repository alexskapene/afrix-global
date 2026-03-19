"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface MotionContainerProps {
  children: ReactNode;
  className?: string;
  containerVariants?: Variants; // Animation du parent
  itemVariants?: Variants; // Animation des enfants
  stagger?: number; // Temps entre chaque enfant
}

export const MotionContainer: React.FC<MotionContainerProps> = ({
  children,
  className = "",
  containerVariants,
  itemVariants,
  stagger = 0.15,
}) => {
  // Variants par défaut du parent
  const defaultContainer: Variants = containerVariants ?? {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  // Variants par défaut pour les enfants
  const defaultItem: Variants = itemVariants ?? {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] as const },
    },
  };

  // On wrap chaque enfant pour appliquer l'animation
  const animatedChildren = React.Children.map(children, (child) => (
    <motion.div variants={defaultItem}>{child}</motion.div>
  ));

  return (
    <motion.div
      variants={defaultContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {animatedChildren}
    </motion.div>
  );
};
