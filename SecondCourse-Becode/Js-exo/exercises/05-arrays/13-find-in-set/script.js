/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    // variables qui crée la longueur du tableau
    let people_length = people.size;
    console.log(people_length);
    // var qui véririfie si "alexandre" fait partie du set
    let find_alex = people.has("Alexandre");
    // conditions ternaire 
        ((find_alex)? console.log("Alexandre fait partie du Set") : console.log("nothing"));
        
})();
