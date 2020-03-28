/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    // Le constructeur "new Date" permet de créer des instances Date qui représentent un moment précis dans le temps.(sans argumt il me donne la date actuel).
    let soir = new Date;
    // ".getHours()" me renvoie l'heure pour la date renseignée.
    let heure = soir.getHours();
    // "condition ternaire" (condition? Si oui : Si non)
    // "return" met fin à l'éxécution de la fonction et renvoi une valeur de la fonction
    return (heure <= 18? document.getElementById('target').innerHTML="Bonjour" : document.getElementById('target').innerHTML="Bonsoir");
})();
