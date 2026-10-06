// 🎯 GOAL: A password input with a Show/Hide button (controlled input)
//
// TODO 1: Create a state "password" (string) and connect it to the input:
//         value={password}  onChange={(e) => setPassword(e.target.value)}
// TODO 2: Create a state "show" (boolean)
// TODO 3: The input type should be "text" when show is true, "password" otherwise
// TODO 4: The button text should say "Hide" or "Show"
// BONUS: Show "Too short ❌" if password length < 8, otherwise "Strong enough ✅"

export default function Starter() {
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
          type="password"
          placeholder="Enter password"
          style={{ flex: 1 }}
        />
        <button className="btn">Show</button>
      </div>
    </div>
  );
}
