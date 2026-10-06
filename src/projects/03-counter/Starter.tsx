// 🎯 GOAL: Build a counter using STATE (useState)
//
// TODO 1: import { useState } from "react"
// TODO 2: Create a state: const [count, setCount] = useState(0)
// TODO 3: Show {count} inside the <h1>
// TODO 4: Make the buttons work: -1, Reset, +1
// BONUS: Make the number red when it's negative, green when positive

export default function Starter() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 64 }}>0</h1>
      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        <button className="btn">-1</button>
        <button className="btn">Reset</button>
        <button className="btn">+1</button>
      </div>
    </div>
  );
}
