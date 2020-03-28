/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018    // let all_letter_lenght = letter.length;

 */
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // récupèration du texte de la balise rajout du txt ds un nvx tableau + récupère taille du tableau
    let target = document.getElementById("target");
    let letter = target.innerHTML;
    let all_letter = [...letter]
    // todo: change sa en pixel
    // tableau avec taille et à l'envers pour créer l'effet vague
    
    let arrClassWaveSize = [ "xx-small","small", "medium", "large", "x-large", "xx-large"]
    arrClassWaveSize = [...arrClassWaveSize, ...arrClassWaveSize.reverse()];
    let compteur = 0;
    // crée une boucle qui analyse les éléments du tableau
    for (let i = 0; i < all_letter.length; i++) {
      // Si aucun éléments est vide 
        if (all_letter[i] != ""){
        //Stylisation de chaques lettre.
            all_letter[i] = `<span style = "font-size: ${arrClassWaveSize[compteur]}" >${letter[i]}</span>`;
            // Implémentation de 1 à chaque tour de boucle pour que le style change s/chaque lettre
            compteur +=1 ;
            // Si nbr de tour depasse la taille du tableau on recommence à 0
            if (compteur > arrClassWaveSize.length){
            compteur = 0;
            }    
        };
    };

    // regroupement des éléments de l'array car ils sont séparer par des "," dans le tableau  et donc rajout dxdu texte
    target.innerHTML = all_letter.join("");
    })();