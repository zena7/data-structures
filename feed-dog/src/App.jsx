import { useEffect, useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const windowWidth = window.innerWidth;

  const [count, setCount] = useState(0);
  // const [food, setfood] = useState([]);
  const [shift, setShift] = useState(0);
  // const [leftСoordinate, setLeftСoordinate] = useState(0);
  // const [rightСoordinate, setRightСoordinate] = useState(0);
  const playerRef = useRef(null);
  const marginOfError = 10;

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
    const step = 4;

    document.addEventListener("keydown", function (event) {
      let rightCoord = playerRef.current.getBoundingClientRect().right;
      let leftCoord = playerRef.current.getBoundingClientRect().left;

      if (
        event.code === "ArrowRight" &&
        rightCoord < windowWidth - marginOfError
      ) {
        setShift((prev) => {
          let newShift = prev - step;
          playerRef.current.style.right = `${newShift}%`;
          return newShift;
        });
      } else if (event.code === "ArrowLeft" && leftCoord > 0 + marginOfError) {
        setShift((prev) => {
          let newShift = prev + step;
          playerRef.current.style.right = `${newShift}%`;
          return newShift;
        });
      }
    });
  }, []);

  function onHandleStartGame() {
    console.log("Let's start");
  }

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
