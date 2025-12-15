export default function Orbit({ children }) {
  return (
    <div className="orbit-wrapper">
      <div className="orbit-ring"></div>
      <div className="orbit-ring ring-2"></div>
      <div className="orbit-ring ring-3"></div>
      {children}
    </div>
  );
}
