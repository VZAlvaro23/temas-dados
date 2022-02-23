import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Menu from "./components/menu/Menu";
import Dados from "./components/dados/Dados";
import Words from "./components/words/Words";
import Pics from "./components/pics/Pics";
import Delete from "./components/buttons/delete/Delete";
import Throw from "./components/buttons/throw/Throw";
import Add from "./components/buttons/add/Add";

function App() {
  const [dices, setDices] = useState([]);
  const [cont, setCont] = useState(1);
  const [words, setWords] = useState([]);
  const [pics, setPics] = useState([]);

  const getRandomDice = () => {
    setDices([
      {
        imgUrl: require("./assets/dice0/" +
          Math.floor(Math.random() * 6) +
          ".png"),
        alt: "icon",
      },
    ]);
  };
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

  const unsplash = createApi({
    accessKey: "IImrAg9S7Lnr9csTIe2Cg7IQaChwhZjTp8hGVg7rM5I",
  });

  const getRandomPic = () => {
    unsplash.photos.getRandom({}).then((result) => {
      if (result.type === "success") {
        const imgUrl = result.response.urls.small;
        const alt = result.response.user.username;
        setPics([
          ...pics,
          {
            imgUrl: imgUrl,
            alt: alt,
          },
        ]);
      }
    });
  };

  useEffect(() => {
    getRandomDice();
    getRandomWord();
    getRandomPic();
  }, []);

  return (
    <Router>
      <div className="App">
        <Menu />
        <header>
          <h1>Diseño nuevo</h1>
        </header>
        <Routes>
          <Route
            path="/temas-dados"
            element={
              <main className="dices-container">
                <Dados dices={dices} />
              </main>
            }
          ></Route>
          <Route
            path="/words"
            element={
              <main className="words-container">
                <Words words={words}></Words>
              </main>
            }
          ></Route>
          <Route
            path="/pics"
            element={
              <main className="pics-container">
                <Pics pics={pics}></Pics>
              </main>
            }
          ></Route>
        </Routes>
        <section className="buttons">
          <Delete
            setDices={setDices}
            setWords={setWords}
            dices={dices}
            words={words}
            cont={cont}
            setCont={setCont}
            pics={pics}
            setPics={setPics}
          />
          <Throw
            dices={dices}
            setDices={setDices}
            getRandomWord={getRandomWord}
            words={words}
            setWords={setWords}
            getRandomPic={getRandomPic}
            unsplash={unsplash}
            pics={pics}
            setPics={setPics}
          />
          <Add
            setDices={setDices}
            setWords={setWords}
            words={words}
            dices={dices}
            cont={cont}
            setCont={setCont}
            getRandomWord={getRandomWord}
            getRandomPic={getRandomPic}
          />
        </section>
      </div>
    </Router>
  );
}

export default App;
