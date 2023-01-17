import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function FetchPokemon() {
    const [pokemon, setPokemon] = useState();

    const axiosPokemon = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(results=>{
                console.log(results)
                setPokemon(results.data.results)
            })
            .catch(error=>console.log(error))
    }
  return (
    <div>
        <div>
            <button onClick={axiosPokemon}>Fetch Pokemon</button>
            {pokemon && pokemon.map((poke,idx)=>{
                return(
                    <div key={idx}><ul>{poke.name}</ul></div>
                )
            })}
        </div>
        
    </div>
  )
}

export default FetchPokemon