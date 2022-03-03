import "./add.css";

import addImg from "../../../assets/buttons/add.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Add = ({
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
      setDices([
        ...dices,
        {
          imgUrl: require("../../../assets/dice" +
            cont +
            "/" +
            Math.floor(Math.random() * 6) +
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
    <article>
      <button className="btn-add" onClick={addDice}>
        {plus}
      </button>
    </article>
  );
};

export default Add;
