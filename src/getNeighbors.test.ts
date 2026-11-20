import { describe, expect, test } from "bun:test";
import { getNeighbors } from "./getNeighbors";
import { createGrid, type Coord } from "./grid";

function coordKey({ row, col }: Coord): string {
  return `${row},${col}`;
}

function expectSameCoords(actual: Coord[], expected: Coord[]): void {
  expect(new Set(actual.map(coordKey))).toEqual(new Set(expected.map(coordKey)));
}

describe("getNeighbors roadmap scenarios", () => {
  test("scenario 1: top-left corner (allowDiagonals = false)", () => {
    const grid = createGrid(3, 3);
    expectSameCoords(getNeighbors(grid, 0, 0, false), [
      { row: 0, col: 1 },
      { row: 1, col: 0 },
    ]);
  });

  test("scenario 2: orthogonal wall block (allowDiagonals = false)", () => {
    const grid = createGrid(3, 3);
    grid[0]![1]!.type = "wall";
    grid[1]![0]!.type = "wall";
    expectSameCoords(getNeighbors(grid, 1, 1, false), [
      { row: 1, col: 2 },
      { row: 2, col: 1 },
    ]);
  });

  test("scenario 3: corner-cutting squeeze (allowDiagonals = true)", () => {
    const grid = createGrid(3, 3);
    grid[0]![1]!.type = "wall";
    grid[1]![2]!.type = "wall";
    const neighbors = getNeighbors(grid, 1, 1, true);
    expectSameCoords(neighbors, [
      { row: 0, col: 0 },
      { row: 1, col: 0 },
      { row: 2, col: 0 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
    ]);
    expect(neighbors.some((c) => c.row === 0 && c.col === 2)).toBe(false);
  });

  test("scenario 4: single wall corner pass (allowDiagonals = true)", () => {
    const grid = createGrid(3, 3);
    grid[0]![1]!.type = "wall";
    expectSameCoords(getNeighbors(grid, 1, 1, true), [
      { row: 0, col: 0 },
      { row: 0, col: 2 },
      { row: 1, col: 0 },
      { row: 1, col: 2 },
      { row: 2, col: 0 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
    ]);
  });
});