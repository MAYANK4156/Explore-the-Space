// ===================================
// COSMOS - MAIN JAVASCRIPT
// ===================================

// spaceData ab data/space-data.js se aata hai (fetch ki zaroorat nahi),
// isliye website Chrome me double-click karke bhi chalegi.

function loadSpaceData() {

    try {

        if (typeof spaceData === "undefined") {
            throw new Error("space-data.js load nahi hui.");
        }

        displayPlanets("planet");
        displayUniverse("star");
        displayCosmicObjects();
        displaySmallBodies();
        displayPhenomena();
        displayMissions();

        populateCalculator();

        displayRandomFact();

    }

    catch (error) {

        console.error(error);

        document.querySelectorAll(".loading").forEach(element => {
            element.textContent = "Unable to load data. Please check that data/space-data.js is linked in index.html.";
        });

    }

}


// CREATE IMAGE-BASED CARD
function createCard(item) {

    const imagePath = escapeHTML(getImagePath(item));

    return `
        <article class="explore-card">

            <div class="card-image">
                <img
                    src="${imagePath}"
                    alt="${escapeHTML(item.name)}"
                    loading="lazy"
                    onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
                >

                <div class="image-fallback" hidden>
                    <span class="fallback-mark">COSMOS</span>
                    <small>Image not added yet</small>
                </div>
            </div>

            <div class="card-content">

                <h3>${escapeHTML(item.name)}</h3>

                <p>${escapeHTML(item.description)}</p>

                <span class="card-tag">
                    ${escapeHTML(item.type)}
                </span>

                <p class="card-fact">
                    <strong>Did you know?</strong><br>
                    ${escapeHTML(item.fact)}
                </p>

            </div>

        </article>
    `;

}


// DISPLAY PLANETS AND MOONS
function displayPlanets(type) {

    const grid = document.getElementById("planetGrid");

    let items = [];

    if (type === "planet") {
        items = spaceData.planets;
    }

    else if (type === "dwarf") {
        items = spaceData.dwarfPlanets;
    }

    else if (type === "moon") {
        items = spaceData.moons;
    }

    grid.innerHTML = items.map(createCard).join("");

}


// DISPLAY STARS, GALAXIES AND NEBULAE
function displayUniverse(type) {

    const grid = document.getElementById("universeGrid");

    const items = spaceData.universe.filter(
        item => item.type === type
    );

    grid.innerHTML = items.map(createCard).join("");

}


// DISPLAY COSMIC OBJECTS
function displayCosmicObjects() {

    const grid = document.getElementById("objectGrid");

    grid.innerHTML = spaceData.cosmicObjects
        .map(createCard)
        .join("");

}


// DISPLAY ASTEROIDS AND COMETS
function displaySmallBodies() {

    const grid = document.getElementById("smallBodyGrid");

    grid.innerHTML = spaceData.smallBodies
        .map(createCard)
        .join("");

}


// DISPLAY COSMIC PHENOMENA
function displayPhenomena() {

    const grid = document.getElementById("phenomenaGrid");

    grid.innerHTML = spaceData.phenomena
        .map(createCard)
        .join("");

}


// DISPLAY SPACE MISSIONS
function displayMissions() {

    const grid = document.getElementById("missionGrid");

    grid.innerHTML = spaceData.missions
        .map(createCard)
        .join("");

}


// PLANET FILTERS
document.getElementById("planetFilters").addEventListener("click", function(event) {

    const button = event.target.closest(".filter-btn");

    if (!button) return;

    document.querySelectorAll("#planetFilters .filter-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    displayPlanets(button.dataset.filter);

});


// UNIVERSE FILTERS
document.getElementById("universeFilters").addEventListener("click", function(event) {

    const button = event.target.closest(".filter-btn");

    if (!button) return;

    document.querySelectorAll("#universeFilters .filter-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    displayUniverse(button.dataset.filter);

});


// POPULATE DISTANCE CALCULATOR
function populateCalculator() {

    const first = document.getElementById("objectOne");
    const second = document.getElementById("objectTwo");

    const allObjects = [
        ...spaceData.planets,
        ...spaceData.dwarfPlanets,
        ...spaceData.moons
    ];

    allObjects.forEach(item => {

        const optionOne = document.createElement("option");
        optionOne.value = item.distanceFromSun;
        optionOne.textContent = item.name;

        const optionTwo = optionOne.cloneNode(true);

        first.appendChild(optionOne);
        second.appendChild(optionTwo);

    });

}


// FORMAT LARGE DISTANCES
function formatDistance(distance) {

    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 2
    }).format(distance);

}


// CALCULATE APPROXIMATE ORBITAL-SCALE SEPARATION
document.getElementById("calculateDistance")
.addEventListener("click", function() {

    const first = document.getElementById("objectOne");
    const second = document.getElementById("objectTwo");

    const result = document.getElementById("distanceResult");

    if (!first.value || !second.value) {

        result.innerHTML = "<p>Please select both celestial objects.</p>";
        return;

    }

    const distanceOne = Number(first.value);
    const distanceTwo = Number(second.value);

    if (distanceOne === distanceTwo) {

        result.innerHTML = `
            <h3>Same orbital reference</h3>
            <p>Both selected objects have the same stored orbital-distance reference.</p>
        `;

        return;

    }

    const difference = Math.abs(distanceOne - distanceTwo);

    const astronomicalUnits = difference / 149597870.7;

    const lightYears = difference / 9460730472580.8;

    result.innerHTML = `
        <h3>${formatDistance(difference)} km</h3>

        <p>Approximate difference in average orbital distance</p>

        <p style="margin-top:10px;">
            <strong>${astronomicalUnits.toFixed(4)} AU</strong>
            <br>
            ${lightYears.toExponential(3)} Light Years
        </p>
    `;

});


// MISSION PLANNER
document.getElementById("missionForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("missionName").value.trim();

    const destination = document.getElementById("destination").value;

    const objective = document.getElementById("objective").value;

    const duration = document.getElementById("duration").value;

    const crew = Number(document.getElementById("crewSize").value);

    const spacecraft = document.getElementById("spacecraft").value;

    const description = document.getElementById("missionDescription").value.trim();


    if (!name || !destination || !objective || !duration || !spacecraft) {

        alert("Please complete all required fields.");

        return;

    }


    if (!Number.isInteger(crew) || crew < 1 || crew > 20) {

        alert("Crew size must be between 1 and 20.");

        return;

    }


    const report = document.getElementById("missionReport");

    const reportContent = document.getElementById("reportContent");


    reportContent.innerHTML = `

        <h3 style="margin-top:25px; color:#48d9ff;">
            ${escapeHTML(name)}
        </h3>

        <div class="report-details">

            <div class="report-item">
                <small>Destination</small>
                <strong>${escapeHTML(destination)}</strong>
            </div>

            <div class="report-item">
                <small>Mission Objective</small>
                <strong>${escapeHTML(objective)}</strong>
            </div>

            <div class="report-item">
                <small>Mission Duration</small>
                <strong>${duration} Months</strong>
            </div>

            <div class="report-item">
                <small>Crew Size</small>
                <strong>${crew} Astronauts</strong>
            </div>

            <div class="report-item">
                <small>Spacecraft</small>
                <strong>${escapeHTML(spacecraft)}</strong>
            </div>

            <div class="report-item">
                <small>Mission ID</small>
                <strong>CM-${Date.now().toString().slice(-7)}</strong>
            </div>

        </div>

        <p class="report-description">
            ${escapeHTML(description || "No additional mission description provided.")}
        </p>

    `;


    report.classList.remove("hidden");

    report.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// BASIC HTML ESCAPING FOR USER INPUT
function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];

    });

}


// PRINT MISSION REPORT
document.getElementById("printReport")
.addEventListener("click", function() {

    window.print();

});


// RANDOM COSMIC FACT
function displayRandomFact() {

    const factElement = document.getElementById("cosmicFact");

    const facts = spaceData.facts;

    const randomIndex = Math.floor(Math.random() * facts.length);

    factElement.textContent = facts[randomIndex];

}


document.getElementById("newFact")
.addEventListener("click", displayRandomFact);


// INITIALIZE WEBSITE
loadSpaceData();