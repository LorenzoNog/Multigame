import React from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert";
import { Link } from "react-router-dom";
const WORDS = [
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
  "sandslash",
];

type Form = HTMLFormElement & {
  buffer: HTMLInputElement
}

const WordsPerMinute = () => {
  const [word, setWord] = useState(() => WORDS[(Math.random() * WORDS.length) | 0]);
  const [characterCount, setCharacterCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);
  const [buffer, setBuffer] = useState(""); //este buffer seria el input del usuario
  const [time, setTime] = useState(0);

  const handleSubmit = (event: React.FormEvent<Form>) => {
    event.preventDefault();

    if (buffer === word) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setCharacterCount((characterCount) => characterCount + word.length);
      setWordsCount((wordsCount) => (wordsCount += 1));
    }
    setBuffer("");
  };

  useEffect(() => {
    if (time !== 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timeout);
    }    
  }, [time]);

  const onclick = () => {
    setTime(60)
    setCharacterCount(0)
    setWordsCount(0)
  }

  return (
    <>
      <div className="containerWpm">
        {Boolean(time) && <h1 className="word">{word}</h1>}
        <h2 className="titleWPM"> Characters typed: {characterCount}</h2>
        <h2 className="titleWPM">Words typed: {wordsCount}</h2>
        <h3 className="time"> Remaining time: {time}</h3>
        {time !== 0 ? (
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              className="input"
              value={buffer}
              onChange={(e) => {
                setBuffer(e.target.value);
              }}
            />
            <div className="containerBtn">
              <button type="submit" className="btnWpm">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <button onClick={onclick}  className="btnPlay">
            Play
          </button>
        )}
      </div>
      <button style={{ marginTop: 30, padding: 5, marginLeft: 230 }}>
        <Link className="link" to="/">
          Volver a inicio
        </Link>
      </button>
    </>
  );
}

export default WordsPerMinute
