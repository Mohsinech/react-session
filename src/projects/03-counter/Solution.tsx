// ✅ CONCEPT: State = data that changes. When state changes, React re-renders.
import { useState } from "react";

export default function Solution() {
  const [count, setCount] = useState(0);

  const color = count > 0 ? "green" : count < 0 ? "red" : "#1a1a1a";

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 64, color }}>{count}</h1>
      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        <button className="btn" onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setCount(count + 1)}>
          +1
        </button>
      </div>
    </div>
  );
}
