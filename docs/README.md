# Pathfinding Visualizer

**Stack (v0):** `ts-apps/pathfinding-visualizer` (react)

> Chat excerpts from Gemini project brainstorms (`10-nov-26/`). Duplicate topic variants are merged here.

<!-- from projects-3.md -->

### 6. Heuristic Routing & Pathfinding Visualizer
* **Language Match:** **TypeScript** (Canvas or SVG for rendering) or **Go** (fast graph traversals + CLI ASCII/Wasm export).
* **Plain-English Purpose:** *"Find the fastest route through a messy maze or road network while dodging traffic and obstacles."*
* **v0.1 in <1 Hour:** Represent a 20×20 2D grid as a 2D array. Run classic Breadth-First Search (BFS) or Dijkstra's algorithm to find the shortest path between a start node `(0, 0)` and a target node `(19, 19)` around hardcoded wall obstacles. Print the path with `*` in the console or draw it on an HTML canvas.
* **Why the Ceiling is Infinite:**
  * **Heuristics & Tuning:** Implement $A^*$ with custom heuristic functions (Manhattan vs. Euclidean vs. Chebyshev), Jump Point Search (JPS) for grid symmetry pruning, and Contraction Hierarchies for macro-scale routing.
  * **Dynamic & Multi-Agent Constraints:** Introduce time-varying edge weights (simulating rush-hour congestion), dynamic roadblock spawns, or multi-agent collision avoidance (cooperative pathfinding).
  * **Real Map Data:** Ingest OpenStreetMap PBF/XML chunks, construct a directed road graph with turn restrictions, and compute cross-city routes.
* **Direct Feedback Loop:** Click on the grid to drop walls or shift targets, and immediately watch the frontier search flood and the computed route snap to the optimal path in real time.

---
