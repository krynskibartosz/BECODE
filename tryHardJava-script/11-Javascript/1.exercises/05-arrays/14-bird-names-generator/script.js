/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", () => {
    const txt = document.getElementById("target");
    const arr = Array.from(adjectives);
    const arrTwo = Array.from(birds);
    // const stp = arrTwo[0].name;
    const adj = arr[[Math.round(Math.random() * 10)]]
    const calc = [Math.round(Math.random() * 10)]
    const test = arrTwo[calc];
    const oiseau = arrTwo[calc].name;    
    const testTwo = Object.keys(birds[calc]);
    console.log(test);
    console.log(oiseau);
    console.log(testTwo);
    console.log(testTwo.length);
    if(testTwo.length == 2){
        txt.innerHTML = `La ${oiseau} ${adj}e`
    }
    else{
        txt.innerHTML = `Le ${oiseau} ${adj}`
    }
        // your code here
    })
    //! Une journée a caler dessus ptn!
})();
