/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // récupère l'élément dans la balise id "target"
    let target = document.getElementById("target");
    let letter = target.innerHTML;
    console.log(letter)
    // récupère toutes les lettres de l'élément target
    let all_letter = [...letter]
    // récupère le nombre de lettre de l'élément target
    let all_letter_lenght = letter.length;
    console.log(all_letter);
    console.log(all_letter_lenght);
    // Crée un taleau avec les différentes tailles des lettres
    let arrClassWaveSize = [ "xx-small","small", "medium", "large", "x-large", "xx-large"]
    // Récupère les valeurs du premier tableau et inverse les
    arrClassWaveSize = [...arrClassWaveSize, ...arrClassWaveSize.reverse()];
    console.log(arrClassWaveSize)
      // Crée une variable index qui aura comme valeur 0
    let compteur = 0;
    // crée une boucle qui analyse les éléments du tableau
    for (let i = 0; i < all_letter.length; i++) {
      // Si les aucun éléments est vide 
      if (all_letter[i] != " "){
      // Alors Rajoute un span à chaque élément du tableau et donne lui la taille qui doit avoir
        all_letter[i] = `<span style = "font-size: ${arrClassWaveSize[compteur]}" >${letter[i]}</span>`
        // Implémente l'index
        compteur +=1 ;
        // Si l'index est plus grand que la taille du tableau alors recommence la boucle
        if (compteur > arrClassWaveSize.length){
          compteur = 0;
        }    
      };
    };
    // Colle les éléments ensemble pour que ça ressemble à une phrase
    target.innerHTML = all_letter.join("");
    
    })();
