import "./pic.css";

const Pic = ({imgUrl, alt}) => {
    return (
        <article className="pic-container">
            <img src = {imgUrl} alt = {"Photo by: " + alt + " at unsplash.com"}/>
        </article>
    );
}

export default Pic;
