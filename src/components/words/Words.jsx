import Word from "../word/Word";

const Words = ({ words, word }) => {
  return (
    <>
      {words.map((term, index) => (
        <Word word={term} key={index} />
      ))}
    </>
  );
};

export default Words;
