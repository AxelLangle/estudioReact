import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function TwitterFollowCard({ socialUserName, userName, userJob }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const handleToggle = () => setIsFollowing(prev => !prev)
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
                    <strong className='name-user'>@{userName}</strong>
                    <span className='job-user'>{userJob}</span>
                </div>
            </header>

            <aside>
                <button
                    className='follow-button'
                    onClick={handleToggle}
                >
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    )
}