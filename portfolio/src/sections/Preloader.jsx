import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten Tag",
  "Hola",
  "Salam",
  "Konnichiwa",
  "Annyeong",
  "Zdravstvuyte",
  "Merhaba",
  "Sawasdee",
  "Namaste"
]


const Preloader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // 1. Lock Scroll when preloader is active
        document.body.style.overflow = 'hidden';
        
        // 2. Cycle through words
        if (index === words.length - 1) return;
        
        const timeout = setTimeout(() => {
            setIndex(prev => prev + 1);
        }, 150); 

        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        // 3. When last word is reached, wait a bit then trigger complete
        if (index === words.length - 1) {
            const timeout = setTimeout(() => {
                onComplete();
                // Unlock scroll
                document.body.style.overflow = 'unset';
            }, 1000); // Wait 1 second on "Namaste"
            return () => clearTimeout(timeout);
        }
    }, [index, onComplete]);

    return (
        <motion.div
            // 4. The Slide Up Animation
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]"
        >
            <motion.p 
                key={index} // Key change triggers re-animation of text
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-3xl md:text-5xl lg:text-7xl font-bold text-amber-100 flex items-center gap-2 md:gap-4"
            >
                {/* Decorative Dot */}
                <span className="w-3 h-3 bg-amber-400 rounded-full inline-block shadow-[0_0_10px_rgba(251,191,36,0.8)]"></span>
                {words[index]}
            </motion.p>
        </motion.div>
    );
};

export default Preloader;
