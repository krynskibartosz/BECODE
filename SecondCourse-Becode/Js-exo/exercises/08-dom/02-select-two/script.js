/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // ".getElementsByClassName()" permet de choper une classe & ".item(0)" permet de choisir l'élément
    // ".item(0)" premier élément <target> (index 0) 
    document.getElementsByClassName("target").item(0).innerHTML = "owned";
    // La méthode item () renvoie un nœud à l'index spécifié dans un objet NodeList.
    // Les nœuds sont triés tels qu'ils apparaissent dans le code source et l'index commence à 0.
    
})();
