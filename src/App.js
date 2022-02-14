import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Menu from "./components/menu/Menu";
import Dados from "./components/dados/Dados";
import Throw from "./components/buttons/throw/Throw";
import Delete from "./components/buttons/delete/Delete";
import Add from "./components/buttons/add/Add";
import Word from "./components/word/Word";
import Words from "./components/words/Words";

import title from "./assets/title.png";

function App() {
  const [dices, setDices] = useState([
    {
      imgUrl: require("./assets/dice0/" +
        Math.floor(Math.random() * 6) +
        ".png"),
      alt: "icon",
    },
  ]);

  const [cont, setCont] = useState(1);
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);
  const [data, setData] = useState(null);

  const getRandomWord = () => {
    fetch("https://palabras-aleatorias-public-api.herokuapp.com/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Response;
      })
      .then((data) => {
        setData(data);
        setWord(data.body.Word);
      });
  };

  useEffect(() => {
    getRandomWord();
    setWords([word]);
  }, []);

  return (
    <Router>
      <div className="App">
        <Menu />
        <header>
          <img className="title" src={title} alt="title" />
        </header>
        <main className="dice-container">
          <Routes>
            <Route
              path="/temas-dados"
              element={<Dados dices={dices} />}
            ></Route>
            <Route path="/words" element={<Words words={words} word = {word}></Words>}></Route>
          </Routes>
        </main>
        <section className="buttons">
          <Delete
            setDices={setDices}
            dices={dices}
            cont={cont}
            setCont={setCont}
          />
          <Throw dices={dices} setDices={setDices} getRandomWord={getRandomWord} />
          <Add
            setDices={setDices}
            setWords = {setWords}
            words = {words}
            word = {word}
            dices={dices}
            cont={cont}
            setCont={setCont}
          />
        </section>
      </div>
    </Router>
  );
}

export default App;
