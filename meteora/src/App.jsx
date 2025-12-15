import PlanetPage from "./components/PlanetPage";
import { planets } from "./data/planets";

export default function App() {
  return <PlanetPage planet={planets[0]} />;
}
