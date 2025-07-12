import React from 'react'
import '../index.css'
import logo from '../assets/Logo.png'
export const Header = () => {
  return (
    <div>
      
      <header className="bg-[#001948] text-white flex justify-between items-center px-8 py-4">

        <div className="flex items-center">
          <img src={logo} alt="Logo HEI" className="h-12" />
        </div>

        <nav className="flex gap-6 font-semibold">
          <a href="#" className="text-yellow-400 hover:text-yellow-300 transition">ACCUEIL</a>
          <a href="#" className="hover:text-yellow-300 transition">ACTUALITÉS</a>
          <a href="#" className="hover:text-yellow-300 transition">BOURSE D'ÉTUDES</a>
          <a href="#" className="hover:text-yellow-300 transition">INSCRIPTION</a>
          <a href="#" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition">INTRANET</a>
        </nav>
    </header>
    </div>
  )
}