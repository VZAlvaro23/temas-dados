import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./stars.css";

import Menu from "./components/menu/Menu";
import Dados from "./components/dados/Dados";
import Words from "./components/words/Words";
import Pics from "./components/pics/Pics";
import Delete from "./components/buttons/delete/Delete";
import Throw from "./components/buttons/throw/Throw";
import Add from "./components/buttons/add/Add";
import Timer from "./components/buttons/timer/Timer";

function App() {
  const [dices, setDices] = useState([]);
  const [cont, setCont] = useState(1);
  const [words, setWords] = useState([]);
  const [pics, setPics] = useState([]);
  const [seconds, setSeconds] = useState(0);

  const getRandomDice = () => {
    setDices([
      {
        imgUrl: require("./assets/dice0/" +
          Math.floor(Math.random() * 6) +
          ".png"),
        alt: "icon",
      },
    ]);
  };

  const getRandomWord = () => {
    fetch("https://palabras-aleatorias-public-api.herokuapp.com/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Response;
      })
      .then((data) => {
        setWords([...words, data.body.Word]);
      });
  };

  const unsplash = createApi({
    accessKey: "IImrAg9S7Lnr9csTIe2Cg7IQaChwhZjTp8hGVg7rM5I",
  });

  const getRandomPic = () => {
    unsplash.photos.getRandom({}).then((result) => {
      if (result.type === "success") {
        const imgUrl = result.response.urls.small;
        const alt = result.response.user.username;
        setPics([
          ...pics,
          {
            imgUrl: imgUrl,
            alt: alt,
          },
        ]);
      }
    });
  };

  useEffect(() => {
    getRandomDice();
    getRandomWord();
    getRandomPic();
  }, []);
  const [isActive, setIsActive] = useState(false);
  return (
    <Router>
      <div className="App">
        <div className="background-stars">
          <div className="star1"></div>
          <div className="star1"></div>
          <div className="star2"></div>
          <div className="star2"></div>
          <div className="star3"></div>
          <div className="star3"></div>
          <div className="star4"></div>
          <div className="star4"></div>
          <div className="star5"></div>
          <div className="star5"></div>
          <div className="star5"></div>
        </div>
        <Menu isActive={isActive} setIsActive={setIsActive} />
        <header>
          <h1 className="title">TEMAS DADOS</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/temas-dados"
              element={
                <section className="dices-container">
                  <Dados dices={dices} />
                </section>
              }
            ></Route>
            <Route
              path="/words"
              element={
                <section className="words-container">
                  <Words words={words}></Words>
                </section>
              }
            ></Route>
            <Route
              path="/pics"
              element={
                <section className="pics-container">
                  <Pics pics={pics}></Pics>
                </section>
              }
            ></Route>
          </Routes>
        </main>
        <section className="buttons">
          <Delete
            setDices={setDices}
            setWords={setWords}
            dices={dices}
            words={words}
            cont={cont}
            setCont={setCont}
            pics={pics}
            setPics={setPics}
          />
          <Throw
            dices={dices}
            setDices={setDices}
            getRandomWord={getRandomWord}
            words={words}
            setWords={setWords}
            getRandomPic={getRandomPic}
            unsplash={unsplash}
            pics={pics}
            setPics={setPics}
            seconds={seconds}
          />
          <Add
            setDices={setDices}
            setWords={setWords}
            words={words}
            dices={dices}
            cont={cont}
            setCont={setCont}
            getRandomWord={getRandomWord}
            getRandomPic={getRandomPic}
          />
          <Timer seconds={seconds} setSeconds={setSeconds}></Timer>
        </section>
        <svg
        className = "logo"
          width="50"
          height="40"
          viewBox="0 0 70 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_196_29)">
            <circle cx="22.9032" cy="47.4194" r="1.93548" fill="white" />
          </g>
          <g filter="url(#filter1_d_196_29)">
            <circle cx="31.2903" cy="13.2258" r="1.93548" fill="white" />
          </g>
          <g filter="url(#filter2_d_196_29)">
            <path
              d="M13.871 13.2258C13.871 14.2947 13.0044 15.1613 11.9355 15.1613C10.8665 15.1613 10 14.2947 10 13.2258C10 12.1568 10.8665 11.2903 11.9355 11.2903C13.0044 11.2903 13.871 12.1568 13.871 13.2258Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter3_d_196_29)">
            <circle cx="25.9355" cy="20.9355" r="1.93548" fill="white" />
          </g>
          <g filter="url(#filter4_d_196_29)">
            <circle cx="17.9355" cy="20.9355" r="1.93548" fill="white" />
          </g>
          <g filter="url(#filter5_d_196_29)">
            <circle cx="49.3549" cy="11.9355" r="1.93548" fill="white" />
          </g>
          <g filter="url(#filter6_d_196_29)">
            <circle cx="42.9032" cy="22.9033" r="1.93548" fill="white" />
          </g>
          <g filter="url(#filter7_d_196_29)">
            <circle cx="39.0323" cy="30.6452" r="1.93548" fill="white" />
          </g>
          <g filter="url(#filter8_d_196_29)">
            <circle cx="57.7419" cy="29.9999" r="1.93548" fill="white" />
          </g>
          <g filter="url(#filter9_d_196_29)">
            <circle cx="49.3549" cy="48.0646" r="1.93548" fill="white" />
          </g>
          <g filter="url(#filter10_d_196_29)">
            <circle cx="53.2258" cy="37.0969" r="1.93548" fill="white" />
          </g>
          <path
            d="M17.0588 20.4739L11.9355 13.2258L22.8937 46.7742L31.2903 13.2258L26.3093 20.4739"
            stroke="white"
            stroke-width="0.645161"
          />
          <path
            d="M42.5404 23.1592C44.144 21.2913 47.6632 14.4683 49.2224 11.2903L57.742 30.1638H39.0323L49.2224 48.0645L53.3986 37.363"
            stroke="white"
            stroke-width="0.645161"
          />
          <defs>
            <filter
              id="filter0_d_196_29"
              x="11.2903"
              y="35.8065"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_196_29"
              x="19.6774"
              y="1.61286"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_196_29"
              x="0.322581"
              y="1.61286"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_196_29"
              x="14.3226"
              y="9.32258"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_196_29"
              x="6.32258"
              y="9.32258"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_d_196_29"
              x="37.742"
              y="0.322581"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter6_d_196_29"
              x="31.2903"
              y="11.2904"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter7_d_196_29"
              x="27.4194"
              y="19.0323"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter8_d_196_29"
              x="46.129"
              y="18.387"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter9_d_196_29"
              x="37.742"
              y="36.4517"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
            <filter
              id="filter10_d_196_29"
              x="41.6129"
              y="25.484"
              width="23.2258"
              height="23.2257"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.83871" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_196_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_196_29"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </Router>
  );
}

export default App;
