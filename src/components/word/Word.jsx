import "./word.css";

const Word = ({ word }) => {
  return (
    <article className="word-container">
      <h1 className="word">
        <a href={`https://dle.rae.es/${word}`} target = "_blank" alt = {word} rel = "noreferrer">{word}</a>
      </h1>
    </article>
  );
};

export default Word;
