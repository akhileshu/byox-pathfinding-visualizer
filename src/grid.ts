type CellType = "empty" | "start" | "end" | "wall";

const cellTypeToSymbol: Record<CellType, string> = {
  empty: ".",
  start: "S",
  end: "E",
  wall: "#",
};
export interface Coord {
  row: number;
  col: number;
}
// AI-assisted: GridCell extends Coord instead of duplicating row/col fields.
export interface GridCell extends Coord {
  type: CellType;
}

const grid = createGrid(4, 5);
grid[0][0].type = "start";
grid[3][4].type = "end";
grid[1][1].type = "wall";
grid[1][2].type = "wall";
grid[2][2].type = "wall";

const testCreateAndPrintGrid = false;
if (testCreateAndPrintGrid) {
  console.log(printGrid(grid));
  console.log(printGrid(createGrid(2, 6)));
  console.log(printGrid(createGrid(0, 5)));
  console.log(printGrid(createGrid(1, 1)));
}
/*
S  .  .  .  . 
 .  #  #  .  . 
 .  .  #  .  . 
 .  .  .  .  E 

---
 .  .  .  .  .  . 
 .  .  .  .  .  . 

---

---
 . 

---

*/

export function printGrid(grid: GridCell[][]): string {
  let gridString = "";
  for (let ri = 0; ri < grid.length; ri++) {
    for (let ci = 0; ci < grid[ri].length; ci++) {
      const element =
        (gridString += ` ${cellTypeToSymbol[grid[ri][ci]?.type]} `);
    }
    gridString += "\n";
  }
  gridString += "\n---";
  return gridString;
}
export function createGrid(rows: number, cols: number): GridCell[][] {
  if (rows <= 0 || cols <= 0) return [];
  /**
 * Creates a 2D grid of size x by y filled with 0s.
 * Uses Array.from to generate a unique inner array for each row,
 * preventing shared-reference bugs when updating individual cells.
 * Creates a 2D grid of size x by y populated with [row, col] coordinate pairs.
 * Uses nested Array.from calls to access both row (i) and column (j) indices.

 */
  const grid: GridCell[][] = Array.from({ length: rows }, (_, ri) =>
    Array.from({ length: cols }, (_, ci) => ({
      row: ri,
      col: ci,
      type: "empty",
    })),
  );
  return grid;
}
