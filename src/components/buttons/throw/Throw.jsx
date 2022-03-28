import { useState, useEffect, useRef } from "react";
import "./throw.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";

const Throw = ({
  dices,
  setDices,
  words,
  setWords,
  unsplash,
  pics,
  setPics,
  seconds,
}) => {
  const throwDices = async () => {
    let dicesNumbers = [];
    let diceNumber;
    
    dices.map((dice, index) => {
      do {
        diceNumber = Math.floor(Math.random() * 30);
      } while (dicesNumbers.includes(diceNumber));
      dicesNumbers.push(diceNumber);   
      console.log(diceNumber)
      dice.imgUrl = require("../../../assets/dices" +
        // index +
        "/" +
        diceNumber +
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
    let picsNumber = pics.length;
    unsplash.photos.getRandom({ count: picsNumber }).then((result) => {
      if (result.type === "success") {
        const results = result.response.map(({ urls, user }) => ({
          imgUrl: urls.raw,
          alt: user.username,
        }));
        setPics(results);
      }
    });
  };

  const [clicked, setClicked] = useState(false);
  const interval = useRef();
  const throwTimer = () => {
    if (clicked) {
      setClicked(false);
      console.log(interval);
      clearInterval(interval.current);
    } else {
      if (seconds !== 0) {
        setClicked(true);
        interval.current = setInterval(() => {
          throwDices();
        }, seconds * 1000);
      } else throwDices();
    }
  };

  // const clear = () => {
  //   setClicked(false);
  //   // clearInterval(throwTimer);
  //   console.log(intervaloso)
  // };

  useEffect(() => {
    if (!words) {
      throwDices();
    }
  }, [words]);

  const diceFive = <FontAwesomeIcon icon={faDiceFive} />;

  return (
    <button
      onClick={() => {
        throwTimer();
      }}
      className={clicked ? "btn spinner" : "btn"}
    >
      {diceFive}
    </button>
  );
};

export default Throw;
