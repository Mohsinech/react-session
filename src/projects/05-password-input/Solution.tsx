// ✅ CONCEPT: Controlled input — React state is the "source of truth" for the input value.
import { useState } from "react";

export default function Solution() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const isStrong = password.length >= 8;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: 320,
      }}
    >
      <label>Password</label>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type={show ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ flex: 1 }}
        />
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {password.length > 0 && (
        <p style={{ color: isStrong ? "green" : "red", margin: 0 }}>
          {isStrong
            ? "Strong enough ✅"
            : `Too short ❌ (${password.length}/8)`}
        </p>
      )}
    </div>
  );
}
