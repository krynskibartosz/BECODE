/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    // to get the value of an input: document.getElementById("element-id").value
    const nbrOne = document.getElementById("op-one");
    const nbrTwo = document.getElementById("op-two");
    const performOperation = operation => {
        switch(operation){
        // perform the operation
            case 'addition':
                alert(+nbrOne.value + +nbrTwo.value)
            break;
            case 'substraction':
                alert(+nbrOne.value - +nbrTwo.value)
            break;
            case 'multiplication':
                alert(+nbrOne.value * +nbrTwo.value)
            break;
            case 'division':
                alert(+nbrOne.value / +nbrTwo.value)
            break;
        }
    };  

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
