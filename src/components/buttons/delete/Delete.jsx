import "./delete.css";

import deleteImg from "../../../assets/buttons/delete.png";

const Delete = () => {
return (
    <article>
        <button className="btn-delete">
            <img className="delete-img" src = {deleteImg} alt = "delete-img"/>
        </button>
    </article>
);
}

export default Delete;