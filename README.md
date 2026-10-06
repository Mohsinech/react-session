# ⚛️ React Live Session: 6 Beginner Projects (TSX)

## Run it
```bash
npm install
npm run dev
```
Open the link Vite prints (usually http://localhost:5173). Use the sidebar to pick a project and the **Starter / Solution** buttons to switch.

## How to work
Each project lives in `src/projects/<project>/`:
- `Starter.tsx`: the exercise. Read the `TODO` comments at the top and code there.
- `Solution.tsx`: the finished version. Peek only when stuck 😉

Save the file and the browser updates instantly.

## Projects
| # | Project | You'll learn |
|---|---------|--------------|
| 1 | Profile Card | Components, **props**, TypeScript types |
| 2 | Product List | Rendering lists with **.map()** and **key** |
| 3 | Counter | **useState** and click events |
| 4 | Theme Toggle | Boolean state + **conditional rendering** (`? :`) |
| 5 | Password Input | **Controlled inputs** (`value` + `onChange`) |
| 6 | Weather App | **fetch**, async/await, loading & error states |

The weather app uses [Open-Meteo](https://open-meteo.com/). It's free and needs no API key.

## React cheat sheet
- **Props** → data passed *into* a component (parent → child), read-only.
- **State** → data a component owns and changes with `setX(...)`. Changing it re-renders.
- **Never mutate state** → make new copies: `[...arr, item]`, `arr.map()`, `arr.filter()`.
- **Lists** → `items.map(item => <Card key={item.id} ... />)`.
- **Conditions** → `{isOpen && <Menu />}` or `{dark ? "🌙" : "☀️"}`.
