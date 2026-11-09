// Function to open and close the hamburger menu
function toggleMenu() {
    //find the navigation menu
    var menu = document.getElementById("nav-links");

    //show or hid the menu
    menu.classList.toggle("show");
}
 console.log("DARG JavaSCript is connected!");
// List of dogs available for adoption
var dogs = [
    {
        name: "Willow",
        image: "images/Willow.jpg",
        gender: "female",
        type: "dog",
        description: "Willow is a friendly and loyal dog who loves to play and go on adventures. She is looking for a home where she can be the centre of attention and receive lots of love."
    },
    {
        name: "Arlo",
        image: "images/Arlo.jpg",
        gender: "male",
        type: "dog",
        description: "Arlo is a gentle and affectionate dog who enjoys cuddles and long walks. He is looking for a calm and loving home where he can feel safe and happy."
    },
    {
        name: "Chloe",
        image: "images/Chloe.jpg",
        gender: "female",
        type: "dog",
        description: "Chloe is a playful and energetic dog who loves to run and play fetch. She is looking for a home with a yard where she can burn off some energy and have fun."
    },
    {
        name: "Harper",
        image: "images/Harper.jpg",
        gender: "female",
        type: "dog",
        description: "Harper is a sweet and gentle dog who loves to cuddle and go for walks. She is looking for a loving home where she can be a beloved family member."
    },
    {
        name: "Remy",
        image: "images/Remy.jpg",
        gender: "male",
        type: "dog",
        description: "Remy is a friendly and outgoing dog who loves to meet new people and make friends. He is looking for a home where he can be part of a loving family and receive lots of attention."
    },
    {
        name: "Athena",
        image: "images/Athena.jpg",
        gender: "female",
        type: "dog",
        description: "Athena is a loyal and protective dog who loves being around her family. She is looking for a home where she can feel safe and loved."
    },
    {
        name: "Diesel",
        image: "images/Diesel.jpg",
        gender: "male",
        type: "dog",
        description: "Diesel is a brave and loyal dog who loves to protect his family. He is looking for a home where he can feel safe and valued."
    },
    {
        name: "Thor",
        image: "images/Thor.jpg",
        gender: "male",
        type: "dog",
        description: "Thor is a strong and confident dog who loves being around his family. He is looking for a home where he can be respected and cared for."
    }
];


// Function to display dogs on the adoption page
function displayDogs() {

    // Find the dog container in HTML
    var container = document.getElementById("dog-container");

    // Check if the dog container exists
    if (container) {

        // Clear the container
        container.innerHTML = "";

        // Display each dog
        dogs.forEach(function(dog) {

            // Create a dog card
            var dogCard = document.createElement("div");
            dogCard.className = "dog-card";

            // Add dog information
            dogCard.innerHTML = `
                <h3>${dog.name}</h3>
                <img src="${dog.image}" alt="${dog.name} the dog">
                <p>${dog.description}</p>
            `;

            // Add the card to the page
            container.appendChild(dogCard);

        });
    }
}

// Run the function after the page has fully loaded
document.addEventListener("DOMContentLoaded", function() {
    displayDogs();

});


/*DARG CAT ADOPTION - DYNAMIC CONTENT*/

// Store information about the seven cats
const cats = [
    {
        name: "Missy",
        image: "images/Missy.jpg",
        gender: "female",
        type: "cat",
        description: "Missy is a sweet and loving cat looking for a safe and caring forever home. She is waiting for a family who will give her the love, attention and care she deserves."
    },
   
    {
        name: "Oliver",
        image: "images/Oliver.jpg",
        gender: "male",
        type: "cat",
        description: "Oliver is a gentle and friendly cat who enjoys quiet moments and affectionate pets. He is looking for a calm and loving home where he can thrive."
    },
    {
        name: "Loki",
        image: "images/Loki.jpg",
        gender: "male",
        type: "cat",
        description: "Loki is a curious and energetic cat who loves to explore and play. He is looking for a home where he can have fun and receive lots of attention."
    },
    {
        name: "Jasper",
        image: "images/Jasper.jpg",
        gender: "male",
        type: "cat",
        description: "Jasper is a shy and gentle cat who needs a patient and understanding family. He is looking for a home where he can feel safe and loved."
    },
    {
        name: "Daisy",
        image: "images/Daisy.jpg",
        gender: "female",
        type: "cat",
        description: "Daisy is a friendly and social cat who loves interacting with people and other animals. She is looking for a home where she will receive lots of love."
    },
    {
        name: "Pumpkin",
        image: "images/Pumpkin.jpg",
        gender: "female",
        type: "cat",
        description: "Pumpkin loves sleeping in sunny spots and enjoying the warmth of the sun. She is looking for someone who can take naps with her."
    },
    {
        name: "Cleo",
        image: "images/Cleo.jpg",
        gender: "female",
        type: "cat",
        description: "Cleo is a playful cat who loves having fun and receiving lots of love."
    }
];

// Function to display cat adoption cards
function displayCats() {

    const container = document.getElementById("cat-container");

    // Prevent errors on other website pages
    if (!container) {
        return;
    }

    // Clear existing content
    container.innerHTML = "";

    // Create a card for each cat
    cats.forEach(cat => {

        const card = document.createElement("div");
        card.className = "cat-card";

        const name = document.createElement("h3");
        name.textContent = cat.name;

        const image = document.createElement("img");
        image.src = cat.image;
        image.alt = cat.name + " the cat";
        image.loading = "lazy";

        const description = document.createElement("p");
        description.textContent = cat.description;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);

        container.appendChild(card);
    });

    console.log("All seven cat adoption cards loaded.");
}

// Run after the HTML page has loaded
document.addEventListener("DOMContentLoaded", displayCats);


/* Function to open the animal lightbox */
function openLightbox(image, name, description) {

    // Find the lightbox on the page
    const lightbox = document.getElementById("animal-lightbox");

    // Check if the lightbox exists
    if (lightbox) {

        // Show the lightbox
        lightbox.style.display = "block";

        // Display the animal picture
        document.getElementById("lightbox-image").src = image;

        // Display the animal name
        document.getElementById("lightbox-name").textContent = name;

        // Display the animal description
        document.getElementById("lightbox-description").textContent = description;
    }
}

/* Function to close the animal lightbox */
function closeLightbox() {

    // Find the lightbox
    const lightbox = document.getElementById("animal-lightbox");

    // Hide the lightbox
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

/* Close the lightbox when Escape is pressed */
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLightbox();
    }
});


// Get the search, filter and sort elements
var searchAnimal = document.getElementById("searchAnimal");
var filterGender = document.getElementById("filterGender");
var sortAnimals = document.getElementById("sortAnimals");
var resetAnimals = document.getElementById("resetAnimals");


// Search, filter and sort dogs and cats
document.addEventListener("DOMContentLoaded", function() {

    // Get the HTML elements
    var searchAnimal = document.getElementById("searchAnimal");
    var filterType = document.getElementById("filterType");
    var filterGender = document.getElementById("filterGender");
    var sortAnimals = document.getElementById("sortAnimals");
    var resetAnimals = document.getElementById("resetAnimals");
    var animalContainer = document.getElementById("animalContainer");
    var animalCount = document.getElementById("animalCount");

    // Only run this code on the main adoption page
    if (!searchAnimal || !filterType || !filterGender ||
        !sortAnimals || !resetAnimals ||
        !animalContainer || !animalCount) {
        return;
    }

    // Combine dogs and cats
    var animals = dogs.concat(cats);

    // Display animals on the page
    function displayAnimals(animalList) {

        animalContainer.innerHTML = "";

        // Show how many animals were found
        animalCount.textContent =
            animalList.length + " animals found";

        // Show message if there are no matches
        if (animalList.length === 0) {
            animalContainer.textContent =
                "No animals found. Try another search.";
            return;
        }

        // Create an adoption card for each animal
        animalList.forEach(function(animal) {

            var card = document.createElement("div");
            card.className = "animal-card";

            var name = document.createElement("h3");
            name.textContent = animal.name;

            var image = document.createElement("img");
            image.src = animal.image;
            image.alt = animal.name;
            image.loading = "lazy";

            var description = document.createElement("p");
            description.textContent = animal.description;

            var details = document.createElement("p");
            details.textContent =
                "Type: " + animal.type +
                " | Gender: " + animal.gender;

            var adoptButton = document.createElement("a");
            adoptButton.href = "contact.html";
            adoptButton.textContent = "Adopt Me";

            // Add the elements to the card
            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(description);
            card.appendChild(details);
            card.appendChild(adoptButton);

            animalContainer.appendChild(card);
        });
    }

    // Search, filter and sort animals
    function updateAnimals() {

        var searchText =
            searchAnimal.value.toLowerCase().trim();

        var type = filterType.value;
        var gender = filterGender.value;
        var sort = sortAnimals.value;

        // Filter the animals
        var results = animals.filter(function(animal) {

            var matchesName = animal.name.toLowerCase()
                .includes(searchText);

            var matchesType = type === "all" ||
                animal.type === type;

            var matchesGender = gender === "all" ||
                animal.gender === gender;

            return matchesName &&
                   matchesType &&
                   matchesGender;
        });

        // Sort alphabetically
        results.sort(function(a, b) {

            if (sort === "az") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        // Display the results
        displayAnimals(results);
    }

    // Search while typing
    searchAnimal.addEventListener("input", updateAnimals);

    // Filter dogs and cats
    filterType.addEventListener("change", updateAnimals);

    // Filter by gender
    filterGender.addEventListener("change", updateAnimals);

    // Sort by name
    sortAnimals.addEventListener("change", updateAnimals);

    // Reset the search and filters
    resetAnimals.addEventListener("click", function() {

        searchAnimal.value = "";
        filterType.value = "all";
        filterGender.value = "all";
        sortAnimals.value = "az";

        updateAnimals();
    });

    // Show all animals when the page loads
    updateAnimals();
});


/* ==========================================
   DARG CONTACT FORM VALIDATION
   ========================================== */

// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function() {

    // Find the contact form
    var contactForm = document.getElementById("contactForm");

    // Only run this code if the contact form exists
    if (!contactForm) {
        return;
    }

    // Check the form when the visitor clicks Submit
    contactForm.addEventListener("submit", function(event) {

        // Stop the form from submitting immediately
        event.preventDefault();

        // Get the values entered by the visitor
        var fullName = document.getElementById("fullName").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var message = document.getElementById("message").value.trim();

        // Find the message area
        var formMessage = document.getElementById("formMessage");

        // Check for empty fields
        if (fullName === "" || email === "" ||
            phone === "" || message === "") {

            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";
            return;
        }

        // Check email address
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent =
                "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        // Check phone number (10 digits)
        var phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            formMessage.textContent =
                "Please enter a valid 10-digit phone number.";
            formMessage.style.color = "red";
            return;
        }

        // All fields are correct
        formMessage.textContent =
            "Form validated successfully! Your message has not been sent yet.";

        formMessage.style.color = "green";

        // Clear the form
        contactForm.reset();

    });

});

