import React from 'react';
import Count from './components/Count';

export default function App() {
  
  const [count, setCount] = React.useState(0);
  
  function add() {
    setCount(prevCount => prevCount + 1);
  }
  function minus() {
    setCount(prevCount => {
        return prevCount-1 < 0 ? 0 : prevCount - 1;
    });
  }
  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button onClick={minus} className="minus" aria-label="Decrease count">
          –
        </button>
        
        <Count count={count}/>

        <button onClick={add} className="plus" aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  )
}

// const [isGoingOut, setIsGoingOut] = React.useState(true);

// function changeMind() {
//   setIsGoingOut((prev) => !prev);
// }

// return (
//   <main>
//     <h1 className="title">Do I feel like going out tonight?</h1>
//     <button
//       onClick={changeMind}
//       className="value"
//       aria-label={`Current answer is ${isGoingOut ? 'Yes' : 'No'}. Click to change it.`}
//     >
//       {isGoingOut ? 'Yes' : 'No'}
//     </button>
//   </main>
// );