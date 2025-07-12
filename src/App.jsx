import React from 'react'
import './index.css'
import { Header } from './composant/Header'
import { Banniere } from './composant/Banniere'
import {About} from './composant/About'
import Equipe from './composant/Equipe.jsx';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banniere></Banniere>
      <About></About>
      <Equipe></Equipe>
    </div>
  )
}

export default App
