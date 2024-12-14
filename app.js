import React, { useState } from 'react';
import Map from './components/Map';
import House from './components/House';
import './App.css';

function App() {
  const [currentLocation, setCurrentLocation] = useState('map');
  const [currentHouse, setCurrentHouse] = useState(null);

  const enterHouse = (houseName) => {
    setCurrentLocation('house');
    setCurrentHouse(houseName);
  };

  const exitHouse = () => {
    setCurrentLocation('map');
    setCurrentHouse(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon Cat Café</h1>
      </header>
      <main>
        {currentLocation === 'map' ? (
          <Map enterHouse={enterHouse} />
        ) : (
          <House houseName={currentHouse} exitHouse={exitHouse} />
        )}
      </main>
      <footer className="App-footer">
        <p>Use arrow keys to move. Press Enter to interact with houses.</p>
      </footer>
    </div>
  );
}

export default App;