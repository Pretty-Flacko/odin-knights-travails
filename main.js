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

function reconstructPath(parent, start, target) {
  const path = [];
  let current = target.toString();

  while (current !== start.toString()) {
    const [x, y] = current.split(",").map(Number);
    path.push([x, y]);
    current = parent[current];
  }

  path.push(start);

  return path.reverse();
}

function knightMoves(start, target) {
  const queue = [start];
  const visited = new Set();
  const parent = {};

  visited.add(start.toString());

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const currentKey = [x, y].toString();

    if (x === target[0] && y === target[1]) {
      const shortestPath = reconstructPath(parent, start, target);
      console.log(
        "You made it in",
        shortestPath.length - 1,
        "moves! Here's your path:",
      );
      console.log(shortestPath);
      return shortestPath;
    }

    const moves = getKnightMoves(x, y);

    for (const move of moves) {
      const key = move.toString();

      if (!visited.has(key)) {
        visited.add(key);
        queue.push(move);

        parent[key] = currentKey;
      }
    }
  }
}

knightMoves([3, 3], [4, 3]);
