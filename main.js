function getKnightMoves(x, y) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const validMoves = [];

  for (const [dx, dy] of moves) {
    const newX = x + dx;
    const newY = y + dy;

    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      validMoves.push([newX, newY]);
    }
  }

  return validMoves;
}

function knightCanReach(start, target) {
  const queue = [start];
  const visited = new Set();

  visited.add(start.toString());

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (x === target[0] && y === target[1]) {
      return true;
    }

    const moves = getKnightMoves(x, y);

    for (const move of moves) {
      const key = move.toString();

      if (!visited.has(key)) {
        visited.add(key);
        queue.push(move);
      }
    }
  }

  return false;
}

console.log(knightCanReach([0, 0], [7, 7]));
