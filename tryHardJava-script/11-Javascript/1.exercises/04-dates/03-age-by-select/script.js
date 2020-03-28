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
    document.getElementById("run").addEventListener("click", () => {
    // Initialisation de la date d'ajd
    let init = new Date();
    let annee = init.getFullYear();
    let mois = init.getMonth();
    let jour = init.getDate();
    // Récupération des données de l'utilisateur
    let userD =document.getElementById("dob-day").value;
    let userM =document.getElementById("dob-month").value;
    let userY =document.getElementById("dob-year").value;
    // Calcul de l'age
    let userAge = annee - userY;
    let userMonth = mois - userM;
    let userDay = jour - userD;
    alert(`Tu as ${userAge} ans \n${userMonth}  mois\net ${userDay} jours` )
})
})();
