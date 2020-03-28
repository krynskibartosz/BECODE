//!1 
// let a = "Bartosz";
// alert(a);
//! 2
// let nom = "Krynski";
// prenom = "Rafal";
// ville = "Lasne";
// alert(`${nom} \n ${prenom} \n ${ville}`);
// !3
// const firstName = prompt(`prénom :`);
// alert(`Bonjour ${name}`)
//!4
const nameAnswer = document.getElementById("nom");
prenomAnswer = document.getElementById("prenom");
villeAnswer = document.getElementById("ville");
const click = document.getElementById("valider").addEventListener('click', () => {
    alert(`Bonjour ${nameAnswer.value} ${prenomAnswer.value} de ${villeAnswer.value}`)
});
//!5
// let first = document.getElementById("premier_nombre");
// second = document.getElementById("deuxieme_nombre");
// réponse = document.getElementById("valider").addEventListener("click", () =>{
//     alert (first.value);
//     alert(second.value)
//     let b = first.value * second.value;
//     alert(Math.trunc(b));
// });
//!6
// réponse = document.getElementById("valider").addEventListener("click", () =>{
//     let first = document.getElementById("premier_nombre");
//     second = document.getElementById("deuxieme_nombre");
//     alert(first.value / second.value);
// });

//!7
// let pointure = document.getElementById("pointure");
// annee = document.getElementById("annee");
// click = document.getElementById("valider").addEventListener("click",() => {
// let b = (pointure.value * 2 + 5)*50 - annee.value + 1766;
// alert (b);
// })

//! 8
// let age = document.getElementById("age");
// btn = document.getElementById("valider").addEventListener('click', () => {
    // (age.value >= 18 ? alert("vous etes majeur!") : alert("vous etes mineur"))
// })
// //! First part is done.
