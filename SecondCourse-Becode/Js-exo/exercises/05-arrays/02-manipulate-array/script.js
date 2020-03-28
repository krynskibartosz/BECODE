/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
            // Crée une variable qui contient l'index du 1er élément du tableau à changer
    let start_index = 0
        // Crée une variable qui contient l'index du dernier élément du tableau à changer
    let end_index = 9;
        // Crée une variable qui contient le nombre d'éléments à changer
    let number_of_elements_to_remove = 1;
        // crée variable qui remplace 1er élément du tableaux grâce à la "splice" méthode
    let removed_elements_one = fruits.splice(start_index, number_of_elements_to_remove, "banane");
        // crée variable qui remplace dernier élément du tableaux
    let removed_elements_last = fruits.splice(end_index, number_of_elements_to_remove, "kiwi");
    console.log(removed_elements_one);
    console.log(removed_elements_last);
    console.log(fruits);
    alert(fruits);
    // your code here
})();

// La méthode .splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments
// .splice(ou commence le changement, combient d'élément à changer, "rajout d'un élément")
