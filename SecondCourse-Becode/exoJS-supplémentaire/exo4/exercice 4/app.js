let a = document.getElementsByName("button")[0].addEventListener("click", () => {
    let mdp = document.getElementById("motdepasse").value;
    mdpConfirm = document.getElementById("confirmation").value;

    mdp === mdpConfirm ?
        (document.getElementById("motdepasse").style.border = "2px solid green",
        document.getElementById("confirmation").style.border = "2px solid green"
    ):(
        document.getElementById("motdepasse").style.border = "2px solid red",
        document.getElementById("confirmation").style.border = "2px solid red"
    );
})




