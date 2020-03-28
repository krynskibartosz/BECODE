/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let date = new Date();
    // une Variable qui défini le style de comment va être écris la date
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //"date.toLocalDateString()" renvoie une chaine de caractères correspondant à la date (le fragment de l'objet qui correspond à la date : jour, mois, année) exprimée selon une locale.
    console.log(date.toLocaleDateString())
    // affiche la date actuelle défnis par les options et la langue "fr-BE"
    alert(date.toLocaleDateString("fr-BE", options));
})();
