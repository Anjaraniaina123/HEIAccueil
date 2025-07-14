import React from 'react'
import femme from '../assets/IMG-02-e1720543344824-987x1024-1.webp'

export const Debouche = () => {
  
  return(
    <section className="bg-white py-16">
    <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center md:items-start gap-12">
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-[#001948] font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
        Quelques débouchés
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
         <p>
            Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…<br /> <br /> <br />
            Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
         </p>
        </div>
      </div>

      
      <div className="md:w-1/2 w-full hidden md:flex justify-center">
        <img
          src={femme}
          alt="Étudiants HEI"
          className="w-full max-w-md rounded-lg object-cover"
        />
      </div>
    </div>
  </section>
  )
 
}

