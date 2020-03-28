/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    let tab =["J", "e ", "s","u","i","s ","d","i","e","u."];
    let div = document.getElementById('target');

    function typeWriter() {
        interval = setInterval(() =>{
            div.innerHTML += tab.splice(0, 1);
        }, 200)
            console.log(tab);

    }
    typeWriter();
})();