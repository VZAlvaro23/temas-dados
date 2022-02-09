import { useState } from "react";

import "./App.css";

import Dado from "./components/dado/Dado";
import Throw from "./components/buttons/throw/Throw";
import Delete from "./components/buttons/delete/Delete";
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
  const [cont, setCont] = useState(1);

  return (
    <div className="App">
      <header>
        <img className="title" src = {title} alt = "title" />
      </header>
      <main className="dice-container">
        {dices.map((dice, index) => (
          <Dado imgUrl={dice.imgUrl} alt={dice.alt} key={index} />
        ))}
      </main>
      <section className="buttons">
        <Delete
          setDices={setDices}
          dices={dices}
          cont={cont}
          setCont={setCont}
        />
        <Throw dices={dices} setDices = {setDices}/>
        <Add setDices={setDices} dices={dices} cont={cont} setCont={setCont} />
      </section>
    </div>
  );
}

export default App;
