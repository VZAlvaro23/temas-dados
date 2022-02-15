import { useEffect, useState } from "react";
import "./throw.css";

const Throw = ({ dices, setDices, words, setWords, setData }) => {
  const throwDices = () => {
    dices.map((dice, index) => {
      dice.imgUrl = require("../../../assets/dice" +
        index +
        "/" +
        Math.floor(Math.random() * 6) +
        ".png");
    });
    setDices([...dices]);
    words.map((word, index) => {
    fetch("https://palabras-aleatorias-public-api.herokuapp.com/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Response;
      })
      .then((data) => {
        setData(data);
        words[index] = data.body.Word;
        setWords([...words]);
      });                         
    });

  };
  useEffect(() => {
throwDices();
  }, []);




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
