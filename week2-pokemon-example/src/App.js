import "./App.css";
import { Logo } from "./components/logo/Logo";
import { BestPokemon } from "./components/best-pokemon/BestPokemon";
import { CaughtPokemon } from "./components/caught-pokemon/CaughtPokemon";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div className="App">
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
