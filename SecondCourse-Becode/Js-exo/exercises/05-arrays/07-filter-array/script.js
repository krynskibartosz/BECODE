    /* becode/javascript
    *
    * /05-arrays/07-filter-array/script.js - 5.7: filtrer un tableau
    *
    * coded by leny@BeCode
    * started at 26/10/2018
    */

    // NOTE: don't focus on the existing code structure for now.
    // You will have time to focus on it later.

(() => {
    const peoples = [
        {
            firstname: "Dreddy",
            lastname: "Nussgen",
            age: 70,
        },

        {
            firstname: "Yves",
            lastname: "Sear",
            age: 49,
        },

        {
            firstname: "Marcel",
            lastname: "Cowderay",
            age: 59,
        },

        {
            firstname: "Dag",
            lastname: "Binnall",
            age: 31,
        },

        {
            firstname: "Horten",
            lastname: "Claesens",
            age: 75,
        },

        {
            firstname: "Charmian",
            lastname: "Harnes",
            age: 10,
        },

        {
            firstname: "Sean",
            lastname: "Littlejohns",
            age: 37,
        },

        {
            firstname: "Hazlett",
            lastname: "Sprouls",
            age: 87,
        },

        {
            firstname: "Marcel",
            lastname: "Hasted",
            age: 66,
        },

        {
            firstname: "Cary",
            lastname: "Summerson",
            age: 15,
        },

        {
            firstname: "Feodor",
            lastname: "Ollett",
            age: 56,
        },

        {
            firstname: "Kelly",
            lastname: "Ranahan",
            age: 62,
        },

        {
            firstname: "Madelene",
            lastname: "Davie",
            age: 14,
        },

        {
            firstname: "Bent",
            lastname: "Karpe",
            age: 82,
        },

        {
            firstname: "Reinaldo",
            lastname: "Grimbleby",
            age: 81,
        },
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        // Création d'un second tableaux vide d/var
        let peoples_two = [];
        // Boucle qui parcours le tableau tant qu'il n'est pas arrivé à la dernière valeur
        for  (let i = 0 ; i < peoples.length ; i++) {
            
            console.log(peoples[i].age);
            // Si  age >= 18 alors on ajoutes l'éléments dans le tableau
            if (peoples[i].age>=18){
                // La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
                peoples_two.push(peoples[i]);
            }
        }
        // affiche le nouveaux tableau.
        console.log(peoples_two);
    }); 
})();