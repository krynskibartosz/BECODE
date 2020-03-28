/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    document.getElementById("run").addEventListener("click", () =>{
        // Boucle qui prend les "clé" et "valeur" de l'object personne
        // La méthode Object.entries() renvoie un tableau des propriétés propres énumérables d'un objet dont la clé est une chaîne de caractères, sous la forme de paires [clé, valeur], 
    for (let [key, value] of Object.entries(person)) {
        // 
        console.log(`${key}: ${value}`);
    }
    // for (let [value] of Object.entries(person)) {
    //     console.log(`${value}`);
    // }
})
})();
