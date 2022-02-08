import { useState } from "react";

import "./App.css";

import Dado from "./components/dado/Dado";
import Throw from "./components/buttons/throw/Throw";
import Delete from "./components/buttons/delete/Delete";
import Add from "./components/buttons/add/Add";

function App() {
  const [number, setNumber] = useState(Math.ceil(Math.random() * 5));
  const [dices, setDices] = useState([{imgUrl:}]);

  return (
    <div className="App">
      <header>
        <h1 className="title">TEMAS DADOS</h1>
      </header>
      <main className="dice-container">
        {/* <Dado number={number} /> */}
      </main>
      <section className="buttons">
        <Delete />
        <Throw setNumber={setNumber} />
        <Add />
      </section>
    </div>
  );
}

export default App;
