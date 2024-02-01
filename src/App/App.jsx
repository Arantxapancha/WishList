import React, { useState } from 'react';
import './App.css';
import WishList from '../WishList/WishList';
import WishInput from '../WishInput/WishInput';

const initialWishes = [
  {
    id: 0,
    text: 'Travel to Italy',
    completed: true,
  },

  {
    id: 1,
    text: 'Travel to Singapur',
    completed: false,
  },

  {
    id: 2,
    text: 'See a sunset in Santorini',
    completed: false,
  },
];

export default function App() {
  const [wishes, setWishes] = useState(initialWishes);
  const onNewWish = (newWish) => {
    setWishes((currentWishes) => [...currentWishes, newWish]);
  };

  return (
    <div className="app">
      <h1>My wishlist</h1>
      <WishInput onNewWish={onNewWish} />
      <WishList wishes={wishes} setWishes={setWishes} />
      <button type="button" className="wish-clear" onClick={() => setWishes(wishes.filter((wish) => !wish.completed))}>Archive Wishes</button>
    </div>
  );
}
