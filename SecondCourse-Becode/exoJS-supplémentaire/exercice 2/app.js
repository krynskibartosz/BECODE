// !1 done
// let click = document.getElementById("surface").addEventListener("click", () => {
//     largeur = document.getElementById("l")
//     longueur = document.getElementById("L")
//     alert(largeur.value * longueur.value)
// });

//!2 done
// document.getElementById("surface").addEventListener("click", () => {
//     let rayon = document.getElementById("rayon");
//     alert((rayon.value*2) * Math.PI);
// });

//!3 done
// let a = 2;
// b = 3;
// affiche = (x) => {
//     one = x * b;
//     two = x * a;
//     alert(one);
//     alert(two);
// };
// document.getElementById("valid").addEventListener("click", () =>{
//     return affiche(4);
// })
//!4 done
//? Sans avoir utilisée la méthode .length 
// let tab = [-2, 1, 4];
// additionne = (x) => {
//     let a = tab[0] * x;
//     b = tab[2] * x;
//     alert(a);
//     alert(b);
// };
// let affiche = document.getElementById("btn").addEventListener("click", () => {
//     return additionne(2);
// });
//!5 done
//? c quoi la valeur de a & fais sur le readme

//!6 done
// let tab = [-2, 1, 4];
// soustrait = (x) => {
//     a = x - tab[0];
//     (Math.sign(x) == 1 || 0 ? alert(a) : alert("Nombre négatif!"));
//     alert(x - tab[2])
// };
// let affiche = document.getElementById("run").addEventListener("click", () => {
//     return soustrait(3);
// })

//!7 done
//! Création de l'élément button
// let btnCreat = document.createElement("button");
// //! rajout du texte dans le bouton
// btnCreat.innerHTML = "Press";
// //! Crée un enfant qui sera la var BtnCreat
// document.body.appendChild(btnCreat);
// //! Création d'un attribut id
// att = document.createAttribute("id"); 
// //! rajoue de la valeur de l'attribut dans la var att  
// att.value = "run";
// //! On rajoute l'attribut dans le btn
// btnCreat.setAttributeNode(att);
// clickBtn = document.getElementById("run").addEventListener("click", () => {
//     choix = prompt(`choose a number between 1, 2 & 3`)
//     switch(choix){
//         case "1" :
//             alert("1. Merci");
//             break;
//         case "2" : 
//             alert("2. Bonjour");
//             break
//         case "3" :
//             alert("3. Au revoir");
//             break;
//         default :
//             alert("Pardon, que voulez-vous ?")
//     }
// })
//!8 done
// let btnCreat = document.createElement("button");
// btnCreat.innerHTML = "Touch";
// document.body.appendChild(btnCreat);
// let att = document.createAttribute("id"); 
// att.value = "run";
// btnCreat.setAttributeNode(att);
// let dayOfWeek = document.getElementById("run").addEventListener("click", () => {
//     switch (new Date().getDay()) {
//         case 0:
//             alert("Sunday");
//             break;
//         case 1:
//             alert("Monday");
//             break;
//         case 2:
//             alert("Tuesday");
//             break;
//         case 3:
//             alert("Wednesday");
//             break;
//         case 4:
//             alert("Thursday");
//             break;
//         case 5:
//             alert("Friday");
//             break;
//         case 6:
//             alert("Saturday");
//         }
// })
//!9
// let btnCreat = document.createElement("button");
// btnCreat.innerHTML = "Touch";
// document.body.appendChild(btnCreat);
// let att = document.createAttribute("id"); 
// att.value = "run";
// btnCreat.setAttributeNode(att);
// let testWhile = document.getElementById("run").addEventListener("click", () => {
// })
//! 10 done
// let btnCreat = document.createElement("button");
// btnCreat.innerHTML = "Touch";
// document.body.appendChild(btnCreat);
// let att = document.createAttribute("id"); 
// att.value = "run";
// btnCreat.setAttributeNode(att);
// let click = document.getElementById("run").addEventListener("click", () => {
//     somme = () => {
//         let count = 0; 
//         arr = [];
//         for (let count = 0; count < 3; count++) {
//             let  ask = prompt("Saisi un nombre");
//             if(count === 0){
//                 let a = ask
//                 arr.push(a) 
//                 console.log(arr);
//             }
//             else if(count === 1){
//                 let b = ask
//                 arr.push(b)
//                 console.log(arr);
//             }
//             else{
//                 let c = ask;
//                 arr.push(c);
//                 console.log(arr);
//             }
//     }
//     alert(+arr[0] + +arr[1] + +arr[2]);
//     }
//     somme();
// })       
//!11 fcking done!!!!!!!!
// let btnCreat = document.createElement("button");
// btnCreat.innerHTML = "Touch";
// document.body.appendChild(btnCreat);
// let att = document.createAttribute("id"); 
// att.value = "run";
// btnCreat.setAttributeNode(att);
// let click = document.getElementById("run").addEventListener("click", () => {
// calculmoyenne();
// })

// let calculmoyenne = () =>{
// let count = 0
// arr = [];
// while (count < 3) {
// count++
// let first = prompt("entrer un nombre entier");
// base = parseInt(first, 10);
// ok = Number.isInteger(base);
// arr.push(base)
// console.log(base);
// console.log(ok);
// console.log(arr);
// let moy = arr[0] + arr[1] + arr[2];
// if (ok === false) {
//     alert(`${base} n'est pas un nombre entier`);
//     first
// };
// }
// while (Math.sign(base) == 1 || base == null ){
//     let mem = base;
//     alert(arr[0] + arr[1] + arr[2]);
//     break;
// }
// if (Math.sign(base) == -1){
//     alert((arr[0] + arr[1] + arr[2])/3);
//     };
// }
//!12 done
// let arr = []
// for (let count = 0; count < 7; count++) {
//     let btnCreat = document.createElement("button");
//     document.body.appendChild(btnCreat);
//     let att = document.createAttribute("id");
//     att.value = `run ${count}`;
//     // arr.setAttributeNode(att);
//     console.log(btnCreat);
//     arr.push(btnCreat)
//     console.log(arr);
//     }
//     arr[0].innerHTML = "Fin du programme";
//     arr[1].innerHTML = "Celsius vers Fahrenheit";
//     arr[2].innerHTML = "Celsius vers Kelvin";
//     arr[3].innerHTML = "Fahrenheit vers Celsius";
//     arr[4].innerHTML = "Fahrenheit vers Kelvin";
//     arr[5].innerHTML = "Kelvin vers Celsius";
//     arr[6].innerHTML = "Kelvin vers Fahrenheit";
//     arr[0].addEventListener("click",() => {
//         prompt("Convertir")
//     })
//     arr[1].addEventListener("click",() => {
//         let ctof = prompt("Convertir");
//         one = ctof;
//         answerone= (one * 1.8 + 32 );
//         alert(`${answerone}°`)
//     })
//     arr[2].addEventListener("click",() => {
//         let ctok = prompt("Convertir");
//         two = ctok;
//         answerTwo = two + 273.15;
//         alert(`${answerTwo}°`);
//     })
//     arr[3].addEventListener("click",() => {
//         let ftoc = prompt("Convertir");
//         tree = ftoc;
//         answertree = (tree - 32)/1.8;
//         alert(`${answertree}°`)

//     })
//     arr[4].addEventListener("click",() => {
//         let ftok = prompt("Convertir");
//         four = ftok;
//         answerfour = (ftok + 459,67)/1.8;
//         alert(`${answerfour}°`)
//     })
//     arr[5].addEventListener("click",() => {
//         let ktoc =prompt("Convertir");
//         five = ktoc;
//         answerFive = ktoc + 273.15;
//         alert(`${answerFive}°`);
//     })
//     arr[6].addEventListener("click",() => {
//         let ktof = prompt("Convertir");
//         six = ktof;
//         answerSix = (ktof - 273.15)*1.8 +32
//         alert(answerSix)
//     })

    //     const element = array[count];        
    // let clickOne = document
// //!13done
// let btnCreat = document.createElement("button");
// btnCreat.innerHTML = "Touch";
// document.body.appendChild(btnCreat);
// let att = document.createAttribute("id"); 
// att.value = "run";
// btnCreat.setAttributeNode(att);
// let click = document.getElementById("run").addEventListener("click", () => {
// calculIMC()
// })
// let calculIMC = () => {
//     //! find IMC
//     let a = prompt("Votre poids");
//     b = prompt("Votre taille");
//     c = Math.pow(b,2)
//     d = c.toFixed(2);
//     console.log(d);
    
//     result = a / d;
//     alert(result.toFixed(2));
//     //! condition pour mettre l'IMC dans la bonne catégorie
//     if(result < 16.5){
//         alert("dénutrition ou famine");
//     }
//     else if(result >= 16.5 && result <= 18.5){
//         alert("maigreur");
//     }
//     else if(result >= 18.5 && result <= 25){
//         alert("corpulence plus ou moin normale");
//     }
//     else if(result >= 25 && result <= 30){
//         alert("surpoids");
//     }
//     else if(result >= 30 && result <= 35){
//         alert("obésité modéré");
//     }
//     else if(result >= 35 && result <= 40){
//         alert("obésité sévère");
//     }
//     else if (result > 40){
//         alert("obésité morbide")
//     }
// }