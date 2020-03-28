/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("pass-one").addEventListener("input", (e) => {
    //let letters = /^[0-9]{2}+$/;
    let test = e.target.value;
    alert(test);
    // let mdp_length = test.length;
    // if (mdp_length >=8 && test.match(letters))
    //     document.getElementById("validity").innerHTML ="ok";
    // for (let i = 0; i < test.length; i++) {
    //     const element = test[i];
    // }
    // console.log(test);
})
})();
