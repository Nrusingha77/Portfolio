import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const BubbleText = ({ children, className, color}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getLetterStyle = (index) => {
    if (hoveredIndex === null) return {};

    // Current hovered letter
    if (index === hoveredIndex) {
      return {
        fontWeight: 'bold',
        color: color
      };
    }

    // First sibling to the right
    if (index === hoveredIndex + 1) {
      return {
        fontWeight: '500',
        color: color
      };
    }

    // Second sibling to the right
    if (index === hoveredIndex + 2) {
      return {
        fontWeight: '400',
      };
    }

    // First sibling to the left
    if (index === hoveredIndex - 1) {
      return {
        fontWeight: '500',
        color: color
      };
    }

    // Second sibling to the left
    if (index === hoveredIndex - 2) {
      return {
        fontWeight: '400'
      };
    }

    return {};
  };

  return (
    <motion.div>
      <h2 className={className}>
        {children.split("").map((child, idx) => (
          <motion.span
            key={`${child}-${idx}`}
            className="inline-block cursor-pointer transition-all duration-200"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={getLetterStyle(idx)}
            transition={{
              duration: 0.2,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.1,
              y: -2
            }}
          >
            {child === " " ? "\u00A0" : child}
          </motion.span>
        ))}
      </h2>

    
    </motion.div>
  );
}
BubbleText.propTypes = {
  children: PropTypes.string.isRequired
};

export default BubbleText;