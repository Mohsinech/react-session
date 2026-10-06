// ✅ CONCEPT: Conditional rendering with the ternary operator ( ? : )
import { useState } from "react";

export default function Solution() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "#111" : "#fff",
        color: dark ? "#fff" : "#111",
        padding: 40,
        borderRadius: 12,
        textAlign: "center",
        transition: "all 0.3s",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2>{dark ? "Dark mode 🌙" : "Light mode ☀️"}</h2>
      <button className="btn" onClick={() => setDark(!dark)}>
        Switch to {dark ? "light" : "dark"}
      </button>
    </div>
  );
}
