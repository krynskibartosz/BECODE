/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const gâteaux =prompt("Veux tu du gâteaux?");
    const oui ="félécitation";
    const non ="ça ne se refuse pas";
    // condition ternaire. (condition? Si vrai : si faux)
    alert (gâteaux=="oui"? alert(oui) : alert(non) );
})();
