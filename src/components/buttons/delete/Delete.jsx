import "./delete.css";

import deleteImg from "../../../assets/buttons/delete.png";

const Delete = ({ dices, setDices, cont, setCont }) => {
  const deleteDice = () => {
    
    if (dices.length > 1) {
      setCont(cont - 1);
      dices.pop();
      setDices([...dices]);
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
