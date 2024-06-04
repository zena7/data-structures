import { useEffect, useRef, useState } from "react";
import cryingDog from "./assets/cryingDog.png";
import happyDog from "./assets/happyDog.png";
import mainDog from "./assets/mainDog.png";
import * as classes from "./dogPlayer.module.css";

export function DogPlayer({ windowWidth, setCoordinates }) {
  const [shift, setShift] = useState(0);
  const [isHappy, setIsHappy] = useState(false);
  const [isSad, setIsSad] = useState(false);
  const [rightCoord, setRightCoord] = useState(0);
  const [leftCoord, setLeftCoord] = useState(0);
  let topCoord = 0;
  const marginOfError = 10;

  const playerRef = useRef(null);

  const getCoordinate = (direction) => {
    if (direction === "left") {
      return playerRef.current.getBoundingClientRect().left;
    } else {
      return playerRef.current.getBoundingClientRect().right;
    }
  };
  useEffect(() => {
    setRightCoord(getCoordinate("right"));
    setCoordinates(rightCoord, "right");
    setRightCoord(getCoordinate("left"));
    topCoord = playerRef.current.getBoundingClientRect().top;
  }, []);

  useEffect(() => {
    console.log("Dog is top", topCoord);
  }, [topCoord]);

  useEffect(() => {
    // getCoordinate
    setRightCoord(getCoordinate("right"));

    document.addEventListener("keydown", function (event) {
      topCoord = playerRef.current.getBoundingClientRect().top;
      console.log("Dog is top", topCoord);

      let rightCoord = playerRef.current.getBoundingClientRect().right;
      setCoordinates(rightCoord, "right");
      let leftCoord = playerRef.current.getBoundingClientRect().left;
      setCoordinates(leftCoord, "left");

      const getShiftPlayer = (prev, directionOfMovement) => {
        const step = 4;
        let newShift =
          directionOfMovement === "ArrowRight" ? prev - step : prev + step;
        playerRef.current.style.right = `${newShift}%`;

        return newShift;
      };

      if (
        event.code === "ArrowRight" &&
        rightCoord < windowWidth - marginOfError
      ) {
        setShift((prev) => getShiftPlayer(prev, "ArrowRight"));
      } else if (event.code === "ArrowLeft" && leftCoord > 0 + marginOfError) {
        setShift((prev) => getShiftPlayer(prev, "ArrowLeft"));
      }
    });
  }, []);

  useEffect(() => {});

  // useEffect(() => {}, [isHappy, isSad]);

  return (
    <div className={`${classes.player}`} ref={playerRef}>
      <img
        src={mainDog}
        alt='iconOfMainDog'
        className={`${classes.mainDog} ${classes.showIconDog} ${
          isSad && classes.hideIconDog
        } ${isHappy && classes.hideIconDog}`}></img>
      <img
        src={happyDog}
        alt='iconOfHappyDog'
        className={`${!isHappy && classes.hideIconDog} `}></img>
      <img
        src={cryingDog}
        alt='iconOfCryingDog'
        className={`${!isSad && classes.hideIconDog}`}></img>
    </div>
  );
}
