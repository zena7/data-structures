import { useEffect, useState, useRef } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import * as classes from "./App.css";
// import cryingDog from "./assets/cryingDog.png";
// import happyDog from "./assets/happyDog.png";
// import mainDog from "./assets/mainDog.png";
import { DogPlayer } from "./dogPlayer/dogPlayer";
function App() {
  const windowWidth = window.innerWidth;

  // const [food, setfood] = useState([]);
  // const [shift, setShift] = useState(0);
  const [leftСoordinate, setLeftСoordinate] = useState(0);
  const [rightСoordinate, setRightСoordinate] = useState(0);

  const [score, setScore] = useState(0);
  const foodRef = useRef(null);
  // const marginOfError = 10;

  function setCoordinates(value, direction) {
    if (direction === "left") {
      setLeftСoordinate(value);
    } else {
      setRightСoordinate(value);
      console.log("This value from APP", rightСoordinate);
    }
  }

  // useEffect(
  //   () => console.log("LEFT:", leftСoordinate, "RIGHT:", rightСoordinate),
  //   [leftСoordinate, rightСoordinate]
  // );

  const windowHeight = window.innerHeight;
  console.log("Height window is", windowHeight);
  // const windowWidth = window.innerWidth;

  // function getRandom(min = 0, max = 1) {
  //   return Math.round((Math.random() * (max - min) + min) * 10);
  // }

  // function onHandleStartGame() {
  //   console.log("Let's start");
  // }
  // useEffect(() => {
  //   let rightCoordOfFood = foodRef.current.getBoundingClientRect().right;
  //   // console.log("food right:", rightCoordOfFood);

  //   let idInterval = setInterval(() => {
  //     let topCoordOfFood = foodRef.current.getBoundingClientRect().top;
  //     console.log("IN INTERVAL", topCoordOfFood, rightСoordinate);
  //     if (topCoordOfFood >= 570) {
  //       console.log("food:", rightCoordOfFood, "dog:", rightСoordinate);
  //     }
  //   }, 1500);

  //   setTimeout(() => {
  //     clearInterval(idInterval);
  //     console.log("CLEAR");
  //   }, 3000);
  // });

  return (
    <>
      <div className='scoreContainer'>
        <p>Score {score}</p>
      </div>
      <div
        className={`${classes.food} ${classes.healthyFood}`}
        ref={foodRef}></div>
      <div className='food dangerFood'></div>
      {/* <button onClick={onHandleStartGame}>Start game</button> */}
      <DogPlayer windowWidth={windowWidth} setCoordinates={setCoordinates} />
    </>
  );
}

export default App;
