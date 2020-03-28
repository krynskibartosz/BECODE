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
    const img = document.getElementById("source");
    const att = img.getAttribute("data-image");
    console.log(att);
    const node = document.createElement("img");
    node.setAttribute("src",att)
    const ok = document.getElementById("target").appendChild(node);
    console.log(ok);
    ok.style.height = "200px";
    ok.style.width = "200px";
    img.remove(img)
})();
