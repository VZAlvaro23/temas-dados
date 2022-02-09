import "./dado.css";

const Dado = ({ imgUrl, alt }) => {
  return (
    <article>
      <div className="back-face">
        <div className="front-face">
          <img
            className="icono"
            src={imgUrl}
            alt={alt}
          />
        </div>
      </div>
    </article>
  );
};

export default Dado;
