import React from 'react';
import avatar from '/image/user.jpg';

export default function Header(props) {
  

  return (
    <header>
      <img src={avatar} />
      <p>{props.username}</p>
    </header>
  );
}
