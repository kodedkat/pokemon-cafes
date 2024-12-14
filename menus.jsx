import React from 'react';

const menuItems = {
  'Meowth House': ['Meowth Mocha', 'Purrfect Pastry', 'Whisker Waffle'],
  'Skitty House': ['Skitty Smoothie', 'Delcatty Donut', 'Kitty Kebab'],
  'Purrloin House': ['Purrloin Pancake', 'Liepard Latte', 'Feline Frappé'],
};

function Menu({ houseName }) {
  return (
    <div className="menu">
      <h3>{houseName} Menu</h3>
      <ul>
        {menuItems[houseName].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;