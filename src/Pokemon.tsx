import { useState } from "react";
import React from "react";
import Swal from "sweetalert";
import { Link } from "react-router-dom";

const POKEMONS = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash"
]
const pokeId = Math.floor(Math.random() * POKEMONS.length) //pokemon que tendre que adivinar

type Form = HTMLFormElement & {
    pokemon: HTMLInputElement
}

export default function Pokemon(){
    const [hasWon, setHasWon] = useState(false);

    function handleSubmit(event: React.FormEvent<Form>){
        event.preventDefault()
        const {pokemon} = event.currentTarget
        if(pokemon.value.toLowerCase() === POKEMONS[pokeId]){
            setHasWon(true)
            Swal({
                icon: "success",
                title: "GANASTE!! BIEN HECHO CRACK",
                text: 'jugamos otra vez?',
                timer: 6000,
              });
        }else{
            pokemon.value = ' ';
        }
    }

    return(
        <>
        <div className="containerPokemon">
            <img className="imgPokemon" style={{imageRendering:'pixelated', filter: hasWon ? '' : 'brightness(0) invert(1)'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId + 1}.png`}alt="pokemon" />
            {
                hasWon ? <button onClick={()=> location.reload()} className="btnPlayAgain">Play again</button>
                :
                (<form onSubmit={handleSubmit} className="form">
                    <input className="input" type="text" name="pokemon" autoFocus />
                    <button className="btn" type="submit">Submit</button>
                </form>
                )
            }
        </div>
        <button style={{ marginTop: 30, padding:5, marginLeft:230 }}>
        <Link className="link" to="/">
          Volver a inicio
        </Link>
      </button>
      </>
    )
}