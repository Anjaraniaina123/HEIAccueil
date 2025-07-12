import React from 'react'
import './index.css'
import { Header } from './composant/Header'
import { Banniere } from './composant/Banniere'
import {About} from './composant/About'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banniere></Banniere>
      <About></About>
    </div>
  )
}

export default App
