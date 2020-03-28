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
    // Les classes sont en fait des "fonctions spéciales" et, la syntaxe de la classe a deux composants: les expressions de classe et les déclarations de classe.
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        // 
        sayHello() {
            return "hello " + this.firstname + this.lastname;
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        // crée var qui contient first and last name
        const best_mma = new Person("Khabib ", "Nurmagedov");
        // affiche la var + fonct° sayHello
        console.log(best_mma.sayHello());  
    })
})();
