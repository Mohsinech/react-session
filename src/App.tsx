// This file is just the "menu" to switch between projects during the live session.
// Students work inside src/projects/<project>/Starter.tsx
import { useState, ComponentType } from "react";

import ProfileStarter from "./projects/01-profile-card/Starter";
import ProfileSolution from "./projects/01-profile-card/Solution";
import ProductStarter from "./projects/02-product-list/Starter";
import ProductSolution from "./projects/02-product-list/Solution";
import CounterStarter from "./projects/03-counter/Starter";
import CounterSolution from "./projects/03-counter/Solution";
import ThemeStarter from "./projects/04-theme-toggle/Starter";
import ThemeSolution from "./projects/04-theme-toggle/Solution";
import PasswordStarter from "./projects/05-password-input/Starter";
import PasswordSolution from "./projects/05-password-input/Solution";
// import WeatherStarter from "./projects/06-weather-app/Starter";
// import WeatherSolution from "./projects/06-weather-app/Solution";

type Project = {
  title: string;
  concept: string;
  starter: ComponentType;
  solution: ComponentType;
};

const projects: Project[] = [
  {
    title: "1. Profile Card",
    concept: "Props + types",
    starter: ProfileStarter,
    solution: ProfileSolution,
  },
  {
    title: "2. Product List",
    concept: ".map() + key",
    starter: ProductStarter,
    solution: ProductSolution,
  },
  {
    title: "3. Counter",
    concept: "useState",
    starter: CounterStarter,
    solution: CounterSolution,
  },
  {
    title: "4. Theme Toggle",
    concept: "Conditional rendering",
    starter: ThemeStarter,
    solution: ThemeSolution,
  },
  {
    title: "5. Password Input",
    concept: "Controlled inputs",
    starter: PasswordStarter,
    solution: PasswordSolution,
  },
  // {
  //   title: "6. Weather App",
  //   concept: "fetch + async/await",
  //   starter: WeatherStarter,
  //   solution: WeatherSolution,
  // },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<"starter" | "solution">("starter");

  const project = projects[index];
  const Component = mode === "starter" ? project.starter : project.solution;

  return (
    <div className="layout">
      <aside className="sidebar">
        <h1>⚛️ This React Session</h1>
        {projects.map((p, i) => (
          <button
            key={p.title}
            className={i === index ? "active" : ""}
            onClick={() => {
              setIndex(i);
              setMode("starter");
            }}
          >
            {p.title}
          </button>
        ))}
      </aside>

      <main className="main">
        <h2 style={{ margin: 0 }}>{project.title}</h2>
        <p style={{ color: "#666", marginTop: 4 }}>
          Concept: {project.concept}
        </p>

        <div className="mode-switch">
          <button
            className={mode === "starter" ? "active" : ""}
            onClick={() => setMode("starter")}
          >
            🛠️ Starter
          </button>
          <button
            className={mode === "solution" ? "active" : ""}
            onClick={() => setMode("solution")}
          >
            ✅ Solution
          </button>
        </div>

        <div className="stage">
          <Component key={`${index}-${mode}`} />
        </div>
      </main>
    </div>
  );
}
