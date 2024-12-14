function isNearHouse(character, house) {
  const distance = Math.sqrt(
    Math.pow(character.x - house.x, 2) + Math.pow(character.y - house.y, 2)
  );
  return distance < 50; // Adjust this value based on your game's scale
}