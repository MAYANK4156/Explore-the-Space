// ===================================
// COSMOS - IMAGE PATHS (SABHI IMAGES YAHAN SE CONTROL HOTI HAIN)
// ===================================
//
// Folder badalna ho ya kisi aur system me project le jana ho,
// toh sirf IMAGE_BASE badlo. HTML / data me kuch nahi badalna.
//
// Kisi image ka naam/path badalna ho toh neeche us item ke
// aage wala path edit karo.

const IMAGE_BASE = "images/";

const IMAGES = {

    // planets
    "Mercury": "planets/mercury.jpg",
    "Venus": "planets/venus.jfif",
    "Earth": "planets/earth.jpg",
    "Mars": "planets/mars.jfif",
    "Jupiter": "planets/jupiter.png",
    "Saturn": "planets/saturn.jfif",
    "Uranus": "planets/uranus.png",
    "Neptune": "planets/neptune.png",

    // dwarfPlanets
    "Pluto": "dwarf-planets/pluto.jfif",
    "Ceres": "dwarf-planets/ceres.jpg",
    "Eris": "dwarf-planets/eris.jpg",

    // moons
    "Moon": "moons/moon.webp",
    "Europa": "moons/europa.jfif",
    "Titan": "moons/titan.jpg",
    "Ganymede": "moons/ganymede.jfif",

    // universe
    "The Sun": "stars/the-sun.jpg",
    "Sirius": "stars/sirius.jfif",
    "Betelgeuse": "stars/betelgeuse.jfif",
    "Milky Way": "galaxies/milky-way.avif",
    "Andromeda": "galaxies/andromeda.jfif",
    "Whirlpool Galaxy": "galaxies/whirlpool-galaxy.jfif",
    "Orion Nebula": "nebulae/orion-nebula.jfif",
    "Eagle Nebula": "nebulae/eagle-nebula.jfif",

    // cosmicObjects
    "Black Hole": "cosmic-objects/black-hole.jpg",
    "Neutron Star": "cosmic-objects/neutron-star.jpg",
    "Pulsar": "cosmic-objects/pulsar.jfif",
    "Quasar": "cosmic-objects/quasar.jpg",
    "White Dwarf": "cosmic-objects/white-dwarf.jpg",

    // smallBodies
    "Asteroid Belt": "asteroids-comets/asteroid-belt.jfif",
    "Halley's Comet": "asteroids-comets/halleys-comet.jfif",
    "Kuiper Belt": "asteroids-comets/kuiper-belt.jfif",
    "Oort Cloud": "asteroids-comets/oort-cloud.jpg",

    // phenomena
    "Supernova": "phenomena/supernova.jfif",
    "Aurora": "phenomena/aurora.jfif",
    "Dark Matter": "phenomena/dark-matter.jfif",
    "Dark Energy": "phenomena/dark-energy.jfif",
    "Gravitational Waves": "phenomena/gravitational-waves.jfif",

    // missions
    "Apollo 11": "missions/apollo-11.jfif",
    "Voyager 1": "missions/voyager-1.jfif",
    "Chandrayaan-3": "missions/chandrayaan-3.jfif",
    "James Webb Space Telescope": "missions/james-webb-space-telescope.webp",
    "Mars Perseverance": "missions/mars-perseverance.jfif",
};

// Kisi bhi item ka poora image path return karta hai.
// Agar image map me nahi mili toh "" return hota hai
// (tab card me COSMOS fallback box dikhega).
function getImagePath(item) {
    return IMAGES[item.name] ? IMAGE_BASE + IMAGES[item.name] : "";
}
