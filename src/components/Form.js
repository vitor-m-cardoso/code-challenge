import React, { useState } from 'react';

import Input from './Input';

export default function Form() {
  const [firstHeightValue, setFirstHeightValue] = useState(2.20);

  const [firstWidthValue, setFirstWidthValue] = useState(1);

  return (
    <form>
      <h1 className="h2">Cálculo da área de pintura:</h1>
      <div>
        <section>
          <h2>Primeira parede:</h2>
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
        </section>
      </div>
    </form>
  );
};
