import Unit from "./Unit.js";

export default class Warrior extends Unit {
    immunityCount = 0
    constructor() {
        super("warrior", 10, 150);
    }

    takeDamage(damage) {
        if (this.immunityCount === 0) {
            super.takeDamage(damage);
            this.ultimateProgress += damage/100
        } else {
            this.immunityCount--
            console.log("ops, Im immune")
        }
    }

    ultimate(team, enemies) {
        super.ultimate(team, enemies);
        this.immunityCount = 3
    }
}