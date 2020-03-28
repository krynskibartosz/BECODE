/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
    const table = document.querySelectorAll("td");
    const minValeur = document.getElementById("min"); 
    const maxValeur = document.getElementById("max");
    const sommeValeur = document.getElementById("sum");   
    const moyenneValeur = document.getElementById("average")
    console.log(table);
    const arr = [];
    const arrTwo = [];
    for (let nbr = 1; nbr <= 100; nbr++) {
        arr.push(nbr)
        // arrTwo.push(nbr + nbr)
    }
    console.log(arrTwo);
    console.log(arr);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const somme = arr.reduce(reducer);
    minValeur.innerHTML =(Math.min(...arr))
    maxValeur.innerHTML =(Math.max(...arr))
    sommeValeur.innerHTML = somme;
    moyenneValeur.innerHTML = somme / arr.length;

    for (let i = 0; i <= 10; i++) {
        let text = i + 1;
        table[i].innerHTML = text;
        }


});
})();