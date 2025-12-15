import Navbar from "./Navbar";
import PlanetInfo from "./PlanetInfo";
import Orbit from "./Orbit";

export default function PlanetPage({ planet }) {
  return (
    <div className="page">
      <Navbar />
      <PlanetInfo planet={planet} />

      <Orbit>
        <img
          src={planet.image}
          alt={planet.name}
          className="planet"
        />
      </Orbit>
    </div>
  );
}
