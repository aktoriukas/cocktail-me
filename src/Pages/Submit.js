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
                <label>measure:</label>
                <input placeholder='ml/part'></input>
                <label>ingredient:</label>
                <input placeholder='ingredient'></input>
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
                    <label>Username:</label>
                    <input />
                    <label>Email:</label>
                    <input />
                    <label>Cocktail Name:</label>
                    <input />
                    <div className='ingredients'>
                        {ingredients}
                    </div>
                    <div className='buttons'>
                        <Button class='add' click={(e) => handleClick(e, 'add')} txt='add' />
                        <Button class='remove' click={(e) => handleClick(e, 'remove')} txt='remove' />
                    </div>
                    <label>Method:</label>
                    <textarea></textarea>
                    <label>Story:</label>
                    <textarea></textarea>
                </div>
                <Button class='submit' click={(e) => submitForm(e)} txt='Submit' />
            </form>
        </section>
    )
}