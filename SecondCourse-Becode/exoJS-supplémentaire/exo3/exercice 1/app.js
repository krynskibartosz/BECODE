let a = document.getElementById("image1").addEventListener("mouseover", () => {
    let img = document.getElementById("image1")
    img.removeAttribute("src");
    att = document.createAttribute("src");
    att.value = "./image1_2.jpg";
    img.setAttributeNode(att);
    console.log(img);
})
