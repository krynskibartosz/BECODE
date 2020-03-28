/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Personn {
        constructor () {
            this.firstname = this.firstname;
            this.lastname = this.lastname;
        }
        get name(){
            return `${this.log.firstname} ${this.log.lastname}`
        }   
        set current(x){
            this.log.push("Bartosz")
        }
    }
Personn.current = "Bartosz";
Personn.current = "Krynski"
    let envoie = new Personn()
    console.log(envoie);
        
})();
