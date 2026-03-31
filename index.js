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
        if (unitTeam1 && team2) {
            unitTeam1.takeATurn(team1, team2)

            team2.filter(value => !value.isAlive()).forEach(value => {
                let indexToRemove = team2.indexOf(value);
                team2.splice(indexToRemove, 1)
            })
        }


        let unitTeam2 = team2[idxTeam2++]
        if (unitTeam2 && team1) {
            unitTeam2.takeATurn(team2, team1)

            team1.filter(value => !value.isAlive()).forEach(value => {
                let indexToRemove = team1.indexOf(value);
                team1.splice(indexToRemove, 1)
            })
        }
    }
}






