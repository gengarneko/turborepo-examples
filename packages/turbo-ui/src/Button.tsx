import * as React from 'react';
import { ButtonChild } from 'turbo-ui-child';
import { foo } from 'turbo-lib';

// * --------------------------------------------------------------------------- comp

export const Button = () => {
  return (
    <div>
      <button>this is react component --</button>
      <ButtonChild />
      <button>turbo library: {foo}</button>
    </div>
  );
};
