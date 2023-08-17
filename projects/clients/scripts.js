const appCardsContainer = document.querySelector(".app-cards");

// Load app details from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(appDetails => {
        appDetails.forEach(app => {
            const cardCol = document.createElement("div");
            cardCol.classList.add("col-md-2", "mb-4");

            const card = document.createElement("div");
            card.classList.add("card");

            const icon = document.createElement("img");
            icon.classList.add("card-img-top");
            icon.src = app.icon;
            icon.alt = app.name;

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const appName = document.createElement("h5");
            appName.classList.add("card-title");
            appName.textContent = app.name;

            cardBody.appendChild(appName);
            card.appendChild(icon);
            card.appendChild(cardBody);
            cardCol.appendChild(card);
            appCardsContainer.appendChild(cardCol);

            card.addEventListener("click", () => {
                // Open the link in a new tab
                window.open(app.url, '_blank');
            });
        });
    })
    .catch(error => {
        console.error('Error loading app details:', error);
    });
s