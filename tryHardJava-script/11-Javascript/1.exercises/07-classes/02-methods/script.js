/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Personn{
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        getHello () {
            return `Your welcom ${this.firstname} ${this.lastname}`
        }
    }
    let say = new Personn("Krynski","Bartosz");
    console.log(say.getHello());
})();
