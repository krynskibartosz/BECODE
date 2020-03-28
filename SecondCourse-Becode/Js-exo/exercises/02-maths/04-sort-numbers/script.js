/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    // document.getElementById("run").addEventListener("click", () => {
    //     // your code here
    document.getElementById("run").addEventListener("click", () => {
        // .vlaue permet de récupérer la Valeur d'un éléments
        let nbr =document.getElementById("numbers").value;
        // La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
        let numfree = nbr.split(",")
        // La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
        // si a < b alors a - b < 0, c'est-à-dire un nombre négatif (croissant)
        // si a > balors a - b > 0, c'est-à-dire un nombre positif
        numfree.sort((a,b) => a - b);
        alert(numfree);

});
})();
