import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

// Function to check if the character is near a house
function isNearHouse(character, house) {
  const distance = Math.sqrt(
    Math.pow(character.x - house.x, 2) + Math.pow(character.y - house.y, 2)
  );
  return distance < 50; // Adjust this value based on your game's scale
}

function Character({ position, houses, onInteract }) {
  const [{ x, y }, setPosition] = useSpring(() => ({ x: position.x, y: position.y }));

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setPosition({ x, y: y.get() - 10 });
          break;
        case 'ArrowDown':
          setPosition({ x, y: y.get() + 10 });
          break;
        case 'ArrowLeft':
          setPosition({ x: x.get() - 10, y });
          break;
        case 'ArrowRight':
          setPosition({ x: x.get() + 10, y });
          break;
        case 'Enter':
          const nearbyHouse = houses.find(house => isNearHouse({ x: x.get(), y: y.get() }, house));
          if (nearbyHouse) {
            onInteract(nearbyHouse);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [x, y, houses, onInteract]);

  return (
    <animated.div
      style={{
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: props => `translate(${props.x}px, ${props.y}px)`
      }}
    />
  );
}

export default Character;