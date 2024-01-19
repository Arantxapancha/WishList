import React from 'react';

const wishes = [
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
  return (
    <div>
      <h1>My wishlist</h1>
      <fieldset>
        <legend>New Wish:</legend>
        <input type="text" placeholder="My New Wish" />
      </fieldset>

      <ul>
        {wishes.map((wish) => (
          <li key={wish.id}>
            <input type="checkbox" checked={wish.completed} id={wish.id} />
            <label htmlFor={wish.id}>{wish.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
