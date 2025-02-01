"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  color?: string;
}

export function AnimatedIcon({
  icon: Icon,
  color = "#6366F1",
}: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className="h-6 w-6" style={{ color }} />
    </motion.div>
  );
}
