/**
 * Class to create a programmer
 * @example
 * const newProgrammer = new Programmer ({fullname: 'Anna Black', 'Php'})
 * newProgrammer.getInfo()
 * 
 * @todo Implements other methods
 * 
 * @tutorial firstTutorial
 */

class Programmer {
    /**
     * @param {User} user User's information
     * @param {String} language User's language
     */
    constructor(user, language) {
        this.fullname = user.fullname
        this.language = language
    }

    /**
     * Get programmer info
     * @returns {void}
     */
    getInfo(){
        console.log(`I am ${this.fullname} and my favorite programming language is ${this.language}`)
    }
}

/**
 * Know more in {@link Programmer}
 */
const ProgrammerOne = new Programmer({fullname: 'Alex Sterling'}, 'javascript')

/**
 * Know more in {@link Programmer}
 */
const ProgrammerTwo = new Programmer({fullname: 'Aleska Sterling'}, 'go')

ProgrammerOne.getInfo();
ProgrammerTwo.getInfo();