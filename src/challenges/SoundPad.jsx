import { useState } from 'react';
import pads from './pads';
import Pad from './components/Pad';

export default function App() {
  const [padsId, setPads] = useState(pads);

  function toggle(id) {
    setPads((prevPad) =>
      prevPad.map((pad) => {
        return pad.id === id ? { ...pad, on: !pad.on } : pad;
      })
    );
  }

  const buttonEl = padsId.map((pad) => {
    return (
      <Pad
        key={pad.id}
        id={pad.id}
        color={pad.color}
        on={pad.on}
        toggle={toggle}
      />
    );
  });

  return (
    <main>
      <div className="pad-container">{buttonEl}</div>
    </main>
  );
}
