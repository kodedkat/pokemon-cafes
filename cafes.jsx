import React, { useState } from 'react';
import Menu from './Menu';

function House({ houseName, exitHouse }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="house">
      <h2>{houseName}</h2>
      <button onClick={toggleMenu}>Toggle Menu</button>
      <button onClick={exitHouse}>Exit House</button>
      {showMenu && <Menu houseName={houseName} />}
    </div>
  );
}

export default House;