import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard socialUserName="AxelFernandoLangleCamacho" userName="AxelLangle" userJob="Desarrollador Web" />
      <TwitterFollowCard socialUserName="midudev" userName="MiduDev" userJob="Desarrollador Web" />
      <TwitterFollowCard socialUserName="Juanito" userName="Juanito" userJob="Desarrollador Web" />
    </section>
  )
}

