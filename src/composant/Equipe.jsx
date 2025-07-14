// src/components/Equipe.jsx (ou le chemin où vous placez ce composant)

import React, { useCallback, useState, useEffect } from 'react';

// Importez vos images des membres de l'équipe
// Assurez-vous que ces chemins sont corrects par rapport à votre structure de dossiers
import teamMember1 from '../assets/97-portraits-97_edited-e1716502895676-150x150.jpg';
import teamMember2 from '../assets/Parison-e1716502987165-150x150.png';
import teamMember3 from '../assets/5746AC1E761A42D1B7D89496C9A6BE9B_edited-e1716502720974-150x150.jpg';
import teamMember4 from '../assets/Tahina-OK-e1716502943928-150x150.png';
import teamMember5 from '../assets/97-portraits-97_edited-e1716502895676-150x150.jpg'; // Note: teamMember5 est le même que teamMember1
import teamMember6 from '../assets/Mirado-150x150.webp';
import teamMember7 from '../assets/Julien-150x150.webp';
import teamMember8 from '../assets/ryan-min-150x150.webp';

export const Equipe = () => {
  const teamMembers = [
    {
      id: 1,
      image: teamMember3,
      name: 'Jean Aimé Max',
      expertise: 'Responsable technique cybersécurité chez CES France Continental (Toulouse - France)',
    },
    {
      id: 2,
      image: teamMember4,
      name: 'Parison Ravalomanda',
      expertise: 'Ingénieur en informatique | Ingénieur logiciel chez Google (Londres – UK)',
    },
    {
      id: 3,
      image: teamMember1,
      name: 'Yannick Raharijaona',
      expertise: 'Responsable technique ML chez Rocket Science (Ottawa – Canada)',
    },
    {
      id: 4,
      image: teamMember2,
      name: 'Dre Tahina Ralitera',
      expertise: "Docteure-ingénieur, CNRS France | Prix L'Oréal-UNESCO pour les femmes en science (2017)",
    },
    {
      id: 5,
      image: teamMember5, // Assurez-vous que teamMember5 est bien l'image souhaitée si elle est différente de teamMember1
      name: 'Dr Lou Maurice',
      expertise: 'Docteur-Ingénieur en Informatique | Fondateur et Directeur pédagogique de HEI',
    },
    {
      id: 6,
      image: teamMember6,
      name: 'Mirado RAFENOMAHENITSOA',
      expertise: 'Data and Business Intelligence Specialist5+',
    },
    {
      id: 7,
      image: teamMember7,
      name: 'Julien RAJERISON',
      expertise: "Leader Développeur | Fondateur de l'association Techzara Madagascar",
    },
    {
      id: 8,
      image: teamMember8,
      name: 'Ryan ANDRIAMAHERY',
      expertise: "Développeur back end | Cofondateur et Directeur des opérations de HEI",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const totalMembers = teamMembers.length;

  
  const getMembersPerPage = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;  
    return 1; 
  };

  const [membersPerPage, setMembersPerPage] = useState(getMembersPerPage());

  useEffect(() => {
    const handleResize = () => {
      setMembersPerPage(getMembersPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDisplayedMembers = () => {
    const displayed = [];
    for (let i = 0; i < membersPerPage; i++) {
      displayed.push(teamMembers[(startIndex + i) % totalMembers]);
    }
    return displayed;
  };

  const goToPrevMember = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalMembers) % totalMembers);
  }, [totalMembers]);

  const goToNextMember = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalMembers);
  }, [totalMembers]);


  useEffect(() => {
    const interval = setInterval(() => {
      goToNextMember();
    }, 5000); 

    return () => clearInterval(interval);
  }, [goToNextMember]);


  return (

    <section className="bg-indigo-400 py-16 md:py-12 w-full">
      <div className="container px-6 lg:px-16 max-w-7xl mx-auto text-center">

        <h2 className="font-garamond text-4xl md:text-5xl font-bold mb-6 text-white">L'équipe pédagogique</h2>
        <p className="text-lg md:text-xl mb-12 font-poppins leading-relaxed text-white">
          Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
        </p>

        <div className="relative flex items-center justify-center w-full">


          {totalMembers > membersPerPage && (
            <button
              onClick={goToPrevMember}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl opacity-50 hover:opacity-100 transition-opacity duration-300 z-10 hidden md:block"
              aria-label="Previous slide"
            >
              &#10094; 
            </button>
          )}

      
          <div className="w-full max-w-4xl mx-auto overflow-hidden"> 
            <div
              className="grid gap-8 justify-items-center" 
              style={{
                gridTemplateColumns: `repeat(${membersPerPage}, minmax(0, 1fr))`, 
              }}
            >
              {getDisplayedMembers().map((member) => (
                <div
                  key={member.id}
                  
                  className="flex flex-col items-center px-6 py-14 bg-white shadow-lg w-full h-full justify-between rounded-lg" >
                  <img
                    src={member.image}
                    alt={`Membre de l'équipe ${member.name}`}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
                  />
                  <h3 className="font-garamond text-xl font-semibold mb-1 text-[var(--color-primary-blue)] text-center">
                    {member.name}
                  </h3>
                  <p className="font-poppins text-xs text-gray-600 px-3 py-1 rounded-sm text-center">
                    {member.expertise}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {totalMembers > membersPerPage && (
            <button
              onClick={goToNextMember}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl opacity-50 hover:opacity-100 transition-opacity duration-300 z-10 hidden md:block"
              aria-label="Next slide"
            >
              &#10095; 
            </button>
          )}
        </div>

        {totalMembers > membersPerPage && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(totalMembers / membersPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * membersPerPage)}
                className={`w-3 h-3 rounded-full ${
                  index === Math.floor(startIndex / membersPerPage) ? 'bg-white' : 'bg-gray-400 opacity-50'
                } transition-colors duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};