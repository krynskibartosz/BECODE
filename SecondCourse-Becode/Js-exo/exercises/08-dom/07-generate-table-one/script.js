/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    window.addEventListener("load", function(){
        // création d'une var contenant un tableau
        var data = ["Lutgarde", "leffe", "cuvé des trolls", "jup", "maes", "triple karmelite", "bertinchamps", "la baggare", "lech","zubrowska"];
    
        var perrow = 1, // 3 items per row
        // créee la table dans l'html
            html = "<table><tr>";
    
        //Boucle qui analyse le tableau et rajout des cellules du tableaux
        for (var i=0; i<data.length; i++) {
            html += "<td>" + data[i] + "</td>";
          // Break into next row
        var next = i+1;
        if (next%perrow==0 && next!=data.length) {
            html += "</tr><tr>";
        }
        }
        html += "</tr></table>";
    
        // ATTACH HTML TO CONTAINER
        document.getElementById("target").innerHTML = html;
    });
})();
