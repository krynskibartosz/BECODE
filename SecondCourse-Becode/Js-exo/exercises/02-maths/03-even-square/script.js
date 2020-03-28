/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        // crée variable qui est = à 2
        let nbr1 = 2;
        // Crée une boucle qui fonctionne tant que la variable <21
        while (nbr1 <21){
            // "Math.sqrt"calcule le carré de la 1er variable
            let rest = Math.sqrt(nbr1);
            // implémente de 2 la 1er variables
            nbr1 += 2;
            // affiche le résulltat
            alert(rest);
        }
    });
})();
