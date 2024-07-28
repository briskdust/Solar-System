import { useState } from "react";

const planets = [
  {
    name: "Sun",
    color: "bg-yellow-400",
    size: 80,
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
    hasMoon: true,
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
    size: 50,
    info: "Largest planet in our Solar System",
  },
  {
    name: "Saturn",
    color: "bg-yellow-600",
    size: 45,
    info: "Known for its prominent ring system",
    hasRings: true,
  },
  {
    name: "Uranus",
    color: "bg-cyan-200",
    size: 35,
    info: "Third-largest planet, tilted on its side",
  },
  {
    name: "Neptune",
    color: "bg-blue-600",
    size: 34,
    info: "Outermost known planet in our Solar System",
  },
];

const SolarSystem = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl h-96">
        {planets.map((planet, index) => (
          <div
            key={planet.name}
            className="absolute"
            style={{
              left: `${(index / (planets.length - 1)) * 100}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`relative rounded-full ${
                planet.color
              } transition-all duration-300 cursor-pointer 
                ${planet.name === "Sun" ? "animate-pulse" : ""}`}
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                boxShadow: planet.name === "Sun" ? "0 0 60px #fbbf24" : "none",
              }}
              onMouseEnter={() => setHoveredPlanet(planet)}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              {planet.name === "Sun" && (
                <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-75 animate-ping"></div>
              )}
              {planet.hasRings && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-[140%] h-6 border-4 border-yellow-200 rounded-full rotate-12"></div>
              )}
              {planet.hasMoon && (
                <div className="absolute -top-6 -right-2 w-4 h-4 bg-gray-200 rounded-full"></div>
              )}
            </div>
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
