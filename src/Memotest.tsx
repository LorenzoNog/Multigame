import React, { useEffect, useState } from "react";
import "./css/input.css";
import Swal from "sweetalert";
import { Link } from "react-router-dom";
const images = [
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true",
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/2.png?raw=true",
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/3.png?raw=true",
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/4.png?raw=true",
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/5.png?raw=true",
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/6.png?raw=true",
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/7.png?raw=true",
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/8.png?raw=true",
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/9.png?raw=true",
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10.png?raw=true",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5); //ordenando de forma aleatoria

export default function Memotest() {
  const [hasWon, setHasWon] = useState(false);
  const [guessed, setGuessed] = useState<string[]>([]);
  //guessed son los que yo YA ADIVINE
  const [selected, setSelected] = useState<string[]>([]);
  //aquellos que toque y no adivine, por lo que se deberan volver a dar vuelta
  //una vez que adivino uno que este en selected, debera pasarse a guessed

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === images.length) {
      setHasWon(true)
      Swal({
        icon: "success",
        title: "GANASTE!! BIEN HECHO CRACK",
        text: 'Juguemos de nuevo',
        timer: 7000,
      });
    }
  }, [guessed]);

  return (
    <>
      <h1 className="title">Memotest</h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(115px, 1fr))" ,
        }}
      >
        {images.map((image) => {
          const [, url] = image.split("|");
          return (
            <li
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
              key={image}
              style={{ padding: 17, cursor: "pointer" }}
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img src={url} alt="img" className="img" />
                
              ) : (
                <img
                  src="https://icongr.am/clarity/search.svg?size=128&color=currentColor"
                  alt="img"
                />
              )}
            </li>
          );
        })}
      </ul>
      {hasWon && <button onClick={()=> location.reload()} className="btnPlayAgain">Play again</button>}
      <button style={{ marginTop: 30, padding:5, marginLeft:230 }}>
        <Link className="link" to="/">
          Volver a inicio
        </Link>
      </button>
    </>
  );
}
