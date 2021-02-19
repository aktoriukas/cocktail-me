import React from 'react'
import react, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Cocktail from '../Components/Cocktail'
import Loading from '../Components/Loading'

export default function Cocktails() {

    const [cocktails, setCocktails] = useState([])
    const [cocktail, setCocktail] = useState({})
    const [cocktailVisible, setCocktailVisible] = useState(false)
    const [activeCocktailID, setActiveCocktailID] = useState('')
    const [letter, setLetter] = useState('A')
    const [loading, setLoading] = useState(true)
    const [alphabet, setAlphabet] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "Y", "Z"])
    const [out, setOut] = useState(false)

    useEffect(() => {
        fetchCocktails()
    }, [letter]);

    const fetchCocktails = async () => {
        const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
        const cocktails = await data.json()
        setCocktails(cocktails.drinks)
        setLoading(false)
    }
    const fetchCocktail = async (id) => {
        const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const cocktail = await data.json();
        setCocktail(cocktail.drinks[0])
        setActiveCocktailID(id)
        setOut(false)
        setCocktailVisible(true)
    }
    const handleClick = (letter) => {
        setCocktailVisible(false)
        setLoading(true)
        setLetter(letter)
    }
    const closeCocktail = () => {
        setOut(true)
        setTimeout(() => { setCocktailVisible(false) }, 250)

    }

    return (
        <section id='cocktails' className={cocktailVisible ? 'cocktail' : ''}>
            <div className='left' >
                <ul className='alphabet'>
                    {alphabet.map(item => (
                        <li
                            className={`letter ${item === letter ? 'active' : ''}`}
                            onClick={() => handleClick(item)}
                            key={item}>{item}
                        </li>
                    ))}
                </ul>
                <ul className='cocktail-list'>
                    {
                        loading ?
                            <Loading />
                            :
                            cocktails.map(item => (
                                <li
                                    className={`item ${activeCocktailID === item.idDrink ? 'active' : ''}`}
                                    key={item.idDrink}
                                    onClick={() => fetchCocktail(item.idDrink)}>

                                    {item.strDrink}
                                </li>
                            ))
                    }
                </ul>
            </div>
            {cocktailVisible ?
                <div className={`right ${out ? 'out' : ''}`}>
                    <Cocktail close={closeCocktail} cocktail={cocktail} />
                </div>
                : ''
            }
        </section>
    )
}
