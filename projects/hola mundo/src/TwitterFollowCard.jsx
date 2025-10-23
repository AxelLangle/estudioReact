import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function TwitterFollowCard({ children, socialUserName, userName, userJob }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const handleClick = () => setIsFollowing(!isFollowing)
    console.log(isFollowing)

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-avatar-followCard'
                    src={`https://unavatar.io/youtube/${socialUserName}`}
                    alt={`El avatar de ${userName}`}
                />
                <div className='info-user'>
                    {children}
                    <strong className='name-user'>@{userName}</strong>
                    <span className='job-user'>{userJob}</span>
                    
                </div>
            </header>

            <aside>
                <button
                    className='follow-button'
                    onClick={handleClick}
                >
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    ) 
}