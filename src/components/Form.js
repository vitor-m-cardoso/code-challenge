import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

  const handleClick = () => {
    handleDispatchHeightAndWidthWallCalc();
    handleDispatchDoorsAndWindowsArea();
  }

  return (
    <form>
      <h1 className="h2">Cálculo da área de pintura:</h1>
      <div>
        <section>
          <h2 className="h4">Primeira parede:</h2>
          <div>
            <Input
              label="Altura: "
              value={ firstHeightValue }
              setValue={ setFirstHeightValue }
            />
          </div>
          <div>
            <Input
              label="Largura: "
              value={ firstWidthValue }
              setValue={ setFirstWidthValue }
            />
          </div>
          <div>
            <h3 className="h5">Quantidade de portas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ firstWallQtyDoor }
              setValue={ setFirstWallQtyDoor }
            />
          </div>
          <div>
            <h3 className="h5">Quantidade de janelas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ firstWallQtyWindow }
              setValue={ setFirstWallQtyWindow }
            />
          </div>
        </section>

        <section>
          <h2 className="h4">Segunda parede:</h2>
          <div>
            <Input
              label="Altura: "
              value={ secondHeightValue }
              setValue={ setSecondHeightValue }
            />
          </div>
          <div>
            <Input
              label="Largura: "
              value={ secondWidthValue }
              setValue={ setSecondWidthValue }
            />
          </div>
          <div>
            <h3 className="h5">Quantidade de portas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ secondWallQtyDoor }
              setValue={ setSecondWallQtyDoor }
            />
          </div>
          <div>
          <h3 className="h5">Quantidade de janelas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ secondWallQtyWindow }
              setValue={ setSecondWallQtyWindow }
            />
          </div>
        </section>
      </div>
      <div>
        <section>
          <h2>Terceira parede:</h2>
          <div>
            <Input
              label="Altura: "
              value={ thirdHeightValue }
              setValue={ setThirdHeightValue }
            />
          </div>
          <div>
            <Input
              label="Largura: "
              value={ thirdWidthValue }
              setValue={ setThirdWidthValue }
            />
          </div>
          <div>
            <h3 className="h5">Quantidade de portas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ thirdWallQtyDoor }
              setValue={ setThirdWallQtyDoor }
            />
          </div>
          <div>
            <h3 className="h5">Quantidade de janelas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ thirdWallQtyWindow }
              setValue={ setThirdWallQtyWindow }
            />
          </div>
        </section>

        <section>
          <h2 className="h4">Quarta parede:</h2>
          <div>
            <Input
              label="Altura: "
              value={ fourthHeightValue }
              setValue={ setFourthHeightValue }
            />
          </div>
          <div>
            <Input
              label="Largura: "
              value={ fourthWidthValue }
              setValue={ setFourthWidthValue }
            />
          </div>
          <div>
            <h3 className="h5">Quantidade de portas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ fourthWallQtyDoor }
              setValue={ setFourthWallQtyDoor }
            />
          </div>
          <div>
            <h3 className="h5">Quantidade de janelas:</h3>
            <Radio
              options={["0", "1", "2", "3", "4", "5", "6"]}
              value={ fourthWallQtyWindow }
              setValue={ setFourthWallQtyWindow }
            />
          </div>
        </section>
      </div>
      <section>
        <h2 className="h4">Selecione o tamanho da lata de tinta que será utilizada:</h2>
        <Radio
          options={["0,5 L", "2,5 L", "3,6 L", "18 L"]}
          value={ selectedPaintValue }
          setValue={ setSelectedPaintValue }
        />
      </section>
      <section>
        <button
          type="button"
          onClick={ () => handleClick() }
        >
          Calcular
        </button>
      </section>
    </form>
  );
};
