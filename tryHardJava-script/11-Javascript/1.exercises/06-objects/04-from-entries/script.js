/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing co de structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    const a = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]))    
    console.log(a);
    //! converti les 2arr en 1obj, le premier array sera la clef de l'object, le second sa valeur
})();
