import { useState, useRef } from 'react';

import './App.css';
import Dropdown from './components/Dropdown';
import Backdrop from './components/Backdrop';

function App() {
  const items = [
    { itemId: 'cb1', itemName: 'item 1' },
    { itemId: 'cb2', itemName: 'item 2' },
    { itemId: 'cb3', itemName: 'item 3' }
  ];

  const [isDrop, setIsDrop] = useState(false);

  const inputRef = useRef();

  const handleDrop = () => {
    setIsDrop(!isDrop);
    // isDrop && inputRef.current.focus();
  }

  return (
    <div className="App">
      <h1>Dropdown</h1>
      <Dropdown items={items} isDrop={isDrop} onDrop={handleDrop} onHide={handleDrop} />
      <Backdrop isDrop={isDrop} onHide={handleDrop} />
    </div>
  );
}

export default App;
