/* =========================================
   PROPERTY PARADISE - JAVASCRIPT
========================================= */


/* =========================================
   AHMEDABAD LOCATIONS BY REGION
========================================= */

const locations = {

    North: [
        "Sabarmati",
        "Ranip",
        "Motera",
        "Meghaninagar",
        "Nava Vadaj",
        "Usmanpura",
        "Shahibaug",
        "Chandkheda"
    ],

    South: [
        "Maninagar",
        "Kankaria",
        "Jamalpur",
        "Narol",
        "Lambha",
        "Behrampura",
        "Ishanpur"
    ],

    West: [
        "Satellite",
        "Vastrapur",
        "Prahladnagar",
        "Thaltej",
        "Bopal",
        "Navrangpura",
        "Science City",
        "Gota",
        "South Bopal"
    ],

    East: [
        "Naroda",
        "Nikol",
        "Vastral",
        "Odhav",
        "Bapunagar",
        "Viratnagar",
        "Thakkarnagar"
    ],

    Central: [
        "Kalupur",
        "Lal Darwaja",
        "Raipur",
        "Khanpur",
        "Teen Darwaja"
    ]

};


/* =========================================
   GET HTML ELEMENTS
========================================= */

const regionSelect =
    document.getElementById("regionSelect");

const areaSelect =
    document.getElementById("areaSelect");

const typeSelect =
    document.getElementById("typeSelect");

const budgetSelect =
    document.getElementById("budgetSelect");

const searchButton =
    document.getElementById("searchButton");

const propertyCards =
    document.querySelectorAll(".property-card");

const propertyCount =
    document.getElementById("propertyCount");


/* =========================================
   UPDATE LOCATIONS WHEN REGION CHANGES
========================================= */

regionSelect.addEventListener("change", function () {

    const selectedRegion = this.value;


    /* CLEAR OLD LOCATIONS */

    areaSelect.innerHTML =
        '<option value="">All Locations</option>';


    /* IF REGION IS SELECTED */

    if (selectedRegion !== "") {

        locations[selectedRegion].forEach(function (location) {

            const option =
                document.createElement("option");

            option.value = location;

            option.textContent = location;

            areaSelect.appendChild(option);

        });

    }

});


/* =========================================
   SEARCH BUTTON
========================================= */

searchButton.addEventListener("click", function () {

    filterProperties();

});


/* =========================================
   FILTER PROPERTIES FUNCTION
========================================= */

function filterProperties() {

    const selectedRegion =
        regionSelect.value;

    const selectedArea =
        areaSelect.value;

    const selectedType =
        typeSelect.value;

    const selectedBudget =
        budgetSelect.value;


    let visibleProperties = 0;


    propertyCards.forEach(function (card) {

        const region =
            card.dataset.region;

        const area =
            card.dataset.area;

        const type =
            card.dataset.type;

        const price =
            Number(card.dataset.price);


        let showProperty = true;


        /* REGION FILTER */

        if (
            selectedRegion !== "" &&
            region !== selectedRegion
        ) {

            showProperty = false;

        }


        /* LOCATION FILTER */

        if (
            selectedArea !== "" &&
            area !== selectedArea
        ) {

            showProperty = false;

        }


        /* PROPERTY TYPE FILTER */

        if (
            selectedType !== "" &&
            type !== selectedType
        ) {

            showProperty = false;

        }


        /* BUDGET FILTER */

        if (selectedBudget === "low") {

            if (
                price < 5000 ||
                price > 10000
            ) {

                showProperty = false;

            }

        }


        if (selectedBudget === "medium") {

            if (
                price < 10001 ||
                price > 25000
            ) {

                showProperty = false;

            }

        }


        if (selectedBudget === "high") {

            if (price < 25001) {

                showProperty = false;

            }

        }


        /* SHOW OR HIDE PROPERTY */

        if (showProperty) {

            card.style.display = "block";

            visibleProperties++;

        } else {

            card.style.display = "none";

        }

    });


    /* UPDATE PROPERTY COUNT */

    propertyCount.textContent =
        visibleProperties + " Properties Available";


    /* SCROLL TO PROPERTIES */

    if (visibleProperties > 0) {

        document
            .getElementById("properties")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}


/* =========================================
   RESET AREA WHEN ALL REGIONS SELECTED
========================================= */

areaSelect.addEventListener("change", function () {

    /* Location selected successfully */

});