import React from 'react'
import './index.css'
import { Header } from './composant/Header'
import { Banniere } from './composant/Banniere'
import {About} from './composant/About'
import {Equipe} from './composant/Equipe'
import {Debouche} from './composant/Debouche'
import { Domaine } from './composant/Domaine'
import Admission from './composant/Admission'
import Programme from './composant/Programme'
import Technos from './composant/Technos'
import Partenaires from './composant/Partenaires'
import Footer from './composant/Footer'





const App = () => {
  return (
    <div>
      <Header></Header>
      <Banniere></Banniere>
      <About></About>
      <Equipe></Equipe>
      <Debouche></Debouche>
      <Domaine></Domaine>
      <Admission></Admission>
      <Programme></Programme>
      <Technos></Technos>
      <Partenaires></Partenaires>
      <Footer></Footer>
    </div>
  )
}

export default App
