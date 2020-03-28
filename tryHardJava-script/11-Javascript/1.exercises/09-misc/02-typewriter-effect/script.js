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
    // your code here
    const cible = document.getElementById("target")
    let arr = ["C","o","p","y","W","r","i","t","e","r"];        
    function random(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    }
        setInterval(() => {
            cible.innerHTML += arr.splice(0,1);            
        }, random(1100,2000));
//! ça n'apparait pas aléatoirement donc à améliorer
})();
