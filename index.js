// INITIALIZE

let warrior = {
    type: "warrior",
    damage: 10,
    hp: 150}



let mage = {
    type: "mage",
    damage: 13,
    hp: 130
}

let botsTypes = [warrior, archer, mage]

let team1 = []
let team2 = []

for (let i = 0; i < 10; i++) {
    let member1 = {...botsTypes[(Math.random() * (botsTypes.length - 1)).toFixed()]}
    let member2 = {...botsTypes[(Math.random() * (botsTypes.length - 1)).toFixed()]}
    team1.push(member1)
    team2.push(member2)
}


// MAIN GAME CYCLE
{
    let i = 0;


    while (team1.length && team2.length) {

        if (turn === 1) {

            let attacker = team1[i % team1.length];
            let r = Math.floor(Math.random() * team2.length);

            team2[r].hp -= attacker.damage;

            if (team2[r].hp <= 0) {
                team2.splice(r, 1);
            }

            turn = 2;
        } else {
            r].hp -= attacker.damage;

            if (team1[r].hp <= 0) {
                team1.splice(r, 1);
            }

            turn = 1;
            i++;
        }





