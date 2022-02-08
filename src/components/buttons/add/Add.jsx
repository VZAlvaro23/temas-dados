import "./add.css";

import addImg from "../../../assets/buttons/add.png";

const Add = () => {
    return (
      <article>
        <button className="btn-add">
          <img className ="add-img" src = {addImg} alt = "add-img" />
        </button>
      </article>
    );
};

export default Add;
