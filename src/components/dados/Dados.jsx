import Dado from "../dado/Dado";

const Dados = ({dices}) => {
return (
  <>
    {dices.map((dice, index) => (
      <Dado imgUrl={dice.imgUrl} alt={dice.alt} key={index} />
    ))}
  </>
);
}

export default Dados;

