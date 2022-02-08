import "./dado.css";

const Dado = ({ number }) => {
  return (
    <article>
      <div className="back-face">
        <div className="front-face">
          <img
            className="icono"
            src={require("../../assets/dice1/" + number + ".png")}
            alt="icono"
          />
        </div>
      </div>
    </article>
  );
};

export default Dado;
