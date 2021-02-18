import React from 'react'
import react, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cocktail from '../Components/Cocktail'

export default function Cocktails() {

    useEffect(() => {
        fetchCocktails()
    }, []);

    const [cocktails, setCocktails] = useState([])
    const [cocktail, setCocktail] = useState({})
    const [cocktailVisible, setCocktailVisible] = useState(false)

    const fetchCocktails = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        const cocktails = await data.json()
        setCocktails(cocktails.drinks)
    }
    const fetchCocktail = async (id) => {
        const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const cocktail = await data.json();
        setCocktail(cocktail.drinks[0])
        setCocktailVisible(true)
    }

    return (
        <section id='cocktails'>
            <div className='left'>
                <ul className='cocktail-list'>
                    {cocktails.map(item => (
                        // <Link key={item.idDrink} to={`/cocktails/${item.idDrink}`}>
                        // </Link>
                        <li key={item.idDrink} onClick={() => fetchCocktail(item.idDrink)}>{item.strDrink}</li>
                    ))}
                </ul>
            </div>
            <div className='right'>
                {cocktailVisible ? <Cocktail cocktail={cocktail} /> : ''}
            </div>
        </section>
    )
}
