import "./dado.css";

const Dado = ({ imgUrl, alt }) => {
  return (
    <article>
      <div className="wrapper">
        <div className="back-face">
          <img className="icono" src={imgUrl} alt={alt} />
        </div>
        <div className="shadow">
          <div></div>
        </div>
      </div>
    </article>
  );
};

export default Dado;
