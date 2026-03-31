import UnitGenerator from "./src/UnitGenerator.js";

let unitGenerator = new UnitGenerator()

let team1 = []
let team2 = []

for (let i = 0; i < 10; i++) {
    let member1 = unitGenerator.createRandomUnit()
    let member2 = unitGenerator.createRandomUnit()
    team1.push(member1)
    team2.push(member2)
}


// MAIN GAME CYCLE
while (team1.length && team2.length) {
    // console.clear()
    console.log('-----------------------------')
    nextRound()
    console.table(team1)
    console.table(team2)
    await new Promise(resolve => setTimeout(resolve, 1000))
}
console.log(`CONGRATULATIONS!!! Team ${team1.length ? "1" : "2"} Won!`)

function nextRound() {
    let idxTeam1 = 0;
    let idxTeam2 = 0;
    for (let i = 0; i < team1.length + team2.length; i++) {
        let unitTeam1 = team1[idxTeam1++]
        let r = Math.floor(Math.random() * team2.length);
        let team2Random = team2[r];
        if (unitTeam1 && team2Random) {
            unitTeam1.doDamage(team2Random)
            if (!team2[r].isAlive()) {
                console.log('Im dead')
                console.log({team2Random})
                team2.splice(r, 1);
            }
        }


        let unitTeam2 = team2[idxTeam2++]
        r = Math.floor(Math.random() * team1.length);
        let team1Random = team1[r];
        if (unitTeam2 && team1Random) {
            unitTeam2.doDamage(team1Random)
            if (!team1[r].isAlive()) {
                console.log('Im dead')
                console.log({team1Random})
                team1.splice(r, 1);
            }
        }
    }
}






