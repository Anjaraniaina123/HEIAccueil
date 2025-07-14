import React, { useCallback, useEffect, useState } from 'react';

import '../index.css';
import slide1 from '../assets/slide1.webp';
import slide2 from '../assets/slide2.webp';
import slide3 from '../assets/slide3.webp';

export const Banniere = () => {
  const slide = [
    {
      image: slide1,
      text: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants.",
    },
    {
      image: slide2,
      text: "<<L'éducation est larme la plus puissance pour changer le monde> Selon Nelson Mandela : L'éducation dans l'informatique est une arme très puissancce pour lutter contre le pauvreté à Madagascar>> Selon HEI.C'est notre mission",
    },
    {
      image: slide3,
      text: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans rélache pour la montée en compétence en nos étudiants",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slide.length - 1 : prevIndex - 1
    );
  }, [slide.length]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevIndex) =>
      prevIndex === slide.length - 1 ? 0 : prevIndex + 1
    );
  }, [slide.length]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);
    return () => clearInterval(interval); 
  }, [goToNextSlide]);

  const current = slide[currentSlide] || { image: '', text: '' };

  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center /-center p-4">
          <h1 className="font-garamond text-4xl md:text-6xl mb-20 text-white">
            Haute École d'Informatique
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-8 sm:mb-10 md:mb-12 max-w-3xl text-white leading-relaxed">
            {current.text}
          </p>

          <div className="mt-8 flex flex-wrap gap-15 justify-center">
            <a
              href="#"
              className="bg-white text-blue-950 px-5 py-4 rounded shadow hover:bg-gray-100 font-semibold transition"
            >
              Inscrivez-vous ici
            </a>
            <a
              href="#"
              className="bg-[#DFA408] text-white px-5 py-4 rounded shadow hover:bg-yellow-300 font-semibold transition"
            >
              Emploi du temps
            </a>
            <a
              href="#"
              className="bg-[#001948] text-white px-5 py-4 rounded shadow hover:bg-[#002d6c] font-semibold transition"
            >
              Programme pédagogique
            </a>
          </div>
          <div className="text-white pt-10 text-2xl ">
          <p>Habilitation MESuPRES, Suivant l'arrêt n°31309/2023</p>
          </div>
        </div>

        <div className="hidden md:flex absolute left-0 right-0 top-1/2 transform -translate-y-1/2 justify-between px-4 sm:px-6 z-20 text-2xl">
          <button
            onClick={goToPreviousSlide}
            className="text-white text-3xl sm:text-4xl p-2 rounded-full hover:bg-white hover:bg-opacity-30 transition duration-300"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            onClick={goToNextSlide}
            className="text-white text-3xl sm:text-4xl p-2 rounded-full hover:bg-white hover:bg-opacity-30 transition duration-300"
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {slide.map((_,index) =>(
          <span 
          
          key = {index}
          className={`block w-3 h-3 rounded-full ${
            index===currentSlide 
            ?"bg-white"
            :"bg-gray-400 opacity-70"
          }cursor-pointer transition-colors duration-300`}

          onClick={() => setCurrentSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
          
          ></span>
        ))}

        </div> 
      </section>
    </div>
  );
};
