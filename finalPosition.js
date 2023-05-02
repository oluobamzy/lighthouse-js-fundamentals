const finalPosition = function (moves) {
  let finalPos = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      y = y + 1;
    }
    else if (moves[i] === "south") {
      y = y - 1;
    }
    else if (moves[i] === "west") {
      x = x - 1;
    }
    else if (moves[i] === "east") {
      x = x + 1;
    }
  }
  finalPos.push(x, y);
  return finalPos;
}
console.log(finalPosition(['north', 'north', 'west', 'west', 'north', 'east', 'north']))