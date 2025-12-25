import React from 'react';
import { motion } from 'framer-motion';
import { CardCarousel } from "@/components/ui/card-carousel"
import { TextScroll } from '@/components/ui/text-scroll';
import RevealOnScroll from '@/components/RevealOnScroll';


const About = () => {
  const images = [
    { src: "/logo/js.png", alt: "JavaScript" },
    { src: "/logo/java.png", alt: "Java" },
    { src: "/logo/Python.png", alt: "Python" },
    { src: "/logo/js.png", alt: "JavaScript" },
    { src: "/logo/java.png", alt: "Java" },
    { src: "/logo/Python.png", alt: "Python" },
  ]

  const images1 = [
    { src: "/logo/html5.png", alt: "HTML5" },
    { src: "/logo/icons8-tailwind-css-50.png", alt: "Tailwind CSS" },
    { src: "/logo/CSS3.png", alt: "CSS3" },
    { src: "/logo/React.png", alt: "React" },
    { src: "/logo/html5.png", alt: "HTML5" },
    { src: "/logo/icons8-tailwind-css-50.png", alt: "Tailwind CSS" },
    { src: "/logo/CSS3.png", alt: "CSS3" },
    { src: "/logo/React.png", alt: "React" }
  ]

  const images2 = [
    { src: "/logo/node-js.png", alt: "Image 1" },
    { src: "/logo/icons8-express-js-80.png", alt: "Image 2" },
    { src: "/logo/Spring.png", alt: "Image 3" },
    { src: "/logo/FastAPI.png", alt: "Image 4" },
    { src: "/logo/icons8-mysql-50.png", alt: "Image 5" },
    { src: "/logo/MongoDB.png", alt: "Image 6" },
  ]

  const images3 = [
    { src: "/logo/Pandas.png", alt: "Image 1" },
    { src: "/logo/NumPy.png", alt: "Image 2" },
    { src: "/logo/scikit-learn.png", alt: "Image 3" },
    { src: "/logo/Keras.png", alt: "Image 4" },
    { src: "/logo/TensorFlow.png", alt: "Image 5" },
    { src: "/logo/OpenCV.png", alt: "Image 6" },
  ]

  
  const images4 = [
    { src: "/logo/postman-icon-svgrepo-com.png", alt: "Image 1" },
    { src: "/logo/Git.png", alt: "Image 2" },
    { src: "/logo/icons8-intellij-idea-50.png", alt: "java editor" },
    { src: "/logo/pngwing.com.png", alt: "vscode" },
    { src: "/logo/icons8-visual-studio-code-50.png", alt: "python editor" },
    { src: "/logo/postman-icon-svgrepo-com.png", alt: "Image 1" },
    { src: "/logo/Git.png", alt: "Image 2" },
    { src: "/logo/icons8-intellij-idea-50.png", alt: "java editor" },
    { src: "/logo/pngwing.com.png", alt: "vscode" },
    { src: "/logo/icons8-visual-studio-code-50.png", alt: "python editor" },
  ]
  
  const domains = [
    {
      title: "Frontend Development",
      description: "Crafting responsive, interactive, and pixel-perfect user interfaces using modern frameworks like React and Tailwind CSS.",
      icon: "💻",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend Development",
      description: "Building robust, scalable server-side logic and RESTful APIs with Node.js, Express, and Java Spring Boot.",
      icon: "⚙️",
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Full Stack Development",
      description: "Seamlessly integrating frontend and backend technologies to deliver complete, end-to-end web solutions.",
      icon: "🚀",
      color: "from-amber-400 to-orange-400"
    },
    {
      title: "Machine Learning Models Development",
      description: "Developing intelligent models and data-driven solutions using Deep Learning, Python, keras, TensorFlow, and Scikit-learn.",
      icon: "🤖",
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section id='about'>
      <div>
        <div className="w-full min-h-screen inset-0 z-0 py-2">
         <RevealOnScroll>
           <TextScroll 
           text="SKILLS"
           className={"text-6xl text-amber-100 font-bold"}
           />
          <div className="pt-5">
            <CardCarousel
              className="w-full h-24"
              divisionName="Programming Languages"
              images={images}
              autoplayDelay={2000}
              showNavigation={true}
            />
          </div>
          <div className='mt-1.5'>
          <CardCarousel
              className="w-full h-24"
              divisionName="Frontend"
              images={images1}
              autoplayDelay={2000}
              showNavigation={true}
            />
          </div>

          <div className='mt-1.5'>
          <CardCarousel
              className="w-full h-24"
              divisionName="Backend & Database"
              images={images2}
              autoplayDelay={2000}
              showNavigation={true}
            />
          </div>

           <div className='mt-1.5'>
          <CardCarousel
              className="w-full h-24"
              divisionName="Manchine Learning Libraries"
              images={images3}
              autoplayDelay={2000}
              showNavigation={true}
            />
          </div>

          
          <div className='mt-1.5'>
          <CardCarousel
              className="w-full h-24"
              divisionName="Tools"
              images={images4}
              autoplayDelay={2000}
              showNavigation={true}
            />
          </div>
         </RevealOnScroll>

          <div className="mt-24 mb-16 px-4">
             <TextScroll 
               text="WHAT I DO"
               className={"text-4xl md:text-6xl text-amber-100 font-bold mb-12"}
             />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
               {domains.map((domain, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1, duration: 0.5 }}
                   whileHover={{ scale: 1.02, translateY: -5 }}
                   className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]"
                 >
                   <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                     {domain.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-100 transition-colors">{domain.title}</h3>
                   <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{domain.description}</p>
                 </motion.div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export default About