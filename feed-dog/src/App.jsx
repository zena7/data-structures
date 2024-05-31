import { useEffect, useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const windowWidth = window.innerWidth;

  const [count, setCount] = useState(0);
  // const [food, setfood] = useState([]);
  const [shift, setShift] = useState(0);
  const playerRef = useRef(null);

  // const windowHeight = window.innerHeight;
  // const windowWidth = window.innerWidth;

  function onHandleClick() {
    setCount((prev) => prev + 1);
  }

  function onHandleClickMinus() {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }

  // function getRandom(min = 0, max = 1) {
  //   return Math.round((Math.random() * (max - min) + min) * 10);
  // }

  useEffect(() => {
    // const player = document.querySelector(".player");
    const step = 4;
    // setShift((prev) => {
    //   let newJ = prev + playerRef.current.getBoundingClientRect();
    //   console.log("INITIAL shift", newJ);
    //   return newJ;
    // });

    document.addEventListener("keydown", function (event) {
      if (event.code === "ArrowRight") {
        setShift((prev) => {
          let newShift = prev - step;

          console.log(
            `DOG TO RIGHT - shift: ${newShift}, width: ${windowWidth} ${
              playerRef.current.getBoundingClientRect().left
            },  ${playerRef.current.getBoundingClientRect().right}`
          );
          playerRef.current.style.right = `${newShift}%`;
          return newShift;
        });
      } else if (event.code === "ArrowLeft") {
        setShift((prev) => {
          let newShift = prev + step;

          console.log(
            `DOG TO LEFT - shift: ${newShift}, width: ${windowWidth},  ${
              playerRef.current.getBoundingClientRect().left
            },  ${playerRef.current.getBoundingClientRect().right}`
          );
          playerRef.current.style.right = `${newShift}%`;
          return newShift;
        });
      }
    });
  }, []);
  function onHandleStartGame() {}

  return (
    <>
      <p className='count'>{count}</p>
      <button onClick={onHandleClick}>Add</button>
      <button onClick={onHandleClickMinus}>Minus</button>
      <button onClick={onHandleStartGame}>Start game</button>
      <div className='player' ref={playerRef}>
        <p>Dog</p>
      </div>
    </>
  );
}

export default App;
