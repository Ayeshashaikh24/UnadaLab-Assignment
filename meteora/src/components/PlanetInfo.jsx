export default function PlanetInfo({ planet }) {
  return (
    <div className="planet-info fade-in">
      <h1>{planet.name}</h1>

      <div className="stats">
        <Stat label="Galaxy" value={planet.galaxy} />
        <Stat label="Diameter" value={planet.diameter} />
        <Stat label="Day Length" value={planet.dayLength} />
        <Stat label="Avg Temperature" value={planet.temperature} />
        <Stat label="Climate" value={planet.climate} />
      </div>
    </div>
  );
}

const Stat = ({ label, value }) => (
  <div>
    <p className="label">{label}</p>
    <p className="value">{value}</p>
  </div>
);
