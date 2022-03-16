import "./pic.css";

const Pic = ({ imgUrl, alt }) => {
  return (
    <article className="pic-container">
      <img
        src={imgUrl}
        alt={"Photo by: " + alt + " on unsplash.com"}
        title={"Photo by: " + alt + " on unsplash.com"}
      />
      <span>
        Photo by:&nbsp;
        <a
          href={
            "https://unsplash.com/@" +
            alt +
            "?utm_source=your_app_name&utm_medium=referral"
          }
        >
          {alt}
        </a>
        &nbsp;on&nbsp;
        <a href="https://unsplash.com/?utm_source=temas_dados&utm_medium=referral">
          Unsplash
        </a>
      </span>
    </article>
  );
};

export default Pic;
