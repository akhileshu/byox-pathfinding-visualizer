import { Coord, GridCell, printGrid } from "./grid";

export function getNeighbors(
  grid: GridCell[][],
  row: number,
  col: number,
  allowDiagonals = false,
): Coord[] {
  console.log(printGrid(grid));
  // AI-assisted: isCordInRange/isWall use Coord; point holds orthogonal and diagonal neighbors.
  function isCordInRange({ row, col }: Coord): boolean {
    return (
      row >= 0 && row <= grid.length && col >= 0 && col <= grid[row].length
    );
  }
  function isWall({ row, col }: Coord): boolean {
    return grid[row][col].type == "wall";
  }
  //    function isCornerCuttignSqueeze(
  //      p: { row: number; col: number },
  //      n: { row: number; col: number },
  //    ): boolean {
  //      return !(isWall(p.row-1, p.col) && isWall(p.row+1, p.col));
  //    }
  const point = {
    west: {
      col: col - 1,
      row,
    },
    east: {
      col: col + 1,
      row,
    },
    north: {
      col,
      row: row - 1,
    },
    south: {
      col,
      row: row + 1,
    },
    nw: { row: row - 1, col: col - 1 },
    ne: { row: row - 1, col: col + 1 },
    sw: { row: row + 1, col: col - 1 },
    se: { row: row + 1, col: col + 1 },
  };
  let nbrs: Coord[] = [];
  if (isCordInRange(point.north) && !isWall(point.north)) nbrs.push(point.north);
  if (isCordInRange(point.south) && !isWall(point.south)) nbrs.push(point.south);
  if (isCordInRange(point.west) && !isWall(point.west)) nbrs.push(point.west);
  if (isCordInRange(point.east) && !isWall(point.east))
    nbrs.push(point.east);

  if (allowDiagonals) {
    if (isCordInRange(point.nw) && !isWall(point.nw))
      if (!(isWall(point.north) && isWall(point.west))) nbrs.push(point.nw);
    if (isCordInRange(point.se) && !isWall(point.se))
      if (!(isWall(point.south) && isWall(point.east))) nbrs.push(point.se);
    if (isCordInRange(point.sw) && !isWall(point.sw))
      if (!(isWall(point.south) && isWall(point.west))) nbrs.push(point.sw);
    if (isCordInRange(point.ne) && !isWall(point.ne)) {
      if (!(isWall(point.north) && isWall(point.east))) nbrs.push(point.ne);
    }
  }

  return nbrs;
}
