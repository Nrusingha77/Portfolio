import React, { useState} from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import BubbleText from '@/components/ui/text-effect-flipper'
import Experiencecard from '@/components/Experiencecard'
import { motion, AnimatePresence } from 'framer-motion';
import ButtonWrapper from '@/components/ui/ButtonWrapper';
import { SpringElement } from '@/components/animate-ui/components/spring-element';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// Extract ResumeButton to prevent re-rendering the whole Home component on hover
const ResumeButton = React.memo(({ handleDoubleClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <motion.div className="fixed top-[12%] right-4 md:top-[5%] md:right-8 z-40 md:z-50"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div
        role="button"
        className='relative inline-block cursor-grab active:cursor-grabbing'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleMouseEnter();
          }
        }}
      >
        <SpringElement
          springConfig={{ stiffness: 350, damping: 30 }}
          dragElastic={0.7}
          onDoubleClick={handleDoubleClick}
        >
          <Avatar className="size-16 bg-amber-100 rounded-full py-[1px] px-[1px] shadow-lg hover:shadow-[0_0_55px_rgba(251,191,36,0.5)]">
            <AvatarImage
              draggable={false}
              src="/resume.png"
              className="rounded-full"
            />
            <AvatarFallback className="bg-white text-black font-bold">RESUME</AvatarFallback>
          </Avatar>
        </SpringElement>

        {/* Tooltip - Now positioned below */}
        <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black/10 text-amber-100 text-xs px-3 py-2 rounded-lg transition-all duration-300 pointer-events-none z-60 border border-gray-600 shadow-lg ${showTooltip ? 'opacity-100' : 'opacity-0'}`}>
          &gt;PULL ME| DoubleClick For Resume
          {/* Tooltip arrow pointing up */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black"></div>
        </div>
      </div>
    </motion.div>
  );
});

const Home = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);
  }

  const handleClose = () => {
    setShowComponent(false);
  }

  const handleDoubleClick = () => {
    const resume = '/cv0001.pdf';
    window.open(resume, '_blank');
  }

  return (
    <section id='home'>
      <ResumeButton handleDoubleClick={handleDoubleClick} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="
                    w-full min-h-screen 
                    flex flex-col md:flex-row justify-center items-center gap-y-16 md:gap-x-7
                    text-white pt-28 md:pt-24 px-4">

          <motion.div
            className='w-[280px] h-[280px] md:w-[40vh] md:h-[35vw] flex-shrink-0'
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img loading="lazy" className='rounded-full border-2 border-dotted border-amber-700 shadow-[25px_30px_22px_rgba(0,0,0,0.25)]'
              src="/profile.jpg"
              alt="A profile picture of Nrusingha Prasada Khadanga" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='p-2 md:p-4 flex flex-col items-center max-w-2xl text-center md:text-left'
          >
            <motion.div variants={itemVariants} className='flex items-center gap-2'>
              <span className="text-xl text-amber-100 md:text-2xl font-bold">Hey!!</span>
              <DotLottieReact
                className="w-[40px] h-[40px] md:w-[2vw] md:h-[2vw]"
                src="https://lottie.host/c9a20043-a43a-4f86-adec-b5b433eae2a2/SYQhEQVSAj.lottie"
                loop
                autoplay
              />
            </motion.div>
            <motion.div
              transition={{ ease: "easeInOut", duration: 0.5 }}
              variants={itemVariants} className='flex flex-col items-center gap-2'>
              <div className='flex items-center gap-2.5'>
                <span className='text-amber-400 text-3xl md:text-5xl'>𝒊</span><span className="text-xl md:text-2xl">am</span>
                <div>
                  <BubbleText className='text-center capitalize text-2xl md:text-4xl font-light text-[#08e6ff]' color={'rgb(223, 201, 32)'}>
                    Nrusingha Prasada Khadanga
                  </BubbleText>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='mt-3 max-w-prose px-4'
              >
                <motion.p
                  className='text-base leading-relaxed text-gray-200 mb-4'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  I am a{' '}
                  <motion.span
                    className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 relative'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Computer Science Engineering
                    <motion.span
                      className='absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-400 to-pink-500 block'
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </motion.span>{' '}
                  student who is passionate about innovation and pushing the limits of technology.
                </motion.p>

                <motion.p
                  className='text-base leading-relaxed text-gray-200 mb-4'
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  My areas of expertise are{' '}
                  <motion.span
                    className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 relative inline-block'
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Full Stack Web Development
                    <motion.span
                      className='absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 block'
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    />
                  </motion.span>{' '}
                  and{' '}
                  <motion.span
                    className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500 relative inline-block'
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(147, 51, 234, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Machine Learning
                    <motion.span
                      className='absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 block'
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                    />
                  </motion.span>{' '}
                  with an emphasis on developing end-to-end
                  <motion.span
                    className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 relative inline-block'
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    AI-Powered Full Stack Web Applications
                    {/* underline bar animation */}
                    <motion.span
                      className='absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 block'
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 1.1, duration: 0.8 }}
                    />
                  </motion.span>{' '}
                  have practical applications.
                </motion.p>

                <motion.p
                  className='text-base leading-relaxed text-gray-200 mb-4'
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Meaningful design, in my opinion, goes beyond aesthetics and needs to be{' '}
                  <motion.span
                    className='font-bold text-amber-400 relative'
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(251, 191, 36, 0)",
                        "0 0 10px rgba(251, 191, 36, 0.5)",
                        "0 0 0px rgba(251, 191, 36, 0)"
                      ]
                    }}
                    transition={{
                      textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    User-centric, Intuitive, and Actionable
                  </motion.span>.
                </motion.p>

                <motion.p
                  className='text-base leading-relaxed text-gray-200 mb-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  I approach every project with{' '}
                  <motion.span
                    className='font-bold text-yellow-400'
                    animate={{
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 0px rgba(251, 191, 36, 0)",
                        "0 0 15px rgba(251, 191, 36, 0.8)",
                        "0 0 0px rgba(251, 191, 36, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Responsibility and a Commitment
                  </motion.span>{' '}
                  <motion.span>
                    whether I'm working on a University project or taking part in a competitive challenge
                  </motion.span>.
                </motion.p>

                <motion.p
                  className='text-base leading-relaxed text-gray-200'
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  I'm always up for{' '}
                  <span
                    className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500'
                  >
                    working together
                  </span>{' '}
                  and discovering new opportunities. Let's get in touch and create something{' '}
                  <motion.span
                    className='font-bold text-yellow-400'
                    animate={{
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 0px rgba(251, 191, 36, 0)",
                        "0 0 15px rgba(251, 191, 36, 0.8)",
                        "0 0 0px rgba(251, 191, 36, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Truly remarkable.
                  </motion.span>
                  .
                </motion.p>
              </motion.div>
              <ButtonWrapper
                className='hover:bg-gradient-to-r hover:from-amber-200 hover:to-amber-500 hover:shadow-[0_0px_35px_rgba(251,191,36,0.25)] hover:text-white'
                onClick={handleButtonClick}
              >
                <span>View Experience</span>
                <motion.span
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </ButtonWrapper>

              <AnimatePresence>
                {showComponent && <Experiencecard onClose={handleClose} />}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default React.memo(Home)
