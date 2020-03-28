/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // addEventListenr("input")
    document.getElementById("slider").addEventListener("input", () => {
            // récupérer la valeur du slider
    let slider = document.getElementById("slider").value;
    // console.log(slider)
    // Remplacer le texte par la valeur du slider
    document.getElementById("target").innerHTML = "+0" + slider;
})
})();
