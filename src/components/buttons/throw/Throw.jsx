import "./throw.css";

const Throw = ({ setNumber }) => {
  return (
    <article>
      <button
        onClick={() => setNumber(Math.ceil(Math.random() * 5))}
        className="btn"
      >
        <div className="front-dice">
          <span>
            <div className="dot1"></div>
          </span>
          <span></span>
          <span>
            <div className="dot3"></div>
          </span>
          <span>
            <div className="dot4"></div>
          </span>
          <span>
            <div className="dot5"></div>
          </span>
          <span>
            <div className="dot6"></div>
          </span>
          <span>
            <div className="dot7"></div>
          </span>
          <span></span>
          <span>
            <div className="dot9"></div>
          </span>
        </div>
        <div className="back-dice">
          <span>
            <div className="dot1"></div>
          </span>
          <span></span>
          <span>
            <div></div>
          </span>
          <span>
            <div className="dot4"></div>
          </span>
          <span>
            <div className="dot5"></div>
          </span>
          <span>
            <div className="dot6"></div>
          </span>
          <span></span>
          <span></span>
          <span>
            <div className="dot9"></div>
          </span>
        </div>
      </button>
    </article>
  );
};

export default Throw;
