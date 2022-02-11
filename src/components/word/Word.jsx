import "./word.css";

const Word = ({ word }) => {
  return (
    <article className="word-container">
      <h1 className="word">{word}</h1>
    </article>
  );
};

export default Word;
