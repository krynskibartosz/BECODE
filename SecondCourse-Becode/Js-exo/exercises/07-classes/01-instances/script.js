/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    // your code here
    const instances_cat = () => {
        // var qui contient les propriétées du constructor
        const inst_one = new Cat("Skitty", 9);
        const inst_two = new Cat("Pixel", 6);   
        console.log(inst_one);
        console.log(inst_two);
    }

    document.getElementById("run").addEventListener("click", instances_cat);

})();
