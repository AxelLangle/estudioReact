import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'



export function App() {


  return (
    <section className="App">
      <TwitterFollowCard
       socialUserName="AxelFernandoLangleCamacho"
        userName="AxelLangle" userJob="Desarrollador Web" 
      />

      <TwitterFollowCard socialUserName="midudev" userName="MiduDev" userJob="Desarrollador Web" />

      <TwitterFollowCard socialUserName="JuanSGuarnizo" userName="Juaniquilador" userJob="Streamer">
        <span>🔥Streamer de videojuegos🔥</span>
      </TwitterFollowCard>

      <TwitterFollowCard socialUserName="BillGates" userName="Bill Gates" userJob="Filantropo" />
    </section>
  )
}

