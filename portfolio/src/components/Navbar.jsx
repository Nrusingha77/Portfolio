import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const navItems = [
        { id: 'about', label: 'Skills' },
     { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      className="w-[95%] md:w-fit mx-auto mt-2 md:mt-3 rounded-2xl md:rounded-full flex items-center justify-between px-4 py-2 md:px-8 md:py-3 fixed top-0 left-0 right-0 z-50 backdrop-blur-xl backdrop-contrast-100 border border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="mb-1 md:mb-2 ml-2 md:ml-5 pt-2 md:pt-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >

        <button
         className="text-amber-100 text-2xl md:text-5xl font-bold font-[navbar] cursor-pointer bg-transparent border-none"
         onClick={() => {
           scrollToSection('home');
           navigate('/');
         }}
         
         >
          NPK
        </button>
        
      </motion.div>
      
      <div className="mx-2 md:mx-4">
        <ul className="flex items-center gap-2 md:gap-3 px-1 md:px-3 py-1 md:py-3 font-bold text-sm md:text-lg">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <motion.button
                onClick={() => {
                  if (item.id === 'contact') {
                    navigate('/contact');
                  } else if (location.pathname !== '/') {
                    navigate('/#' + item.id);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className="relative transition-all duration-300 ease-in-out  text-white "
                whileHover={{ scale: 1.1, y: -2,
                  color: 'rgba(242, 213, 68, 0.8)',
                   textShadow: "0 0 8px rgba(242, 213, 68, 0.8)",
                   "&::after": {
                     transform: "scaleX(1)"
                   }
                 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}

               </motion.button>
            </li>
          ))}
        </ul>
      </div>
      
      <motion.button
        className="bg-amber-100 text-black font-bold py-1.5 px-3 md:py-2 md:px-4 text-xs md:text-base rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl hover:bg-gradient-to-r hover:from-amber-200 hover:to-amber-600 hover:shadow-[0_8px_15px_rgba(251,191,36,0.25)]"
        whileHover={{
          boxShadow: "0 0px 25px rgba(251, 197, 36, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/hireme')}
      >
        HIRE ME
      </motion.button>
    </motion.nav>
  )
}

export default Navbar