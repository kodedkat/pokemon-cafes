const MemoizedCharacter = React.memo(Character);

const houses = [
  { name: 'Meowth House', pokemon: 'Meowth', x: 100, y: 100 },
  { name: 'Skitty House', pokemon: 'Skitty', x: 300, y: 100 },
  { name: 'Purrloin House', pokemon: 'Purrloin', x: 200, y: 300 },
];

const handleInteract = useCallback((house) => {
  enterHouse(house.name);
}, [enterHouse]);

const HouseComponent = React.memo(({ house }) => (
  <div
    style={{
      position: 'absolute',
      left: house.x,
      top: house.y,
      width: '50px',
      height: '50px',
      backgroundColor: 'brown',
    }}
  >
    {house.name}
  </div>
));