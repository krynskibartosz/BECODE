/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // let img_tag = document.getElementsByTagName("img")[0]; 
    // img_one= img_tag.getAttribute("src");
    // console.log(img_one);
    // // console.log(img_tag);
    // let i = 1;
    // document.getElementsByTagName("img")[0].addEventListener("mouseover", () =>{
    // // (i === img_tag.length? i=O : i++);
    // // img_two = img_tag.getAttribute("data-hover");
    // // console.log(img_two)
    // img_tag.setAttribute("src", img_tag[i]);

    // })

    // 1) récupérer image
    let check = document.getElementsByTagName("img");
    // Boucle qui analyse élément du tableau
    for (let i = 0; i < check.length; i++) {
        console.log(check[i]);
        
    }
    // 2) récupérer data over
    let data = check[0].dataset.hover;
    console.log(data);
    // 3) rajouter la source au survol sur image
    check[0].addEventListener("mouseover", () =>{
        check[0].attributes = data;
    });
})();
