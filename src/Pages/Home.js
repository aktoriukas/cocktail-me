import React from 'react'

export default function Home() {
    return (
        <section id='home' className='card'>
            <div className='home-card'>
                <h1 className='title'>Welcome</h1>
                <p>Here you can:</p>
                <ul>
                    <li>find all your favourite cocktails</li>
                    <li>upload your creations</li>
                </ul>
                <p className='cheers'>Cheers!</p>
            </div>
        </section>
    )
}
