/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const cible = document.getElementById("target");
    const table = document.createElement("table");
    for (count = 0; count <= 10; count++) {
        const row = document.createElement("th");
        table.appendChild(row).innerHTML = `${count}`;        
    }   
        for (let count = 1; count <= 10; count++) {
            const col = document.createElement("tr");
            table.appendChild(col).innerHTML = `${count}`;            
        }
        // switch (count) {
        //     case 1:
        //         let data = document.createElement("td");
        //         data.innerHTML = `${count + count}`
        //         col.appendChild(data)    
        //         break;
        //     case 2 :
        //             let data = document.createElement("td");
        //             data.innerHTML = `${count + count}`
        //             col.appendChild(data)
        //         break;
        //     case 3 :
        //             let data = document.createElement("td");
        //             data.innerHTML = `${count + count}`
        //             col.appendChild(data)
        //         break;
        //     case 4 :
        //             let data = document.createElement("td");
        //             data.innerHTML = `${count + count}`
        //             col.appendChild(data)
        //         break;
        //     case 5 : 
        //             let data = document.createElement("td");
        //             data.innerHTML = `${count + count}`
        //             col.appendChild(data)
        //         break;
        //     case 6 :
        //             let data = document.createElement("td");
        //             data.innerHTML = `${count + count}`
        //             col.appendChild(data)
        //         break;
        //     case 7 :
        //             let data = document.createElement("td");
        //             data.innerHTML = `${count + count}`
        //             col.appendChild(data)
        //         break;
        //     case 8 :
        //             let data = document.createElement("td");
        //             data.innerHTML = `${count + count}`
        //             col.appendChild(data)
        //         break;
        //     case 9 : 
        //             let data = document.createElement("td");
        //             data.innerHTML = `${count + count}`
        //             col.appendChild(data)
        //         break;
        //     case 10 : 
        //             let data = document.createElement("td");
        //             data.innerHTML = `${count + count}`
        //             col.appendChild(data)
        //         break;
        // }

    cible.appendChild(table)
    
})();
