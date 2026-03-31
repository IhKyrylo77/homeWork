export default class Unit {
    ultimateProgress = 0

    constructor(type, damage, hp) {
        this.type = type
        this.damage = damage
        this.hp = hp
    }

    isAlive() {
        return this.hp > 0
    }

    takeATurn(team, enemies) {
        if (this.isUltimateReady()) {
            this.ultimate(team, enemies)
        } else {
            let randomEnemy = this.getRandomMember(enemies)
            this.doDamage(randomEnemy)
        }
    }

    doDamage(enemy) {
        enemy.takeDamage(this.damage)
        this.ultimateProgress = this.ultimateProgress + this.damage / 100
    }

    takeDamage(damage) {
        this.hp = this.hp - damage
    }

    getRandomMember(members) {
        let randomIndex = Math.floor(Math.random() * members.length);
        return members[randomIndex]
    }

    isUltimateReady() {
        return this.ultimateProgress >= 1
    }

    ultimate(team, enemies) {
        this.ultimateProgress = 0
    }
}