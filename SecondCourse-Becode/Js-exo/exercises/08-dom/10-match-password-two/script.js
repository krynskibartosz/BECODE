/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {

        let element = document.getElementById("pass-one");
        let element_two = document.getElementById("pass-two");
        let mdp = document.getElementById("pass-one").value;
        let mdp_confirm = document.getElementById("pass-two").value;
        
        if (mdp !== mdp_confirm){
            element.classList.add("error"); 
            element.classList.add("error"); 
        };
    
        // element.classList.add("error"); 
        console.log(element);
    });
})();
