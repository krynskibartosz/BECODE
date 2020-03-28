/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ]);

    // your code here
    // transform new set en une array
    document.getElementById("run").addEventListener("click", () => {
    const arr = Array.from(fruits);
    arr.splice(0,1,"bannane")
    arr.splice(-1,1,"kiwi")
    console.log(arr);
    })
})();
