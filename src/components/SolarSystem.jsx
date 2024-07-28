import { useState } from "react";

const planets = [
  {
    name: "Sun",
    color: "#FDB813",
    size: 60,
    rotationSpeed: 0,
    orbitRadius: 0,
    texture: "radial-gradient(circle, #FFF5B8 0%, #FDB813 50%, #F89B29 100%)",
    info: "The star at the center of our Solar System",
  },
  {
    name: "Mercury",
    color: "#B7B8B9",
    size: 10,
    rotationSpeed: 10,
    orbitRadius: 70,
    orbitSpeed: 4.7,
    texture: "linear-gradient(90deg, #B7B8B9 0%, #909090 50%, #B7B8B9 100%)",
    info: "Smallest planet, closest to the Sun",
  },
  {
    name: "Venus",
    color: "#FFC649",
    size: 15,
    rotationSpeed: 8,
    orbitRadius: 100,
    orbitSpeed: 3.5,
    texture: "linear-gradient(90deg, #FFC649 0%, #BF9B30 50%, #FFC649 100%)",
    info: "Second planet from the Sun, similar in size to Earth",
  },
  {
    name: "Earth",
    color: "#6B93D6",
    size: 15,
    rotationSpeed: 6,
    orbitRadius: 140,
    orbitSpeed: 3,
    texture: "linear-gradient(90deg, #6B93D6 0%, #4B6BA5 50%, #6B93D6 100%)",
    hasMoon: true,
    info: "Our home planet, third from the Sun",
  },
  {
    name: "Mars",
    color: "#C1440E",
    size: 12,
    rotationSpeed: 5,
    orbitRadius: 180,
    orbitSpeed: 2.4,
    texture: "linear-gradient(90deg, #C1440E 0%, #8C3309 50%, #C1440E 100%)",
    info: "Fourth planet from the Sun, known as the Red Planet",
  },
  {
    name: "Jupiter",
    color: "#D8CA9D",
    size: 40,
    rotationSpeed: 4,
    orbitRadius: 260,
    orbitSpeed: 1.3,
    texture:
      "repeating-linear-gradient(45deg, #D8CA9D, #D8CA9D 10px, #B1A274 10px, #B1A274 20px)",
    info: "Largest planet in our Solar System",
  },
  {
    name: "Saturn",
    color: "#F4D47A",
    size: 35,
    rotationSpeed: 3,
    orbitRadius: 340,
    orbitSpeed: 0.9,
    texture: "linear-gradient(90deg, #F4D47A 0%, #C7A93F 50%, #F4D47A 100%)",
    hasRings: true,
    info: "Known for its prominent ring system",
  },
  {
    name: "Uranus",
    color: "#D1E7E7",
    size: 25,
    rotationSpeed: 2,
    orbitRadius: 420,
    orbitSpeed: 0.7,
    texture: "linear-gradient(90deg, #D1E7E7 0%, #A3C9C9 50%, #D1E7E7 100%)",
    info: "Third-largest planet, tilted on its side",
  },
  {
    name: "Neptune",
    color: "#5B5DDF",
    size: 24,
    rotationSpeed: 1,
    orbitRadius: 500,
    orbitSpeed: 0.5,
    texture: "linear-gradient(90deg, #5B5DDF 0%, #3E3F99 50%, #5B5DDF 100%)",
    info: "Outermost known planet in our Solar System",
  },
];

const SolarSystem = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-[1100px] h-[1100px]">
        {planets.map(planet => (
          <div
            key={planet.name}
            className="absolute"
            style={{
              width: `${planet.orbitRadius * 2}px`,
              height: `${planet.orbitRadius * 2}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation:
                planet.name !== "Sun"
                  ? `orbit ${600 / planet.orbitSpeed}s linear infinite`
                  : "none",
            }}
          >
            {/* Orbit line */}
            {planet.name !== "Sun" && (
              <div
                className="absolute rounded-full border border-gray-600"
                style={{
                  width: "100%",
                  height: "100%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex1: 1,
                }}
              ></div>
            )}
            {/* Planet */}
            <div
              className="absolute rounded-full cursor-pointer"
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                zIndex: 3,
                backgroundColor: planet.color,
                backgroundImage: planet.texture,
                boxShadow:
                  planet.name === "Sun"
                    ? "0 0 60px #FDB813"
                    : "inset 4px 0 6px rgba(0,0,0,0.3)",
                animation: `spin ${30 / planet.rotationSpeed}s linear infinite`,
                top: "50%",
                left: planet.name === "Sun" ? "50%" : "100%",
                transform:
                  planet.name === "Sun"
                    ? "translate(-50%, -50%)"
                    : "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredPlanet(planet)}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              {planet.name === "Sun" && (
                <div
                  className="absolute inset-0 rounded-full bg-yellow-300 opacity-75"
                  style={{
                    animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                  }}
                ></div>
              )}
              {planet.hasRings && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-[200%] h-[200%] rounded-full border-4 border-yellow-100 opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                  <div className="w-[180%] h-[180%] rounded-full border-2 border-yellow-200 opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                  <div className="w-[160%] h-[160%] rounded-full border-2 border-yellow-300 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                </div>
              )}
              {planet.hasMoon && (
                <div
                  className="absolute w-3 h-3 bg-gray-200 rounded-full"
                  style={{
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    animation: "orbit 3s linear infinite",
                  }}
                ></div>
              )}
            </div>
          </div>
        ))}
        {hoveredPlanet && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{hoveredPlanet.name}</h2>
            <p>{hoveredPlanet.info}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolarSystem;
