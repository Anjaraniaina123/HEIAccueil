import React, {useCallback, useState,useEffect} from 'react'
import teamMember1 from '../assets/97-portraits-97_edited-e1716502895676-150x150.jpg'
import teamMember2 from '../assets/Parison-e1716502987165-150x150.png'
import teamMember3 from '../assets/5746AC1E761A42D1B7D89496C9A6BE9B_edited-e1716502720974-150x150.jpg'
import teamMember4 from '../assets/Tahina-OK-e1716502943928-150x150.png'
import teamMember5 from '../assets/97-portraits-97_edited-e1716502895676-150x150.jpg'
import teamMember6 from '../assets/Mirado-150x150.webp'
import teamMember7 from '../assets/Julien-150x150.webp'
import teamMember8 from '../assets/ryan-min-150x150.webp'


const Equipe = () => {
    const teamMembers = [
        {
          id: 1,
          image: teamMember3,
          name: 'Jean Aimé Max',
          expertise: 'Ingénieur en intelligence artificielle',
        },
        {
          id: 2,
          image: teamMember4,
          name: 'Parison Ravalomanda',
          expertise: 'Chef de projet IT',
        },
        {
          id: 3,
          image: teamMember1,
          name: 'Yannick Raharijaona',
          expertise: 'Expert en développement web',
        },
        {
          id: 4,
          image: teamMember2,
          name: 'Dre Tahina Ralitera',
          expertise: "Docteure-ingénieur,CNRS France| Prix L'Oréal-UNESCO pour les femmes en science(2017)",
        },
        {
          id: 5,
          image: teamMember5,
          name: 'Dr Lou Maurice',
          expertise: 'Docteur-Ingenieur en Informatique | Fondateur et Directeur pédagogique de HeI',
        },

        {
            id: 6,
            image: teamMember6,
            name: 'Mirado RAFENOMAHENITSOA',
            expertise: 'Data and Business Intelligence Specialist5+'
          },

          {
            id: 7,
            image: teamMember7,
            name: 'Julien RAJERISON',
            expertise: "Leader Développeur | Fondateur de l'association Techzara Madagasca",
          },

          {
            id: 8,
            image: teamMember8,
            name: 'Ryan ANDRIAMAHERY',
            expertise: "Développeur back end end | Cofondateur et Directeur des opérations de HEI" ,
          },



      ];
    
      const [startIndex, setStartIndex] = useState(0);
      const totalMembers = teamMembers.length;
      const membersPerPage = 3;
    
    
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
        <section className="bg-blue-400 py-16 md:py-12 xl:w-full">
          <div className="container mx-auto px-6 lg:px-16 text-center">
            <div className="mb-12">
              <h2 className="text-[var(--color-primary-white)] font-garamond font-bold text-4xl md:text-5xl mb-4">
                L'équipe pédagogique
              </h2>
              <p className="text-[var(--color-primary-white)] font-poppins text-lg md:text-xl leading-relaxed w-full mx-auto">
                Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
              </p>
            </div>
    
            <div className="relative w-full">
              <div className="flex justify-center items-center space-x-6 md:space-x-8 lg:space-x-12 py-4 px-4 overflow-hidden w-full">
                {getDisplayedMembers().map((member) => (
                  <div
                    key={member.id}
                    className="flex-shrink-0 w-64 p-10 bg-[var(--color-primary-white)] rounded-lg shadow-lg flex flex-col items-center"
                  >
                    <img
                      src={member.image}
                      alt={`Membre de l'équipe ${member.name}`}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[var(--color-primary-yellow)]"
                    />
                    <h3 className="font-garamond text-xl font-semibold mb-1 text-[var(--color-primary-blue)]">
                      {member.name}
                    </h3>
                    <p className="font-poppins text-sm text-[var(--color-primary-blue)] bg-none px-2 py-1 rounded-sm">
                      {member.expertise}
                    </p>
                  </div>
                ))}
              </div>
    
              {totalMembers > membersPerPage && (
                <>
                  <button
                    onClick={goToPrevMember}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-0 rounded-full transition hidden md:block"
                  >
                    &#10094;
                  </button>
    
                  <button
                    onClick={goToNextMember}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-0 rounded-full transition hidden md:block"
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
    )
}

export default Equipe;



