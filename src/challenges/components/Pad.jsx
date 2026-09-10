import { useState } from "react";

export default function Pad(props) {
  const classname = props.on ? "on" : null;

  const styles = {
    backgroundColor: props.color
  };

  return (
    <button 
      style={styles} 
      className={classname}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}
