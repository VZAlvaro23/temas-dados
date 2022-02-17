import { useEffect } from "react";
import "./throw.css";

const Throw = ({
  dices,
  setDices,
  words,
  setWords,
}) => {
  const throwDices = async () => {
    dices.map((dice, index) => {
      dice.imgUrl = require("../../../assets/dice" +
        index +
        "/" +
        Math.floor(Math.random() * 6) +
        ".png");
    });
    setDices([...dices]);
    let promises = [];
    let currentPage = 1;

    while (currentPage <= words.length) {
      promises.push(
        fetch("https://palabras-aleatorias-public-api.herokuapp.com/random")
      );
      currentPage++;
    }

    // wait for all promises to fullfil
    Promise.all(promises)
      .then((responses) =>
        // Get a JSON object from each of the responses
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        // Get all the data and store it in our useState
        const results = data.map(({ body }) => body.Word);
        setWords(results);
      });
  };

  useEffect(() => {
    if (!words) {
      throwDices();
    }
  }, [words]);

  return (
    <article>
      <button
        onClick={() => {
          throwDices();
        }}
        className="btn"
      >
        <div className="front-dice">
          <span>
            <div className="dot1"></div>
          </span>
          <span></span>
          <span>
            <div className="dot3"></div>
          </span>
          <span>
            <div className="dot4"></div>
          </span>
          <span>
            <div className="dot5"></div>
          </span>
          <span>
            <div className="dot6"></div>
          </span>
          <span>
            <div className="dot7"></div>
          </span>
          <span></span>
          <span>
            <div className="dot9"></div>
          </span>
        </div>
        <div className="back-dice">
          <span>
            <div className="dot1"></div>
          </span>
          <span></span>
          <span>
            <div></div>
          </span>
          <span>
            <div className="dot4"></div>
          </span>
          <span>
            <div className="dot5"></div>
          </span>
          <span>
            <div className="dot6"></div>
          </span>
          <span></span>
          <span></span>
          <span>
            <div className="dot9"></div>
          </span>
        </div>
      </button>
    </article>
  );
};

export default Throw;
