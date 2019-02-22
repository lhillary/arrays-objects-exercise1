const characters = [{name: 'P1', health: 15},{name: 'P2', health: 13}, {name: 'P3', health: 12}];
const opponent = {name: 'Bad Guy', health: 50};
const validResponses = ['1', '2', '3'];
const getDamage = () => Math.floor(Math.random() * 5);
let response;
while(true) {
  for (const character of characters) {
    console.log(`${character.name} has ${character.health} left.`);
  }
  console.log(`${opponent.name} has ${opponent.health} left.`);

    if (opponent.health < 0) {
        console.log('Game is over. You win the game!');
        break;
    } 
    if (characters.every((character) => character.health <= 0)) {
        console.log(`Game is over. ${opponent.name} won the game!`);
        break;
    }
  response = prompt('Pick a character to play: 1, 2, or 3');
    if (response === null) {
        console.log('Too Bad!')
        break;
    } 
    if (!validResponses.includes(response)) {
        continue;
    }
  const index = parseInt(response) - 1;
  if (characters[index].health > 0) {
        opponent.health -= getDamage();
        characters[index].health -= getDamage();
    } else {
        console.log(`${characters[index].name} is dead and not available for battle.`)
    }
}