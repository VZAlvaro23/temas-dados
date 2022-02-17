import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Menu from "./components/menu/Menu";
import Dados from "./components/dados/Dados";
import Words from "./components/words/Words";
import Delete from "./components/buttons/delete/Delete";
import Throw from "./components/buttons/throw/Throw";
import Add from "./components/buttons/add/Add";

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
  const [words, setWords] = useState([]);
  const [cont, setCont] = useState(1);

  const getRandomWord = () => {
    fetch("https://palabras-aleatorias-public-api.herokuapp.com/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Response;
      })
      .then((data) => {
        setWords([...words, data.body.Word]);
      });
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  return (
    <Router>
      <div className="App">
        <Menu />
        <header>
          <img className="title" src={title} alt="title" />
        </header> 
          <Routes>
            <Route
              path="/temas-dados"
              element={<main className="dices-container"><Dados dices={dices} /></main>}
            ></Route>
            <Route
              path="/words"
              element={<main className = "words-container"><Words words={words}></Words></main>}
            ></Route>
          </Routes>
        <section className="buttons">
          <Delete
            setDices={setDices}
            setWords={setWords}
            dices={dices}
            words= {words}
            cont={cont}
            setCont={setCont}
          />
          <Throw
            dices={dices}
            setDices={setDices}
            getRandomWord={getRandomWord}
            words={words}
            setWords={setWords}
          />
          <Add
            setDices={setDices}
            setWords={setWords}
            words={words}
            dices={dices}
            cont={cont}
            setCont={setCont}
            getRandomWord={getRandomWord}
          />
        </section>
      </div>
    </Router>
  );
}

export default App;
