/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    // Des sous tableaux dans un tableaux pour que ce soit plus simple à séléctionner
    const arr = [ ['name', 'Skitty'], ['species', 'cat'], ['age', 9], ['gender','female'], ['color','tabby']];
    // La méthode Object.fromEntries() permet de transformer une liste de paires de clés/valeurs en un objet.
    const obj = Object.fromEntries(arr);
    console.log(obj);
})();
