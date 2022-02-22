import "./delete.css";

import deleteImg from "../../../assets/buttons/delete.png";

const Delete = ({ dices, setDices, cont, setCont, words, setWords, pics, setPics }) => {
  const deleteDice = () => {
    
    if (dices.length > 1) {
      setCont(cont - 1);
      dices.pop();
      words.pop();
      pics.pop();
      setDices([...dices]);
      setWords([...words]);
      setPics([...pics]);
    }
  };
  return (
    <article>
      <button className="btn-delete" onClick={deleteDice}>
        <img className="delete-img" src={deleteImg} alt="delete-img" />
      </button>
    </article>
  );
};

export default Delete;
