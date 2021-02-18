import React from 'react'

import Email from '../img/email.svg'
import Github from '../img/github.svg'
import LinkedIn from '../img/linkedin.svg'
import Web from '../img/web.svg'

export default function Contact() {
    return (
        <section id='contact' className='card'>
            <div className='contact-card'>
                <h2 className='title'>Contacts</h2>
                <div className='social-media'>
                    <a href="mailto: gediminas.strumila@gmail.com" target="_blank">
                        <img src={Email} />
                        <span>gediminas.strumila@gmail.com</span>
                    </a>
                    <a href="https://github.com/aktoriukas/" target="_blank">
                        <img src={Github} />
                        <span>aktoriukas</span>
                    </a>
                    <a href="https://www.linkedin.com/in/strumila/" target="_blank">
                        <img src={LinkedIn} />
                        <span>strumila</span>
                    </a>
                    <a href="https://aktoriukas.com/" target="_blank">
                        <img src={Web} />
                        <span>www.aktoriukas.com</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
