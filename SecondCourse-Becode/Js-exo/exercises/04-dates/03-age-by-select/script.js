/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // document.getElementById('dob-year').addEventListener("onchange", () => {
    document.getElementById('run').addEventListener("click", () => {
        // récupère la valeur de l'année du mois et du jour dans 3 variables
        let year = document.getElementById("dob-year").value;
        let month = document.getElementById("dob-month").value;
        let day = document.getElementById("dob-day").value;
        // crée une nouvelle date et récupère l'année complète de la date
        let today = new Date;
        let yearTwo = today.getFullYear();
        // Calcule l'age de la personne
        let age = yearTwo - year;
        // Calcule le mois de la personne
        let age_two = 12 - month;
        // Calcule (approximativement) le jour de la personne
        let age_tree = 30 - day;
        // Affiche l'âge complète
        alert("tu as : " + age + " ans, " + age_two + " mois " + "et " + age_tree + " jours");
        console.log(year);
        console.log(month);
        console.log(day);
        console.log(yearTwo)
    });
})();
