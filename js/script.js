// Initial home page content
// Initial home page content
document.body.innerHTML = `
    <div id="homePage">
        <h1>Hello, Beautiful! 🌸</h1>
        <p>You are the most special person in my life. 🌟 <br>
            Click on the cards scattered around to reveal some special messages just for you! 💌
        </p>
        <div class="card-container">
            <div class="card" id="card1">
                <div class="card-front">💌</div>
                <div class="card-back">You light up my world like nobody else! ✨</div>
            </div>
            <div class="card" id="card2">
                <div class="card-front">💌</div>
                <div class="card-back">Every moment with you feels magical. 🌟</div>
            </div>
            <div class="card" id="card3">
                <div class="card-front">💌</div>
                <div class="card-back">You make my heart skip a beat! 💘</div>
            </div>
            <div class="card" id="card4">
                <div class="card-front">💌</div>
                <div class="card-back">Life feels incomplete without you. ❤️</div>
            </div>
        </div>
        <button id="surpriseButton">Want to see the surprise? 💝</button>
        <div class="flower-container"></div>
    </div>
`;

// Add interactivity to flip cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});


// Add event listener for the button on the home page
document.getElementById('surpriseButton').addEventListener('click', function () {
    // Change content to proposal page
    document.body.innerHTML = `
        <div id="proposalPage">
            <h4>Will you be my permanent Pasandida Aurat?</h4>
            <h3>Will you be my permanent rasmalayi?</h3>
            <h2>Will you be my wifeeyyy?</h2>
            <h1>Will you be mine forever? ❤️</h1>
            <img src="images/propose1.png" alt="Boy proposing to girl" class="proposal-image">
            <button id="acceptButton">Yes, I Accept! 💍</button>
            <button id="declineButton">No, Sorry 😞</button>
        </div>
    `;

    // Handle "Yes" button
    document.getElementById('acceptButton').addEventListener('click', function () {
        document.body.innerHTML = `
            <div id="proposalPage">
                <h1>Yay! 🎉 I love you sooo muchhhh 🌹 💑 ❤️</h1>
                <img src="images/bears.gif" alt="Happy couple" class="proposal-image">
            </div>
        `;
    });

    // Handle "No" button
    document.getElementById('declineButton').addEventListener('click', function () {
        document.body.innerHTML = `
            <div id="proposalPage">
                <h1>It's okay! I'll always respect your decision 😊</h1>
            </div>
        `;
    });
});

// Generate flowers dynamically
const flowerContainer = document.querySelector('.flower-container');

for (let i = 0; i < 5; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = `${Math.random() * 90}vw`; // Random horizontal position
    flowerContainer.appendChild(flower);
}
