import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

export default function WishList({ wishes, setWishes }) {
  /* const onCompletedChange = (checked, i){
    const tempWishes = [...wishes];         //esto es otra manera de hacerlo
    tempWishes[i].completed = checked;
    setWishes(tempWishes);
  }
  */
  return (
    <ul className="wish-list">
      {wishes.map((wish, i) => (
        <WishItem
          key={wish.id}
          wish={wish}
          onCompletedChange={(checked) => {
            // onCompletedChange(checked, i); esto si se pusiera de la manera de arriba
            const tempWishes = [...wishes]; // esto se borraría, porque estaría arriba
            tempWishes[i].completed = checked; // esto se borraría, porque estaría arriba
            setWishes(tempWishes); // esto se borraría, porque estaría arriba
          }}
        />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  })),
  setWishes: PropTypes.func, // si pusiera.isRequired abajo no hace falta poner nada
};

WishList.defaultProps = {
  wishes: [],
  setWishes: () => { }, // si pusiera isRequired arriba esto no haría falta
};
