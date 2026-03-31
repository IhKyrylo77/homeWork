import Warrior from "./units/Warrior.js";
import Archer from "./units/Archer.js";
import Mage from "./units/Mage.js";

const supportedUnitTypes = [Warrior, Archer, Mage]

export default class UnitGenerator {
    createRandomUnit() {
        const randomIndex = (Math.random() * (supportedUnitTypes.length - 1)).toFixed()
        const UnitClass = supportedUnitTypes[randomIndex];
        return new UnitClass()
    }
}