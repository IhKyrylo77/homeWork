export default class Unit {
    constructor(type, damage, hp) {
        this.type = type
        this.damage = damage
        this.hp = hp
    }

    isAlive() {
        return this.hp > 0
    }

    doDamage(enemy) {
        enemy.takeDamage(this.damage)
    }

    takeDamage(damage) {
        this.hp = this.hp - damage
    }
}