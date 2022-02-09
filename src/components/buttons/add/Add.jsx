import "./add.css";

import addImg from "../../../assets/buttons/add.png";

const Add = ({ dices, setDices, cont, setCont }) => {
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
    }
  };
  return (
    <article>
      <button className="btn-add" onClick={addDice}>
        <img className="add-img" src={addImg} alt="add-img" />
      </button>
    </article>
  );
};

export default Add;
