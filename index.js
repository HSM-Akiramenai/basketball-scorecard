let onePointHomeEl = document.getElementById("1p-btn-home");
let twoPointHomeEl = document.getElementById("2p-btn-home");
let threePointHomeEl = document.getElementById("3p-btn-home");
let onePointGuestEl = document.getElementById("1p-btn-guest");
let twoPointGuestEl = document.getElementById("2p-btn-guest");
let threePointGuestEl = document.getElementById("3p-btn-guest");
let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

let homeTitleEl = document.getElementById("home-title-el");
let guestTitleEl = document.getElementById("guest-title-el");

homeTitleEl.textContent = "HOME"
guestTitleEl.textContent = "GUEST"

homeScoreEl.textContent = "0"
guestScoreEl.textContent = "0"

let homeScore = 0
let guestScore = 0

function giveLead() {
    if (homeScore > guestScore) {
        // Home team is leading
        homeEl.style.backgroundImage = 'url("crown.png")';
    } else if (guestScore > homeScore) {
        // Guest team is leading
        guestEl.style.backgroundImage = 'url("crown.png")';
    } else {
        // Scores are tied
        homeEl.style.backgroundImage = 'none'; // or set a default background image
        guestEl.style.backgroundImage = 'none';
    }
}


function addOnePointHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    giveLead();
}

function addTwoPointsHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    giveLead();
}

function addThreePointsHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    giveLead();
}

function addOnePointGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    giveLead();
}

function addTwoPointsGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    giveLead();
}

function addThreePointsGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    giveLead();
}
