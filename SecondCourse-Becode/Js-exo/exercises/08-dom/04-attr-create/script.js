/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let obj = document.getElementsByTagName("span")[1];
    // .getAttribute renvoie la valeur d'un attribut donné de l'élément spécifié.
    ref= obj.getAttribute("data-image");

    var tagFigure = document.getElementsByTagName('figure')[0];
    // Dans un document HTML, la méthode document.createElement() crée un élément HTML du type spécifié par tagName
    var tagImage = document.createElement('img');
        tagImage.innerHTML = tagFigure.innerHTML;
    // La méthode Node.insertBefore() insère un nœud juste avant le noeud de référence en tant qu'enfant du nœud parent spécifié. Si l'enfant donné est une référence à un noeud existant dans le document, insertBefore() le déplace vers sa nouvelle position (il n'est pas nécessaire de supprimer le noeud de son parent avant son ajout à un autre noeud)
        tagFigure.parentNode.insertBefore(tagImage, tagFigure);
        // La méthode Node.removeChild() retire un nœud enfant de l'arbre DOM et retourne le nœud retiré.
        tagFigure.parentNode.removeChild(tagFigure);
    
    let obj2 = document.querySelector("img"); 
    // Ajoute un nouvel attribut ou change la valeur d'un attribut existant pour l'élément spécifié. Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés.
    // Pour obtenir la valeur actuelle d'un attribut, utilisez getAttribute() ; pour supprimer un attribut, appelez removeAttribute().
    ref2= obj2.setAttribute("src", ref);

    obj.parentNode.removeChild(obj);
    // 
    console.log(ref);
})();
