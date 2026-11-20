# byox-pathfinding-visualizer

Interactive grid pathfinding visualizer in TypeScript and React. Step through BFS and later Dijkstra, A*, and more — paint walls, move start/end, and watch the search frontier and shortest path update in real time. Part of a BYOX-style learning build.

## Progress

**Stage 1 — 2D arrays & coordinate math (tasks 1.1–1.3)**

- `createGrid` / `printGrid` — typed 2D grid and ASCII serialization
- `getNeighbors` — 4-way and 8-way lookup with wall filtering
- Corner-cutting rule when `allowDiagonals` is true
- Tests: `bun test`

## Setup

```bash
bun install
bun test
bun run dev
```

Roadmap and practice contracts live under [`docs/`](docs/).