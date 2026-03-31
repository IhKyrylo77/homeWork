import Unit from "./Unit.js";

export default class Archer extends Unit {
    critChance = 0.25
    critDamageFactor = 2

    constructor() {
        super("archer", 15, 100);
    }

    doDamage(enemy) {
        let damage = this.damage
        if (Math.random() < this.critChance) {
            damage = damage * this.critDamageFactor
            console.log("CRIT!!")
        }

        enemy.takeDamage(damage)
    }
}