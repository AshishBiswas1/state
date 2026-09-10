import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {
    const [userName, setUserName] = React.useState('Joe');
  return (
    <main>
      <Header username={userName}/>
      <Body username={userName} />
    </main>
  );
}
