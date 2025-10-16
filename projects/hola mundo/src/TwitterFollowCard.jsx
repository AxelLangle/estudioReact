import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function TwitterFollowCard() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-avatar-followCard' src="https://yt3.googleusercontent.com/J-FzOKKYj-Rp7oEMPqcHMMzxyDSDqhFfZN3onmK4kKjIaoV2Ljxq5tHGOH5GYlmuyk8pzbcE=s160-c-k-c0x00ffffff-no-rj" alt="El avatar de MiduDev" />
        <div className='info-user'>
          <strong className='name-user'>Axel Pene Gordo Langle</strong>
          <span className='job-user'>Desarrollador Web</span>
        </div>
        <aside>
          <button className='follow-button'>Seguir</button>
        </aside>
      </header>
    </article>
  )
}