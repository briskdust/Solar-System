import { useState } from "react";

const planets = [
  {
    name: "Sun",
    color: "bg-yellow-400",
    size: 50,
    info: "The star at the center of our Solar System",
  },
  {
    name: "Mercury",
    color: "bg-gray-400",
    size: 20,
    info: "Smallest planet, closest to the Sun",
  },
  {
    name: "Venus",
    color: "bg-yellow-200",
    size: 25,
    info: "Second planet from the Sun, similar in size to Earth",
  },
  {
    name: "Earth",
    color: "bg-blue-500",
    size: 26,
    info: "Our home planet, third from the Sun",
  },
  {
    name: "Mars",
    color: "bg-red-500",
    size: 22,
    info: "Fourth planet from the Sun, known as the Red Planet",
  },
  {
    name: "Jupiter",
    color: "bg-orange-300",
    size: 40,
    info: "Largest planet in our Solar System",
  },
  {
    name: "Saturn",
    color: "bg-yellow-600",
    size: 38,
    info: "Known for its prominent ring system",
  },
  {
    name: "Uranus",
    color: "bg-cyan-200",
    size: 32,
    info: "Third-largest planet, tilted on its side",
  },
  {
    name: "Neptune",
    color: "bg-blue-600",
    size: 31,
    info: "Outermost known planet in our Solar System",
  },
];

const SolarSystem = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-80">
        {planets.map((planet, index) => (
          <div
            key={planet.name}
            className={`absolute rounded-full ${planet.color} transition-all duration-300 cursor-pointer`}
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              left: `${(index / planets.length) * 100}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHoveredPlanet(planet)}
            onMouseLeave={() => setHoveredPlanet(null)}
          >
            {planet.name === "Saturn" && (
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-[120%] h-2 bg-yellow-200 rounded-full rotate-12"></div>
            )}
          </div>
        ))}
        {hoveredPlanet && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{hoveredPlanet.name}</h2>
            <p>{hoveredPlanet.info}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolarSystem;
