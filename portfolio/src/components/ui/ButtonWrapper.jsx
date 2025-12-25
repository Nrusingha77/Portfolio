import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const ButtonWrapper = ({ onClick, children, className = "" }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const currentBtn = btnRef.current;
    const currentSpan = spanRef.current;

    if (!currentBtn || !currentSpan) return;

    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      currentSpan.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      currentSpan.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    currentBtn.addEventListener("mousemove", handleMouseMove);
    currentBtn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (currentBtn) {
        currentBtn.removeEventListener("mousemove", handleMouseMove);
        currentBtn.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      onClick={onClick}
      className={`relative mt-3 overflow-hidden bg-[#FEF3C6] px-6 py-3 text-lg font-medium text-white transition-all duration-300 rounded-full hover:bg-slate-900 ${className}`}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference flex items-center gap-2">
        {children}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-black"
      />
    </motion.button>
  );
};

ButtonWrapper.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ButtonWrapper;