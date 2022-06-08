import React from 'react'
import { useEffect,useState  } from 'react'


export const PokeApi = () => {

    const handleSiguiente = () => {
        setId(id + 1)
    }
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    console.log(id)
    
    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon (data)
            })

    
      return () => {
        
      }
    }, [id])
    

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            {
                pokemon ?
                <>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_shiny} height="200" alt="" />
                    <img src={pokemon.sprites.front_default}  alt="" /> <br />
                    <button className='btn btn-primary' onClick={handleSiguiente}>Siguiente</button>
                </>
                : null
            }
            
            
        </div>
  )
}

