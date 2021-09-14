import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  firstWallHeightAndWidth,
  secondWallHeightAndWidth,
  thirdWallHeightAndWidth,
  fourthWallHeightAndWidth,
} from '../redux/actions/wallHeightAndWidthActions';

import {
  firstDoorAndWindowArea,
  secondDoorAndWindowArea,
  thirdDoorAndWindowArea,
  fourthDoorAndWindowArea,
} from '../redux/actions/doorsAndWindowsActions';

import {
  selectedPaint
} from '../redux/actions/selectedPaintAction';

import Input from './Input';
import Radio from './Radio';

export default function Form() {
  const [firstHeightValue, setFirstHeightValue] = useState(2.20);
  const [secondHeightValue, setSecondHeightValue] = useState(2.20);
  const [thirdHeightValue, setThirdHeightValue] = useState(2.20);
  const [fourthHeightValue, setFourthHeightValue] = useState(2.20);

  const [firstWidthValue, setFirstWidthValue] = useState(1);
  const [secondWidthValue, setSecondWidthValue] = useState(1);
  const [thirdWidthValue, setThirdWidthValue] = useState(1);
  const [fourthWidthValue, setFourthWidthValue] = useState(1);

  const [firstWallQtyDoor, setFirstWallQtyDoor] = useState("0");
  const [secondWallQtyDoor, setSecondWallQtyDoor] = useState("0");
  const [thirdWallQtyDoor, setThirdWallQtyDoor] = useState("0");
  const [fourthWallQtyDoor, setFourthWallQtyDoor] = useState("0");

  const [firstWallQtyWindow, setFirstWallQtyWindow] = useState("0");
  const [secondWallQtyWindow, setSecondWallQtyWindow] = useState("0");
  const [thirdWallQtyWindow, setThirdWallQtyWindow] = useState("0");
  const [fourthWallQtyWindow, setFourthWallQtyWindow] = useState("0");

  const [selectedPaintValue, setSelectedPaintValue] = useState("0,5 L");

  const dispatch = useDispatch();

  const firstDoorAreaIsValid = useSelector((state) => state.isValidAreaReducer.doors.first);
  const secondDoorAreaIsValid = useSelector((state) => state.isValidAreaReducer.doors.second);
  const thirdDoorAreaIsValid = useSelector((state) => state.isValidAreaReducer.doors.third);
  const fourthDoorAreaIsValid = useSelector((state) => state.isValidAreaReducer.doors.fourth);

  const firstWindowAreaIsValid = useSelector((state) => state.isValidAreaReducer.windows.first);
  const secondWindowAreaIsValid = useSelector((state) => state.isValidAreaReducer.windows.second);
  const thirdWindowAreaIsValid = useSelector((state) => state.isValidAreaReducer.windows.third);
  const fourthWindowAreaIsValid = useSelector((state) => state.isValidAreaReducer.windows.fourth);

  const minHeight = 2.20;
  const minWidth = 1;
  const maxWidth = 15;

  if (firstHeightValue < minHeight) {
    setFirstHeightValue(minHeight);
  } else if (firstWidthValue < minWidth) {
    setFirstWidthValue(minWidth);
  } else if (firstWidthValue > maxWidth) {
    setFirstWidthValue(maxWidth);
  };

  if (secondHeightValue < minHeight) {
    setSecondHeightValue(minHeight);
  } else if (secondWidthValue < minWidth) {
    setSecondWidthValue(minWidth);
  } else if (secondWidthValue > maxWidth) {
    setSecondWidthValue(maxWidth);
  };

  if (thirdHeightValue < minHeight) {
    setThirdHeightValue(minHeight);
  } else if (thirdWidthValue < minWidth) {
    setThirdWidthValue(minWidth);
  } else if (thirdWidthValue > maxWidth) {
    setThirdWidthValue(maxWidth);
  };

  if (fourthHeightValue < minHeight) {
    setFourthHeightValue(minHeight);
  } else if (fourthWidthValue < minWidth) {
    setFourthWidthValue(minWidth);
  } else if (fourthWidthValue > maxWidth) {
    setFourthWidthValue(maxWidth);
  };

  const handleDispatchHeightAndWidthWallCalc = () => {
    if (firstHeightValue && firstWidthValue) {
      dispatch(firstWallHeightAndWidth(firstHeightValue, firstWidthValue));
    };
    if (secondHeightValue && secondWidthValue) {
      dispatch(secondWallHeightAndWidth(secondHeightValue, secondWidthValue));
    };
    if (thirdHeightValue && thirdWidthValue) {
      dispatch(thirdWallHeightAndWidth(thirdHeightValue, thirdWidthValue));
    };
    if (fourthHeightValue && fourthWidthValue) {
      dispatch(fourthWallHeightAndWidth(fourthHeightValue, fourthWidthValue));
    };
  };

  const handleDispatchDoorsAndWindowsArea = () => {
    if (firstWallQtyDoor && firstWallQtyWindow) {
      dispatch(firstDoorAndWindowArea(firstWallQtyDoor, firstWallQtyWindow));
    };
    if (secondWallQtyDoor && secondWallQtyWindow) {
      dispatch(secondDoorAndWindowArea(secondWallQtyDoor, secondWallQtyWindow));
    };
    if (thirdWallQtyDoor && thirdWallQtyWindow) {
      dispatch(thirdDoorAndWindowArea(thirdWallQtyDoor, thirdWallQtyWindow));
    };
    if (fourthWallQtyDoor && fourthWallQtyWindow) {
      dispatch(fourthDoorAndWindowArea(fourthWallQtyDoor, fourthWallQtyWindow));
    };
  };

  const handleDispatchSelectedPaint = () => {
    if (selectedPaintValue) {
      dispatch(selectedPaint(selectedPaintValue));
    };
  };

  const handleClick = () => {
    handleDispatchHeightAndWidthWallCalc();
    handleDispatchDoorsAndWindowsArea();
    handleDispatchSelectedPaint();
  };

  return (
    <form className="d-flex flex-column align-items-center">
      <h1 className="h2">Cálculo da área de pintura:</h1>
      <div className="d-flex">
        <section className="m-4 my-3 col-12 col-md-5 border rounded bg-light bg-gradient box-shadow p-3">
          <h2 className="h4">Primeira parede:</h2>
          <div>
            <Input
              label="Altura: "
              value={ firstHeightValue }
              setValue={ setFirstHeightValue }
              className="w-100 mb-2"
            />
          </div>
          <div>
            <Input
              label="Largura: "
              value={ firstWidthValue }
              setValue={ setFirstWidthValue }
              className="w-100 mb-3"
            />
          </div>
          <div>
            <h3 className="h5 mb-0">Quantidade de portas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ firstWallQtyDoor }
              setValue={ setFirstWallQtyDoor }
              className="m-1 mb-3"
            />
            { firstDoorAreaIsValid ? '' : (
              <p className="h6 text-danger mb-4">
                Área total das portas excede a metade da área total da parede, por favor, preencha novamente.
              </p>
            ) }
          </div>
          <div>
            <h3 className="h5 mb-0">Quantidade de janelas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ firstWallQtyWindow }
              setValue={ setFirstWallQtyWindow }
              className="m-1 mb-3"
            />
            { firstWindowAreaIsValid ? '' : (
              <p className="h6 text-danger mb-4">
                Área total das janelas excede a metade da área total da parede, por favor, preencha novamente.
              </p>
            ) }
          </div>
        </section>
        <section className="m-4 my-3 col-12 col-md-5 border rounded bg-light bg-gradient box-shadow p-3">
          <h2 className="h4">Segunda parede:</h2>
          <div>
            <Input
              label="Altura: "
              value={ secondHeightValue }
              setValue={ setSecondHeightValue }
              className="w-100 mb-2"
            />
          </div>
          <div>
            <Input
              label="Largura: "
              value={ secondWidthValue }
              setValue={ setSecondWidthValue }
              className="w-100 mb-3"
            />
          </div>
          <div>
            <h3 className="h5 mb-0">Quantidade de portas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ secondWallQtyDoor }
              setValue={ setSecondWallQtyDoor }
              className="m-1 mb-3"
            />
            { secondDoorAreaIsValid ? '' : (
              <p className="h6 text-danger mb-4">
                Área total das portas excede a metade da área total da parede, por favor, preencha novamente.
              </p>
            ) }
          </div>
          <div>
          <h3 className="h5 mb-0">Quantidade de janelas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ secondWallQtyWindow }
              setValue={ setSecondWallQtyWindow }
              className="m-1 mb-3"
            />
            { secondWindowAreaIsValid ? '' : (
              <p className="h6 text-danger">
                Área total das janelas excede a metade da área total da parede, por favor, preencha novamente.
              </p>
            ) }
          </div>
        </section>
      </div>
      <div className="d-flex">
        <section className="m-4 my-3 col-12 col-md-5 border rounded bg-light bg-gradient box-shadow p-3">
          <h2 className="h4">Terceira parede:</h2>
          <div>
            <Input
              label="Altura: "
              value={ thirdHeightValue }
              setValue={ setThirdHeightValue }
              className="w-100 mb-2"
            />
          </div>
          <div>
            <Input
              label="Largura: "
              value={ thirdWidthValue }
              setValue={ setThirdWidthValue }
              className="w-100 mb-3"
            />
          </div>
          <div>
            <h3 className="h5 mb-0">Quantidade de portas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ thirdWallQtyDoor }
              setValue={ setThirdWallQtyDoor }
              className="m-1 mb-3"
            />
            { thirdDoorAreaIsValid ? '' : (
              <p className="h6 text-danger mb-4">
                Área total das portas excede a metade da área total da parede, por favor, preencha novamente.
              </p>
            ) }
          </div>
          <div>
            <h3 className="h5 mb-0">Quantidade de janelas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ thirdWallQtyWindow }
              setValue={ setThirdWallQtyWindow }
              className="m-1 mb-3"
            />
            { thirdWindowAreaIsValid ? '' : (
              <p className="h6 text-danger mb-4">
                Área total das janelas excede a metade da área total da parede, por favor, preencha novamente.
              </p>
            ) }
          </div>
        </section>
        <section className="m-4 my-3 col-12 col-md-5 border rounded bg-light bg-gradient box-shadow p-3">
          <h2 className="h4">Quarta parede:</h2>
          <div>
            <Input
              label="Altura: "
              value={ fourthHeightValue }
              setValue={ setFourthHeightValue }
              className="w-100 mb-2"
            />
          </div>
          <div>
            <Input
              label="Largura: "
              value={ fourthWidthValue }
              setValue={ setFourthWidthValue }
              className="w-100 mb-3"
            />
          </div>
          <div>
            <h3 className="h5 mb-0">Quantidade de portas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ fourthWallQtyDoor }
              setValue={ setFourthWallQtyDoor }
              className="m-1 mb-3"
            />
            { fourthDoorAreaIsValid ? '' : (
              <p className="h6 text-danger mb-4">
                Área total das portas excede a metade da área total da parede, por favor, preencha novamente.
              </p>
            ) }
          </div>
          <div>
            <h3 className="h5 mb-0">Quantidade de janelas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ fourthWallQtyWindow }
              setValue={ setFourthWallQtyWindow }
              className="m-1 mb-3"
            />
            { fourthWindowAreaIsValid ? '' : (
              <p className="h6 text-danger mb-4">
                Área total das janelas excede a metade da área total da parede, por favor, preencha novamente.
              </p>
            ) }
          </div>
        </section>
      </div>
      <section className="m-2 col-12 col-md-8 border rounded bg-light bg-gradient box-shadow p-3">
        <h2 className="h4">Selecione o tamanho da lata de tinta que será utilizada:</h2>
        <Radio
          options={["0,5 L", "2,5 L", "3,6 L", "18 L"]}
          value={ selectedPaintValue }
          setValue={ setSelectedPaintValue }
          className="m-1"
        />
      </section>
      <section>
        <button
          type="button"
          onClick={ () => handleClick() }
          className="btn btn-success mb-3 px-5"
        >
          Calcular
        </button>
      </section>
    </form>
  );
};
