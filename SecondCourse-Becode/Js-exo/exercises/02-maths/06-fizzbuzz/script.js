/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// démarre une function
(()=> {

    // your code here
    // crée une variable =1
let x = 1;
// crée boucle qui tant que x < 100 alors +1
while(x <=100){
console.log(x);
// Si variable est divisable p/15 et que reste = 0 alors c un multiple de 3 et de 5 alors "fizzbuzz"
if (x % 15 ==0){
    console.log("fizzbuzz");
}
// Si variables est divisé par 3 est que reste = 0 alors "fizz"
else if (x % 3 == 0){
    console.log("fizz");
}
// Si variables est divisé par 5 est que reste = 0 alors "buzz"
else if (x % 5 ==0){
    console.log("buzz")
}
// Si rien alors affiche la valeur de la variables
else {
    console.log(x)
}
// implémente de 1 la variable x
x++;
}
})();
