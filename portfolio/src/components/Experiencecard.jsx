import React from 'react'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'


const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.3 }
  }
};

const Experiencecard = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    onClose(); // Close the card
    navigate('/experience'); // Navigate to experience page
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="card w-full max-w-md bg-gradient-to-r from-purple-900 to-indigo-800 shadow-xl rounded-xl overflow-hidden border border-purple-500/20"
      >
        <figure className="relative h-48">
          <img
            className="w-full h-full object-cover"
            src="/certificate.jpg"
            alt="Card"
            loading="eager"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </figure>
        <motion.div 
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="card-body text-white p-6"
        >
          <h1 className="card-title font-bold text-3xl mb-2">Experience</h1>
          <h4 className="text-gray-300 font-bold  mb-2 uppercase">internship</h4>
          <p className="text-gray-200">
            JAVA FULL-STACK INTERNSHIP <br />
            At <span className='text-gray-300 font-bold  mb-2 uppercase'>Millennium software solutions</span><br />
          <span>📍</span> Visakhapatnam, Andhra Pradesh, India
          </p>
          <div className="card-actions justify-end mt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium"
              onClick={handleLearnMore}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
    ,
    document.body
  )
}

// Add prop validation
Experiencecard.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default Experiencecard