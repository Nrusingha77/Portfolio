import React, { useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C", "#2E3192"];

const AnimatedBackground = () => {
    const color = useMotionValue(COLORS[0]);

    useEffect(() => {
        const controls = animate(color, COLORS, {
            ease: "easeInOut",
            duration: 15, // Slower duration for a more ambient, less demanding effect
            repeat: Infinity,
            repeatType: "mirror",
        });
        return () => controls.stop(); 
    }, [color]);

    return (
        <div className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden">
            <motion.div 
                style={{ backgroundColor: color }} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[90px] opacity-30" 
            />
        </div>
    );
};

export default React.memo(AnimatedBackground);
