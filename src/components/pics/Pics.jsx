import Pic from "../pic/Pic";

const Pics = ({ pics }) => {
  return (
    <>
      {pics.map((pic, index) => (
        <Pic imgUrl={pic.imgUrl} alt = {pic.alt} key={index}></Pic>
      ))}
    </>
  );
};

export default Pics;
