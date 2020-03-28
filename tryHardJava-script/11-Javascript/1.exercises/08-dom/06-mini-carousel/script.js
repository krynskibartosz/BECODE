/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    const img = document.querySelector("img");
    let attr = img.getAttribute("src");
    count = 0
    const next = document.getElementById("next").addEventListener("click", () => {
        count++
        console.log(count);
        if(count <= 4){
            img.setAttribute("src", gallery[count]);   
            }
        else if (count >= 5){
            count = 0;
            img.setAttribute("src", gallery[count])
        }
    })
// your code here
})();
