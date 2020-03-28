document.getElementById("image1").addEventListener("mouseover", () => {
    let a = document.getElementById("image1");
    a.style.borderRight = "3px solid red";
    console.log(a);
})

document.getElementById("image1").addEventListener("mouseleave", () => {
    let a = document.getElementById("image1");
    a.style.borderRight = "none";
    console.log(a);
})

//! done