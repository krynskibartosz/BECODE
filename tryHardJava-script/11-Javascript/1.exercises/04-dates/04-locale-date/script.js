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
        let init = new Date();
        let annee = init.getFullYear();
        let mois = init.getMonth();
        let jourCh = init.getDay();
        let jourFr = init.getDate();
        let heures = init.getHours();
        let minute = init.getMinutes();
    switch (jourCh) {
        case 0:
            jourCh = "Dimanche"
            break;
        case 1:
            jourCh = "Lundi"
            break;
        case 2:
            jourCh = "Mardi"
            break;
        case 3:
            jourCh = "Mercredi"
            break;
        case 4:
            jourCh = "Jeudi"
            break;
        case 5:
            jourCh = "Vendredi"
            break;
        case 6:
            jourCh = "Samedi"
            break;
    }
switch (mois) {
    case 0:
        mois = "Janvier"
        break;
    case 1:
        mois = "Février"
        break;
    case 2:
        mois = "Mars"
        break;
    case 3:
        mois = "Avril"
        break;
    case 4:
        mois = "Mai"
        break;
    case 5:
        mois = "Juin"
        break;
    case 6:
        mois = "Juillet"
        break;
    case 7:
        mois = "Aout"
        break;
    case 8:
        mois = "Septembre"
        break;
    case 9:
        mois = "Octobre"
        break;
    case 10:
        mois = "Novembre"
        break;
    case 11:
        mois = "Décembre"
        break;
}
    document.getElementById("target").innerHTML= `${jourCh} ${jourFr} ${mois} ${annee}, ${heures}h${minute}`
})();
