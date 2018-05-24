class Person {
    constructor(birthYear) {
        this.age = this.calculateAge(new Date(`01/01/${birthYear}`))
        this.birthYear = birthYear;
    }

    calculateAge(birthday) {
        // Epoch age - 01/01/1970 -- Formula to calculate Age: 
        let ageDiffMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDiffMs);
        // Math.abs() gives the absolute value
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    isMillenial() {
        return this.birthYear > 1982;
    }

    isRetiree() {
        return this.age >= 65;
    }
}

module.exports = Person;