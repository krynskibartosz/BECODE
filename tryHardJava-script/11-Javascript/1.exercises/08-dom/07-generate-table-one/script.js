/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const table = document.createElement("table");
    const row = document.createElement("tr");
    const cible = document.getElementById("target");
    table.appendChild(row);
    for (let count = 0; count < 10; count++) {
            let data = document.createElement("td");
            row.appendChild(data)
            }
    cible.appendChild(table)
    console.log(cible);
})();
