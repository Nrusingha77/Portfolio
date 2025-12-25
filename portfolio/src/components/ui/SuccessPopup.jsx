import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SuccessPopup = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] backdrop-blur-sm border border-emerald-400 flex items-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-bold tracking-wide">MESSAGE SENT SUCCESSFULLY</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessPopup;
