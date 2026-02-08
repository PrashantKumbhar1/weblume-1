import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function LandingReveal({ children }: Props) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  if (done) return <>{children}</>;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <motion.h1
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold gradient-text"
      >
        Weblume 🌱
      </motion.h1>
    </motion.div>
  );
}
