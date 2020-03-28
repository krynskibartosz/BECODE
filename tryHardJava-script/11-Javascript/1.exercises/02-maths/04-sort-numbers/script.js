/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // function sortNumber(a, b) {
        //     return a - b;
        //   }
        // // your code here
        let arr = [];
        let nbr = document.getElementById("numbers").value;
        let ab = arr.push(nbr);
        function sortNumber(a, b) {
            return a - b;
          }
          
          var numArray = [140000, 104, 99];
          ab.sort(sortNumber);
          
          console.log(ab);
    });
})();
