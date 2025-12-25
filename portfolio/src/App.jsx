import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Project from './sections/Project'
import { CursorProvider, Cursor } from '@/components/animate-ui/components/cursor'
import { ProjectProvider } from './context/ProjectContext'
import ScrollToTop from './components/ScrollToTop'
import Footer from './sections/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Preloader from './sections/Preloader'

// Lazy load page components for better initial load performance
const Contact = lazy(() => import('./sections/Contact'));
const HiremeForm = lazy(() => import('./sections/HiremeForm'));
const ProjectDes = lazy(() => import('./sections/ProjectDes'));
const Experience = lazy(() => import('./sections/Experience'));

const LoadingSpinner = () => (
  <div className="w-full h-screen flex justify-center items-center bg-[#020617]">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-amber-400"></div>
  </div>
);

// 1. Create a Layout Component
const AppLayout = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // 2. Debounce scroll handler for performance
  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) return;

      const sections = ['home', 'about', 'projects'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <div className='flex flex-col relative'>
      <Navbar activeSection={activeSection} />
      <main className='relative z-0'>
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">{<Outlet />}</AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
};

// 3. Define the main page as a separate component
export const MainPage = () => (
  <>
    <Home />
    <About />
    <Project />
    <Footer />
  </>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CursorProvider>
      <ProjectProvider>
        <BrowserRouter>
          <ScrollToTop />
          <style>
            {`
              ::-webkit-scrollbar {
                width: 5px;
              }
              ::-webkit-scrollbar-track {
                background: #020617; 
              }
              ::-webkit-scrollbar-thumb {
                background: #fbbf24; 
                border-radius: 2px;
              }
              ::-webkit-scrollbar-thumb:hover {
                background: #f59e0b; 
              }
              * {
                scrollbar-width: thin;
                scrollbar-color: #fbbf24 #020617;
              }
            `}
          </style>
          <AnimatedBackground />
          <AnimatePresence>
            {isLoading ? (
              <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
            ) : (
              <Routes key="routes">
                <Route element={<AppLayout />}>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/hireme" element={<HiremeForm />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/project/:id" element={<ProjectDes />} />
                  <Route path='/contact' element={<Contact />} />
                </Route>
              </Routes>
            )}
          </AnimatePresence>
          <Cursor className="w-6 h-6 bg-amber-400/20 rounded-full border-2 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)]">
            <div className="w-2 h-2 bg-amber-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
          </Cursor>
        </BrowserRouter>
      </ProjectProvider>
    </CursorProvider>
  );
};

export default App