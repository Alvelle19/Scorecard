var homeScore = document.getElementById("home-score"); 
var guestScore = document.getElementById("guest-score");

function addPoints(team, points) {
    if (team === 'home') {
        let currentScore = parseInt(homeScore.innerText);
        homeScore.innerText = currentScore + points;
    } else if (team === 'guest') {
        let currentScore = parseInt(guestScore.innerText);
        guestScore.innerText = currentScore + points;
    }
}

function resetScores() {
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}