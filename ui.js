let element = document.getElementById("unit-card-template");

function createCard() {
    let newCard = element.cloneNode(true);
    newCard.hidden = false
    document.body.appendChild(newCard)
    return newCard
}

function initCardType(card, type) {
    let cardType = card.getElementsByClassName("unit-card-type")[0];
    cardType.innerHTML = type
}

function initStats(card, data) {
    let cardStates = card.getElementsByClassName("unit-card-state-item")
    for (let cardState of cardStates) {
        if (cardState.classList.contains("hp")) {
            cardState.innerHTML = `♥️HP: ${data.hp}`
        } else if (cardState.classList.contains("ultimate_progress")) {
            cardState.innerHTML = `⚡ULT: ${data.ultimateProgress * 10}/10`
        }
    }
}

for (let i = 0; i < 10; i++) {
    let card = createCard();
    initCardType(card, "Kyrylo");
    initStats(card, {hp: 99, ultimateProgress: 0.3});
}