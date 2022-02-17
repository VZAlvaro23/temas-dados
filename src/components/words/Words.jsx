import Word from "../word/Word";

const Words = ({ words }) => {
  return (
    <>
      {words.map((word, index) => (
        <Word word={word} key={index} />
      ))}
    </>
  );
};

export default Words;
