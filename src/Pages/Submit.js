import React, { useState, useEffect } from 'react'

import Button from '../Components/Button'

export default function Submit() {

    const [ingrCount, setIngrCount] = useState(4)

    useEffect(() => {
    }, [ingrCount]);


    let ingredients = []
    for (let i = 0; i < ingrCount; i++) {
        ingredients.push(
            <div className='ingredient' key={i}>
                <input className='measure' placeholder='ml/part'></input>
                <input className='item' placeholder='ingredient'></input>
            </div>
        )
    }
    const handleClick = (e, opt) => {
        e.preventDefault();
        if (opt === 'add') { setIngrCount(ingrCount + 1) }
        else { setIngrCount(ingrCount - 1) }
    }
    const submitForm = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <section id='submit'>
            <h2 className='title'>Submit your cocktail</h2>
            <form className='form'>
                <div className='form-inner'>
                    <input placeholder='username' />
                    <input placeholder='email' />
                    <input placeholder='cocktail name' />
                    <div className='ingredients'>
                        {ingredients}
                    </div>
                    <div className='buttons'>
                        <Button class='add' click={(e) => handleClick(e, 'add')} txt='add' />
                        <Button class='remove' click={(e) => handleClick(e, 'remove')} txt='remove' />
                    </div>
                    <textarea placeholder='method'></textarea>
                    <textarea placeholder='story'></textarea>
                </div>
                <Button class='submit' click={(e) => submitForm(e)} txt='Submit' />
            </form>
        </section>
    )
}