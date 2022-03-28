import "./add.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Add = ({
  setDicesNumbers,
  dicesNumbers,
  diceNumber,
  dices,
  setDices,
  cont,
  setCont,
  getRandomWord,
  getRandomPic,
  words,
}) => {
  const addDice = () => {
    if (dices.length <= 4) {
      setCont(cont + 1);
      do {
        diceNumber = Math.floor(Math.random() * 30);
      } while (dicesNumbers.includes(diceNumber));
      setDicesNumbers([...dicesNumbers, diceNumber]);
      setDices([
        ...dices,
        {
          imgUrl: require("../../../assets/dices" +
            // cont +
            "/" +
            diceNumber +
            ".png"),
          alt: "icon",
        },
      ]);

      getRandomPic();
    }
    if (words.length <= 5) {
      getRandomWord();
    }
  };
  const plus = <FontAwesomeIcon icon={faPlus} />;

  return (
    <button className="btn-add" onClick={addDice}>
      {plus}
    </button>
  );
};

export default Add;
