import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import { TextScroll } from "./ui/text-scroll";
import { useNavigate } from 'react-router-dom';
import { useProjectData } from '../context/ProjectContext';


const ScrollAnimation = () => {
    const projectData = useProjectData();
    const cards = Object.values(projectData);

    return (
        <div>
            <div className="flex h-48 items-center justify-center">
            <TextScroll 
           text="PROJECTS"
           className={"text-4xl md:text-6xl text-amber-100 font-bold"}
           />
            </div>
             <HorizontalScrollCarousel cards={cards} />
            <div className="flex h-48 items-center justify-center">
                <TextScroll 
           text="THANK YOU FOR VISITING"
           className={"text-3xl md:text-6xl text-amber-100 font-bold text-center px-4"}
           />
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = ({ cards }) => {
    const navigate = useNavigate();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const handleCardClick = useCallback((cardId) => {
        navigate(`/project/${cardId}`);
    }, [navigate]);

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4 px-4 md:px-12">
                    {cards.map((card) => (
                        <Card 
                            card={card} 
                            key={card.id} 
                            onClick={handleCardClick}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = React.memo(({ card, onClick }) => {
    const handleClick = () => onClick(card.id);

    return (
        <motion.div 
            onClick={handleClick}
            className="group relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] overflow-hidden bg-neutral-200 cursor-pointer flex-shrink-0 rounded-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 md:p-8 text-3xl md:text-6xl font-black uppercase text-amber-100 backdrop-blur-lg rounded-xl">
                    {card.title}
                </p>
            </div>
        </motion.div>
    );
});

HorizontalScrollCarousel.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};


export default ScrollAnimation;
