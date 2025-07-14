import React from 'react'
import etudiant from '../assets/etudiant.webp'
import groupe1 from '../assets/group-1.webp';
import groupe2 from '../assets/group-2.webp';
import groupe3 from '../assets/group-3.webp';

function Programme() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img src={etudiant} alt="étudiants" className="w-136 rounded-lg" />
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-900 mb-14">Le programme pédagogique</h2>
          <p className="text-gray-700 mb-14 text-[18px]">
            Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché.
            La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
          </p>
          <button className=" text-[18px] px-6 py-2 border-2 border-blue-900 text-blue-900 font-bold rounded hover:bg-blue-900 hover:text-white transition">
            Notre Programme
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-yellow-600 text-5xl font-bold pb-6 pt-6">25%</p>
          <p className="font-bold text-blue-900 text-2xl pb-6">Apprentissage théoriques en présentiel</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-yellow-600 text-5xl font-bold pb-6 pt-6">25%</p>
          <p className="font-bold text-blue-900 text-2xl pb-6">Apprentissage sur supports numériques</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-yellow-600 text-5xl font-bold pb-6 pt-6">25%</p>
          <p className="font-bold text-blue-900 text-2xl pb-6">Travaux individuels de l’étudiant</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-yellow-600 text-5xl font-bold pb-6 pt-6">25%</p>
          <p className="font-bold text-blue-900 text-2xl pb-6">Apprentissage en entreprise</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src={groupe1} alt="présentiel" className="rounded-lg" />
        <img src={groupe2} alt="numérique" className="rounded-lg" />
        <img src={groupe3} alt="étudiant" className="rounded-lg" />
      </div>
    </div>
  )
}

export default Programme
