import react, { useState, useEffect } from 'react';


export default function Cocktail(props) {

    const { strDrink, strDrinkThumb, strInstructions } = props.cocktail
    console.log(props.cocktail)

    let ingredience = []

    const buildIngredience = () => {

        for (let i = 1; i < 15; i++) {
            let strName = `strIngredient${i}`
            let strMeasr = `strMeasure${i}`
            if (typeof (props.cocktail[strName]) === 'object') {
                return
            } else {
                ingredience.push(
                    <tr key={i}>
                        <td>{props.cocktail[strName]}</td>
                        <td>{props.cocktail[strMeasr]}</td>
                    </tr>
                )
            }
        }
    }
    buildIngredience()

    return (
        <section id='cocktail'>
            <div className='container'>
                <h2 className='name'>{strDrink}</h2>
                <div className='img-container'>
                    <img src={strDrinkThumb} />
                </div>
                <table className='ingredience'>
                    <tbody>
                        {ingredience}
                    </tbody>
                </table>
                <div className='about'>
                    <p>{strInstructions}</p>
                </div>
            </div>
        </section>
    )
}
