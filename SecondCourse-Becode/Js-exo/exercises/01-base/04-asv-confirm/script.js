/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let demande = () => {
    // your code here
    const age =prompt("ton âge?");
    const sex =prompt("ton sex?");
    const city =prompt("ta ville");
    const confirmation = confirm(age+" " + sex+" " + city);
    if (!confirmation) demande();
};
demande();  
