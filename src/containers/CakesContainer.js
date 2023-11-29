import React, {useState} from 'react';
import Average from '../components/Average';

const CakesContainer = () => {

    const [victoriaSponge, setVictoriaSponge] = useState({
        cakeName: "Victoria Sponge",
   	    ingredients: [
            "eggs",
            "butter",
            "sugar",
            "self-raising flour",
            "baking powder",
            "milk"
  	    ],
  	    price: 5,
    	rating: 5
    })

    const [teaLoaf, setTeaLoaf] = useState({
        cakeName: "Tea Loaf",
   	    ingredients: [
            "eggs",
            "oil",
            "dried fruit",
            "sugar",
            "self-raising flour",
            "strong tea",
  	    ],
  	    price: 2,
  	    rating: 3
    })

    const [carrotCake, setCarrotCake] = useState({
        cakeName: "Carrot Cake",
   	    ingredients: [
            "carrots",
            "walnuts",
            "oil",
            "cream cheese",
            "flour",
            "sugar",
        ],
   	    price: 8,
   	    rating: 5

    })

    return(
        <>
        <h1>BNTA Bakery</h1>

        <h2>{victoriaSponge.cakeName}</h2>
        <p>Ingredients: {victoriaSponge.ingredients.join(', ')}</p>
        <p>Price: £{victoriaSponge.price}</p>
        <p>Rating: {victoriaSponge.rating}</p>

        <h2>{teaLoaf.cakeName}</h2>
        <p>Ingredients: {teaLoaf.ingredients.join(', ')}</p>
        <p>Price: £{teaLoaf.price}</p>
        <p>Rating: {teaLoaf.rating}</p>

        <h2>{carrotCake.cakeName}</h2>
        <p>Ingredients: {carrotCake.ingredients.join(', ')}</p>
        <p>Price: £{carrotCake.price}</p>
        <p>Rating: {carrotCake.rating}</p>

        <Average
        cake1={victoriaSponge.rating}
        cake2={teaLoaf.rating}
        cake3={carrotCake.rating}
        />
        </>
    )

}

export default CakesContainer;