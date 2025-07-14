import React from 'react'
import './index.css'
import { Header } from './composant/Header'
import { Banniere } from './composant/Banniere'
import {About} from './composant/About'
import {Equipe} from './composant/Equipe'
import {Debouche} from './composant/Debouche'
import { Domaine } from './composant/Domaine'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banniere></Banniere>
      <About></About>
      <Equipe></Equipe>
      <Debouche></Debouche>
      <Domaine></Domaine>
    </div>
  )
}

export default App
