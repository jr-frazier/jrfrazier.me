import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Test() {
  return (
    <div className="flex justify-center items-center bg-pink-500 h-screen w-screen">
      {/* <motion.div
        className="bg-white w-40 h-40 rounded-md"
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 2 }}
        transition={{
          duration: 1.5,
          type: "spring",
          //   stiffness: 200,
          //   damping: 20,
        }}
      /> */}

      <motion.div
        className="box bg-white w-40 h-40"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}
