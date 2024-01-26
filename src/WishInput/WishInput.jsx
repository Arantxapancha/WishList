import React, { useState } from 'react';
import PropTypes from 'prop-types';

// se puede poner en vez de onNewWish props y en la linea  14*
export default function WishInput({ onNewWish }) {
  const [newWish, setNewWish] = useState('');

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && newWish.length > 0) { // en vez del .length se puede poner newWish !== ' '
      const newWishObject = {
        id: Date.now(),
        text: newWish,
        completed: false,
      };
      // insert a new wish object in the wishes array of the father component
      onNewWish(newWishObject);
      setNewWish(''); // cuando haya algo en la caja de texto y das a enter te vacía la caja
      // aqui props.onNewWish y ya el 'parentesis eso si se hace de la otra forma
    }
  };
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New Wish:</legend>
      <input
        type="text"
        placeholder="My New Wish"
        onChange={(e) => setNewWish(e.target.value)} // onchange tiene que definir una función
        value={newWish}
        onKeyUp={handleKeyUp} // onkeyup tiene que definir una función
      />
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func.isRequired,
};
