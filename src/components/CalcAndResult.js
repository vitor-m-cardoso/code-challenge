import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  firstDoorIsValid,
  secondDoorIsValid,
  thirdDoorIsValid,
  fourthDoorIsValid,
  firstWindowIsValid,
  secondWindowIsValid,
  thirdWindowIsValid,
  fourthWindowIsValid,
} from '../redux/actions/isValidAreaActions';

export default function CalcAndResult() {
  const firstWallArea = useSelector((state) => state.wallsReducer.firstWall);
  const secondWallArea = useSelector((state) => state.wallsReducer.secondWall);
  const thirdWallArea = useSelector((state) => state.wallsReducer.thirdWall);
  const fourthWallArea = useSelector((state) => state.wallsReducer.fourthWall);
  
  const firstDoorArea = useSelector((state) => state.doorsAndWindowsReducer.firstWall.areaDoorNum);
  const secondDoorArea = useSelector((state) => state.doorsAndWindowsReducer.secondWall.areaDoorNum);
  const thirdDoorArea = useSelector((state) => state.doorsAndWindowsReducer.thirdWall.areaDoorNum);
  const fourthDoorArea = useSelector((state) => state.doorsAndWindowsReducer.fourthWall.areaDoorNum);
  
  const firstWindowArea = useSelector((state) => state.doorsAndWindowsReducer.firstWall.areaWindowNum);
  const secondWindowArea = useSelector((state) => state.doorsAndWindowsReducer.secondWall.areaWindowNum);
  const thirdWindowArea = useSelector((state) => state.doorsAndWindowsReducer.thirdWall.areaWindowNum);
  const fourthWindowArea = useSelector((state) => state.doorsAndWindowsReducer.fourthWall.areaWindowNum);
  
  const selectedPaint = useSelector((state) => state.selectedPaintReducer.selectedPaint);

  const maxDoorAndWindowFirstArea = (parseFloat(firstWallArea) / 2).toFixed(2);
  const maxDoorAndWindowSecondArea = (parseFloat(secondWallArea) / 2).toFixed(2);
  const maxDoorAndWindowThirdArea = (parseFloat(thirdWallArea) / 2).toFixed(2);
  const maxDoorAndWindowFourthArea = (parseFloat(fourthWallArea) / 2).toFixed(2);

  const dispatch = useDispatch();

  const calcFirstArea = () => {
    let result;

    if (parseFloat(firstDoorArea) > parseFloat(maxDoorAndWindowFirstArea)) {
      dispatch(firstDoorIsValid(false));
      result = 0;
    };
    if (parseFloat(firstWindowArea) > parseFloat(maxDoorAndWindowFirstArea)) {
      dispatch(firstWindowIsValid(false));
      result = 0;
    };
    if (parseFloat(firstDoorArea) < parseFloat(maxDoorAndWindowFirstArea) && parseFloat(firstWindowArea) < parseFloat(maxDoorAndWindowFirstArea)) {
      dispatch(firstDoorIsValid(true));
      dispatch(firstWindowIsValid(true));
      result = (parseFloat(firstWallArea) - (parseFloat(firstDoorArea) + parseFloat(firstWindowArea))).toFixed(2);
    };
    return result;
  };

  const calcSecondArea = () => {
    let result;

    if (parseFloat(secondDoorArea) > parseFloat(maxDoorAndWindowSecondArea)) {
      dispatch(secondDoorIsValid(false));
      result = 0;
    };
    if (parseFloat(secondWindowArea) > parseFloat(maxDoorAndWindowSecondArea)) {
      dispatch(secondWindowIsValid(false));
      result = 0;
    };
    if (parseFloat(secondDoorArea) < parseFloat(maxDoorAndWindowSecondArea) && parseFloat(secondWindowArea) < parseFloat(maxDoorAndWindowSecondArea)) {
      dispatch(secondDoorIsValid(true));
      dispatch(secondWindowIsValid(true));
      result = (parseFloat(secondWallArea) - (parseFloat(secondDoorArea) + parseFloat(secondWindowArea))).toFixed(2);
    };
    return result;
  };

  const calcThirdArea = () => {
    let result;

    if (parseFloat(thirdDoorArea) > parseFloat(maxDoorAndWindowThirdArea)) {
      dispatch(thirdDoorIsValid(false));
      result = 0;
    };
    if (parseFloat(thirdWindowArea) > parseFloat(maxDoorAndWindowThirdArea)) {
      dispatch(thirdWindowIsValid(false));
      result = 0;
    };
    if (parseFloat(thirdDoorArea) < parseFloat(maxDoorAndWindowThirdArea) && parseFloat(thirdWindowArea) < parseFloat(maxDoorAndWindowThirdArea)) {
      dispatch(thirdDoorIsValid(true));
      dispatch(thirdWindowIsValid(true));
      result = (parseFloat(thirdWallArea) - (parseFloat(thirdDoorArea) + parseFloat(thirdWindowArea))).toFixed(2);
    };
    return result;
  };

  const calcFourthArea = () => {
    let result;

    if (parseFloat(fourthDoorArea) > parseFloat(maxDoorAndWindowFourthArea)) {
      dispatch(fourthDoorIsValid(false));
      result = 0;
    };
    if (parseFloat(fourthWindowArea) > parseFloat(maxDoorAndWindowFourthArea)) {
      dispatch(fourthWindowIsValid(false));
      result = 0;
    };
    if (parseFloat(fourthDoorArea) < parseFloat(maxDoorAndWindowFourthArea) && parseFloat(fourthWindowArea) < parseFloat(maxDoorAndWindowFourthArea)) {
      dispatch(fourthDoorIsValid(true));
      dispatch(fourthWindowIsValid(true));
      result = (parseFloat(fourthWallArea) - (parseFloat(fourthDoorArea) + parseFloat(fourthWindowArea))).toFixed(2);
    };
    return result;
  };

  const handleCalcTotalArea = () => {
    const result = (parseFloat(calcFirstArea()) + parseFloat(calcSecondArea()) + parseFloat(calcThirdArea()) + parseFloat(calcFourthArea())).toFixed(2);

    return result;
  };

  const handleCalcPaintVolume = () => {
    const result = (parseFloat(handleCalcTotalArea()) / 5).toFixed(2);

    return result;
  }

  const handleCalcPaintResult = () => {
    switch (true) {
      case selectedPaint === "0,5 L":
        return (parseFloat(handleCalcPaintVolume()) / 0.5).toFixed(2);
      case selectedPaint === "2,5 L":
        return (parseFloat(handleCalcPaintVolume()) / 2.5).toFixed(2);
      case selectedPaint === "3,6 L":
        return (parseFloat(handleCalcPaintVolume()) / 3.6).toFixed(2);
      case selectedPaint === "18 L":
        return (parseFloat(handleCalcPaintVolume()) / 18).toFixed(2);
      default:
        return "0";
    };
  };

  return (
    <section>
      <h1 className="h2">Resultado:</h1>
    </section>
  )
}