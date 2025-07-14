import React from "react";

export default function Admission() {
  return (
    <div className="bg-[#2ea2cc] text-white py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">Admission</h1>
        <p className="max-w-4xl mx-auto text-lg">
          Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :<br />
          une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto text-black">
        {/* Step 1 */}
        <div className="bg-yellow-100 p-6 flex flex-col justify-between relative">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">01</h2>
            <p className="font-bold">Dépôt de dossiers</p>
            <p className="text-sm mt-2">
              pour les bacheliers de toutes séries sans limite d’âge
            </p>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 text-white text-5xl md:block hidden">
            →
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-yellow-200 p-6 flex flex-col justify-between relative">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">02</h2>
            <p className="font-bold">Test de niveau</p>
            <p className="text-sm mt-2">
              composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D
            </p>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 text-white text-5xl md:block hidden">
            →
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-yellow-300 p-6 flex flex-col justify-between relative">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">03</h2>
            <p className="font-bold">Inscription définitive</p>
            <p className="text-sm mt-2">(si test réussi)</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-10 mb-4">
        <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded shadow hover:bg-gray-100">
          Inscrivez-vous ici
        </button>
        <button className="bg-blue-900 text-white font-bold py-3 px-6 rounded shadow hover:bg-blue-800">
          Résultat concours
        </button>
      </div>
    </div>
  );
}
