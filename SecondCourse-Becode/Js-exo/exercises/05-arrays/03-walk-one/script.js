/* becode/javascript
 *
 * /05-arrays/03-walk-one/script.js - 5.3: parcours de tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    // your code here
        document.getElementById('run').addEventListener("click", () => {
            // crée boucle qui augmente l'index de 1 jusqu'à la longueur des éléments tu tableaux Tant que la longeur de "i" est plus petit que la lg du tableau
            for  (let i = 0; i < fruits.length; i++) {
            // affiche élémt du tableaux 'fruits' en ajoutant la var 'i'
                console.log(fruits[i]);
            }
        });
        })();
