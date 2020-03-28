/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // La méthode Array.from() permet de créer une nouvelle instance d'Array (une copie superficielle) à partir d'un objet itérable ou semblable à un tableau.
    Array.from(document.getElementsByClassName("target")).forEach(a => a.innerHTML = "owned");
})();
