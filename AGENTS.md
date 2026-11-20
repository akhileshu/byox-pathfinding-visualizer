## AI Usage

- When AI contributes code, add a one-line comment describing exactly what AI helped implement or change, so it can be identified during later reviews.
- Keep comments specific and factual. Do not add generic comments like `// AI-generated code`.

Example:

```ts
// AI-assisted: Refactored GridCell to extend Coord, removing duplicated row/col fields.
interface GridCell extends Coord {
  type: CellType;
}
```

Another example:

```ts
// AI-assisted: Added diagonal neighbor detection based on the existing grid boundary rules.
function getDiagonalNeighbors(coord: Coord): Coord[] {
  // ...
}
```

- Add comments only where AI materially contributed to the implementation.