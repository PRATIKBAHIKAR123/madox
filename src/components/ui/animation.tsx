import { motion } from "framer-motion";

export default function AnimatedDots() {
  // Create a loading bar animation similar to reference
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const dotVariants = {
    initial: { 
      width: "16px", 
      opacity: 0.5,
    },
    animate: {
      width: "46px",
      opacity: 1,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  const middleDotVariants = {
    initial: { 
      width: "6px", 
      opacity: 0.5,
    },
    animate: {
      width: "16px",
      opacity: 1,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="">
      <motion.div 
        className="flex justify-center items-center space-x-2 my-[15px]"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="h-1.5 bg-blue-600 rounded-full"
          variants={dotVariants}
        />
        <motion.div
          className="h-1.5 bg-blue-600 rounded-full"
          variants={middleDotVariants}
        />
        <motion.div
          className="h-1.5 bg-blue-600 rounded-full"
          variants={dotVariants}
        />
      </motion.div>
    </div>
  );
}