import React from 'react';
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer>
        <div className='bg-[#001948] text-white'>
            <div className='pl-82 pt-8 pb-8'>
                <img src={logo} alt="Logo HEI" className='w-26 ' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 pr-82 pl-82 pb-8'>
                {/* info */}
                <div className='space-y-[25px]'>
                    <p>Formation habilitée par l’Etat suivant le système LMD</p>
                    <p>Habilitation MESupRes<br />
                    n°31309/2023</p>
                </div>

                {/* Adresse */}
                <div>
                    <h3 className='font-bold text-[26px]'>Adresse</h3>
                    <p>II J 161 R Ambodivoanjo</p>
                    <p>Ivandry Antananarivo</p>
                    <p>101, Madagascar</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className='font-bold text-[26px]'>Navigation</h3>
                    <ul className='space-y-[1rem]'>
                        <li>Accueil</li>
                        <li>Actualités</li>
                        <li>Bourses d'études</li>
                        <li>Inscription</li>
                    </ul>
                </div>

                {/* Réseaux sociaux */}
                <div>
                    <h3 className='font-bold text-[26px]'>Médias sociaux</h3>
                </div>

            </div>
        </div>
        <div className='text-[#515151] text-center font-bold text-[20px]'>
                <p>© HEI Madagascar</p>
        </div>
    </footer>
  )
}

export default Footer
