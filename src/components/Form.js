import React, { useState } from 'react';

import Input from './Input';
import Radio from './Radio';

export default function Form() {
  const [firstHeightValue, setFirstHeightValue] = useState(2.20);

  const [firstWidthValue, setFirstWidthValue] = useState(1);

  const [firstWallQtyDoor, setFirstWallQtyDoor] = useState("0");

  const [firstWallQtyWindow, setFirstWallQtyWindow] = useState("0");

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
      </div>
    </form>
  );
};
