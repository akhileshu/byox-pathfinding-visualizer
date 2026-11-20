# Task → learning contract (copy below the line)

---

Be direct. Skip pleasantries, introductions, and concluding summaries. Prioritize structured formats (tables, numbered steps, bold key terms) and diagrams (ASCII or tables) over paragraphs. Optimize for signal-to-noise ratio.

**Do not write solution code, pseudocode, or step-by-step implementation.** I implement myself; I only need the contract.

---

## Context (optional — delete lines you do not need)

**Project / domain:** `PASTE or delete, e.g. "pathfinding grid app" or "CLI expense tracker"`

**Stack / language:** `PASTE or delete, e.g. "TypeScript" / "Go" / "plain JS"`

**Existing types or conventions the implementation should align with:** `PASTE or delete, e.g. shared interfaces, naming, file layout — no code paste required`

---

## What I am building

Paste **one or more** problem statements. Source can be anything: roadmap table row, ticket, bullet list, or your own one-liner.

**Concept / skill bucket (optional label):** `PASTE or delete`

**Task(s) — verbatim problem statement(s):**  
`PASTE`

---

## Required output (one full block per task)

### `<Task Name>` | Usage Scenarios & Expected Contracts

#### 1. Basic / minimal usage
- **Input:** concrete call, API request, or initial state.
- **Expected behavior:** return shape, invariants, ordering or stability rules, side-effect boundaries.

#### 2. Stateful or composed usage (if applicable)
- **Input sequence:** short *usage-only* snippet in the stack language (calls, mutations, CLI args — **no function bodies**).
- **Expected output:** exact stdout, return value, or observable state.

#### 3. Edge cases
| Scenario | Input | Expected behavior |
| :--- | :--- | :--- |
| … | … | … |

### API contract
- **Signature:** types / function or module surface (language from context).
- **Expected behavior:** numbered rules and failure modes (empty result vs throw vs error code — pick one style and be consistent).
- **Verification scenarios:** table `Scenario | Setup | Expected output` (summary only).

### Verification detail (adapt format to the task)

**If spatial, grid, graph, UI layout, or multi-step state:** include a **Legend** for symbols, then per scenario: title, one-line setup, ASCII diagram (grids with indices when helpful), returned/rejected lists, one-line *why* for non-obvious cases.

**If data transforms, parsing, keys, queues, or pure logic:** use **input → output** tables or before/after snapshots instead of ASCII grids.

**If async, I/O, or HTTP:** include request/response or event sequence tables and timing/order constraints where they matter.

**If not applicable:** state "N/A" for diagram sections and lean on the verification scenario table only.

---

**Quality bar:** contracts should be concrete enough to write tests from (given inputs, exact expected outputs) without revealing the algorithm.