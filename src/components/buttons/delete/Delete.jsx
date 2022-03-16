import "./delete.css";

import deleteImg from "../../../assets/buttons/delete.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Delete = ({
  dices,
  setDices,
  cont,
  setCont,
  words,
  setWords,
  pics,
  setPics,
}) => {
  const deleteDice = () => {
    if (dices.length > 1) {
      setCont(cont - 1);
      dices.pop();

      pics.pop();
      setDices([...dices]);

      setPics([...pics]);
    }
    if (words.length > 1) {
      words.pop();
      setWords([...words]);
    }
  };

  const minus = <FontAwesomeIcon icon={faMinus} />;
  return (
    <button className="btn-delete" onClick={deleteDice}>
      {minus}
    </button>
  );
};

export default Delete;
