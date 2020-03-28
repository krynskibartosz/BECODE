/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // Lors du chargement de la page
    window.addEventListener('load', (event) =>{
    // variable qui crée un nbr random entre 1 et 100
    let random = Math.floor(Math.random() * 100) + 1;
    console.log(random);
    // initial le compteur du client et du cptoir à 0
    let answer_customer = 0
    let cpt = 0
    // fais
    do{
    // demande à l'utilisateur de choisir un nbr entre 1 et 100
    answer_customer = prompt("Choisis un nombre entre 1 et 100");
    console.log(+answer_customer)

    // si la réponse du client est +grd que random alors
    if (answer_customer > random){
        alert("plus grand")}
        else if (answer_customer < random){
            alert("plus petit")
        }

        // augmente la valeur du cpt de 1 à chaque boucle
        cpt++

        // si 
    } while(answer_customer != random)
    console.log(cpt)
    alert("Félécitation tu as réussi en " + cpt + " coup")

    })
})();

