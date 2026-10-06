// 🎯 GOAL: Toggle between light and dark mode (boolean state + conditional rendering)
//
// TODO 1: Create a boolean state called "dark" (starts as false)
// TODO 2: When the button is clicked, flip it: setDark(!dark)
// TODO 3: Change background & text color depending on "dark"
// TODO 4: Change the text: "Dark mode 🌙" or "Light mode ☀️"
// TIP: use the ternary operator  condition ? valueIfTrue : valueIfFalse

export default function Starter() {
  return (
    <div
      style={{
        background: "#fff",
        color: "#111",
        padding: 40,
        borderRadius: 12,
        textAlign: "center",
      }}
    >
      <h2>Light mode ☀️</h2>
      <button className="btn">Toggle theme</button>
    </div>
  );
}
