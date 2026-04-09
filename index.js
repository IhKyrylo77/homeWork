import inquirer from 'inquirer'
import UnitGenerator from "./src/UnitGenerator.js";
import boxen from "boxen";

let unitGenerator = new UnitGenerator()

let team1 = []
let team2 = []

for (let i = 0; i < 4; i++) {
    let member1 = unitGenerator.createRandomUnit()
    let member2 = unitGenerator.createRandomUnit()
    team1.push(member1)
    team2.push(member2)
}

function printTeam(team, borderColor, backgroundColor) {
    for (let i = 0; i < team.length; i++) {
        let member = team[i]
        console.log(boxen(`HP:${member.hp}\nultimate:${member.ultimateProgress*100}/100`, {
            title: member.type,
            width: 20,
            borderStyle: "bold",
            borderColor: borderColor,
            backgroundColor: backgroundColor
        }))
    }
}

function recognizeAnswer(allActions, message) {
    return allActions.find(value => value.message === message)
}

let nextUnitTurn = 0;
let nextEnemyUnitTurn = 0;

const SUPPORTED_COMMAND_ACTIONS = {
    ATTACK: 'attack',
    ULTIMATE: 'ultimate'
}

function createActionsForUnit(unit) {
    let actions = []
    for (let i = 0; i < team2.length; i++) {
        actions.push({action: SUPPORTED_COMMAND_ACTIONS.ATTACK, id: i, message: `Attack enemy unit ${i}(${team2[i].type})`})
    }
    if (unit.isUltimateReady()) {
        actions.push({action: SUPPORTED_COMMAND_ACTIONS.ULTIMATE, message: "Ultimate"})
    }
    return actions;
}

while (team1.length && team2.length) {
    // console.clear()

    printTeam(team1, "#019152", "#163326")
    printTeam(team2, "#a30707", "#611919")

    let unit = team1[nextUnitTurn]

    let actions = createActionsForUnit(unit)

    let answer = await inquirer.prompt({
            name: "def_ask",
            type: 'rawlist',
            message: `Unit ${nextUnitTurn}(${unit.type}) action`, choices: actions.map(value => value.message)
        }
    )

    let selectedAction = recognizeAnswer(actions, answer['def_ask'])
    if (selectedAction.action === SUPPORTED_COMMAND_ACTIONS.ATTACK) {
        unit.doDamage(team2[selectedAction.id])
    }

    nextUnitTurn++
}




