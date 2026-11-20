// ===================================
// COSMOS - SPACE DATA (images alag file me: js/images.js)
// ===================================

const spaceData = {
    "planets": [
        {
            "name": "Mercury",
            "type": "planet",
            "description": "The smallest planet in our solar system and the closest planet to the Sun.",
            "distanceFromSun": 57900000,
            "fact": "Mercury completes one orbit around the Sun in about 88 Earth days."
        },
        {
            "name": "Venus",
            "type": "planet",
            "description": "A rocky planet with a thick atmosphere and extreme surface temperatures.",
            "distanceFromSun": 108200000,
            "fact": "Venus rotates in the opposite direction to most planets."
        },
        {
            "name": "Earth",
            "type": "planet",
            "description": "Our home planet and the only world currently known to support life.",
            "distanceFromSun": 149600000,
            "fact": "About 71 percent of Earth's surface is covered by water."
        },
        {
            "name": "Mars",
            "type": "planet",
            "description": "The Red Planet, known for its dusty surface, volcanoes and ancient river valleys.",
            "distanceFromSun": 227900000,
            "fact": "Mars has two small moons named Phobos and Deimos."
        },
        {
            "name": "Jupiter",
            "type": "planet",
            "description": "The largest planet in our solar system, famous for its Great Red Spot.",
            "distanceFromSun": 778600000,
            "fact": "Jupiter has a powerful magnetic field."
        },
        {
            "name": "Saturn",
            "type": "planet",
            "description": "A gas giant famous for its spectacular system of rings.",
            "distanceFromSun": 1433500000,
            "fact": "Saturn is less dense than water."
        },
        {
            "name": "Uranus",
            "type": "planet",
            "description": "An ice giant that rotates on its side.",
            "distanceFromSun": 2872500000,
            "fact": "Uranus has an extreme axial tilt."
        },
        {
            "name": "Neptune",
            "type": "planet",
            "description": "A distant ice giant with powerful winds and a deep blue appearance.",
            "distanceFromSun": 4495100000,
            "fact": "Neptune takes about 165 Earth years to orbit the Sun."
        }
    ],
    "dwarfPlanets": [
        {
            "name": "Pluto",
            "type": "dwarf",
            "description": "A famous dwarf planet located in the Kuiper Belt.",
            "distanceFromSun": 5906400000,
            "fact": "Pluto has five known moons."
        },
        {
            "name": "Ceres",
            "type": "dwarf",
            "description": "The largest object in the asteroid belt and a dwarf planet.",
            "distanceFromSun": 413700000,
            "fact": "Ceres contains water-bearing materials."
        },
        {
            "name": "Eris",
            "type": "dwarf",
            "description": "A distant dwarf planet beyond Neptune.",
            "distanceFromSun": 10125000000,
            "fact": "Eris helped prompt the redefinition of planetary classification."
        }
    ],
    "moons": [
        {
            "name": "Moon",
            "type": "moon",
            "description": "Earth's only natural satellite.",
            "distanceFromSun": 149984400,
            "fact": "The Moon is slowly moving away from Earth."
        },
        {
            "name": "Europa",
            "type": "moon",
            "description": "One of Jupiter's moons, believed to have a subsurface ocean.",
            "distanceFromSun": 778600000,
            "fact": "Europa is a major target in the search for potentially habitable environments."
        },
        {
            "name": "Titan",
            "type": "moon",
            "description": "Saturn's largest moon, with lakes and seas of liquid hydrocarbons.",
            "distanceFromSun": 1433500000,
            "fact": "Titan has a dense atmosphere."
        },
        {
            "name": "Ganymede",
            "type": "moon",
            "description": "The largest moon in the solar system.",
            "distanceFromSun": 778600000,
            "fact": "Ganymede is larger than the planet Mercury."
        }
    ],
    "universe": [
        {
            "name": "The Sun",
            "type": "star",
            "description": "The star at the centre of our solar system. Its gravity keeps the planets in orbit.",
            "fact": "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth."
        },
        {
            "name": "Sirius",
            "type": "star",
            "description": "The brightest star in Earth's night sky.",
            "fact": "Sirius is part of a binary star system."
        },
        {
            "name": "Betelgeuse",
            "type": "star",
            "description": "A red supergiant star located in the constellation Orion.",
            "fact": "Betelgeuse is much larger than our Sun."
        },
        {
            "name": "Milky Way",
            "type": "galaxy",
            "description": "The spiral galaxy that contains our solar system.",
            "fact": "Our solar system lies in one of the Milky Way's spiral arms."
        },
        {
            "name": "Andromeda",
            "type": "galaxy",
            "description": "A large spiral galaxy and one of the closest major galaxies to the Milky Way.",
            "fact": "Andromeda is approaching the Milky Way."
        },
        {
            "name": "Whirlpool Galaxy",
            "type": "galaxy",
            "description": "A beautiful spiral galaxy known for its prominent spiral arms.",
            "fact": "It is also known as Messier 51."
        },
        {
            "name": "Orion Nebula",
            "type": "nebula",
            "description": "A nearby stellar nursery where new stars are forming.",
            "fact": "The Orion Nebula is visible to the naked eye under dark skies."
        },
        {
            "name": "Eagle Nebula",
            "type": "nebula",
            "description": "A star-forming region famous for the Pillars of Creation.",
            "fact": "The Pillars of Creation contain dense clouds of gas and dust."
        }
    ],
    "cosmicObjects": [
        {
            "name": "Black Hole",
            "type": "Black Hole",
            "description": "A region of spacetime where gravity is so strong that nothing, not even light, can escape beyond the event horizon.",
            "fact": "The event horizon marks the boundary around a black hole."
        },
        {
            "name": "Neutron Star",
            "type": "Neutron Star",
            "description": "An extremely dense stellar remnant formed after certain massive stars explode.",
            "fact": "Neutron stars can spin extremely rapidly."
        },
        {
            "name": "Pulsar",
            "type": "Pulsar",
            "description": "A rotating neutron star that emits beams of electromagnetic radiation.",
            "fact": "Pulsars can produce remarkably regular signals."
        },
        {
            "name": "Quasar",
            "type": "Quasar",
            "description": "An extremely luminous active galactic nucleus powered by matter falling toward a supermassive black hole.",
            "fact": "Some quasars are visible across enormous cosmic distances."
        },
        {
            "name": "White Dwarf",
            "type": "Stellar Remnant",
            "description": "The dense remnant left behind when a Sun-like star reaches the end of its life.",
            "fact": "White dwarfs no longer produce energy through ordinary core fusion."
        }
    ],
    "smallBodies": [
        {
            "name": "Asteroid Belt",
            "type": "Asteroid Region",
            "description": "A region between Mars and Jupiter containing many rocky bodies.",
            "fact": "Ceres is the largest object in the asteroid belt."
        },
        {
            "name": "Halley's Comet",
            "type": "Comet",
            "description": "A famous periodic comet that returns to the inner solar system.",
            "fact": "Halley's Comet is expected to return in 2061."
        },
        {
            "name": "Kuiper Belt",
            "type": "Outer Solar System Region",
            "description": "A region beyond Neptune containing many icy objects.",
            "fact": "Pluto is part of the Kuiper Belt population."
        },
        {
            "name": "Oort Cloud",
            "type": "Comet Reservoir",
            "description": "A distant, hypothetical spherical cloud of icy bodies surrounding the solar system.",
            "fact": "The Oort Cloud has not been directly observed."
        }
    ],
    "phenomena": [
        {
            "name": "Supernova",
            "type": "Stellar Explosion",
            "description": "A powerful stellar explosion that can mark the end of certain stars.",
            "fact": "Supernovae help distribute elements throughout space."
        },
        {
            "name": "Aurora",
            "type": "Atmospheric Phenomenon",
            "description": "A colourful display of light produced when charged particles interact with a planet's atmosphere.",
            "fact": "Earth's auroras are commonly seen near polar regions."
        },
        {
            "name": "Dark Matter",
            "type": "Cosmic Component",
            "description": "An unseen form of matter inferred from its gravitational effects.",
            "fact": "Its exact nature remains unknown."
        },
        {
            "name": "Dark Energy",
            "type": "Cosmic Component",
            "description": "The name given to whatever is driving the accelerated expansion of the universe.",
            "fact": "Dark energy remains one of cosmology's biggest mysteries."
        },
        {
            "name": "Gravitational Waves",
            "type": "Space-Time Phenomenon",
            "description": "Ripples in spacetime produced by accelerating massive objects.",
            "fact": "Gravitational waves were directly detected for the first time in 2015."
        }
    ],
    "missions": [
        {
            "name": "Apollo 11",
            "type": "Moon Landing",
            "description": "The historic NASA mission that first landed humans on the Moon.",
            "year": 1969,
            "fact": "Neil Armstrong and Buzz Aldrin walked on the lunar surface."
        },
        {
            "name": "Voyager 1",
            "type": "Deep Space Mission",
            "description": "NASA's spacecraft exploring interstellar space.",
            "year": 1977,
            "fact": "Voyager 1 is the most distant human-made spacecraft."
        },
        {
            "name": "Chandrayaan-3",
            "type": "Lunar Exploration",
            "description": "India's successful lunar mission that achieved a soft landing near the Moon's south polar region.",
            "year": 2023,
            "fact": "It made India the fourth country to achieve a soft landing on the Moon."
        },
        {
            "name": "James Webb Space Telescope",
            "type": "Space Telescope",
            "description": "A powerful space telescope observing the universe in infrared wavelengths.",
            "year": 2021,
            "fact": "It helps scientists study early galaxies and distant planetary systems."
        },
        {
            "name": "Mars Perseverance",
            "type": "Mars Exploration",
            "description": "A NASA rover exploring Mars and collecting samples.",
            "year": 2020,
            "fact": "The mission also carried the Ingenuity Mars helicopter."
        }
    ],
    "facts": [
        "A day on Venus is longer than its year.",
        "Jupiter is the largest planet in our solar system.",
        "The Sun contains more than 99 percent of the total mass of the solar system.",
        "Neutron stars are among the densest known objects in the universe.",
        "The Milky Way is home to our solar system.",
        "Saturn's rings are made mostly of ice particles, rocky material and dust.",
        "The observable universe is about 13.8 billion years old.",
        "The Moon is gradually moving away from Earth."
    ]
};
