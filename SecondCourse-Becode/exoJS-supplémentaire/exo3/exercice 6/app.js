let one = document.getElementById("image1");
two = document.getElementById("image2");
tree = document.getElementById("image3");
four = document.getElementById("image4");
five = document.getElementById("image5");

over = document.getElementsByTagName("body")[0].addEventListener("mouseover", () => {
    setFirstImg()
})
leave = document.getElementsByTagName("body")[0].addEventListener("mouseleave", () => {
    setSecondImg()
})

setFirstImg = () => {
    attOne = document.createAttribute("src");
    attOne.value = "./image1_2.jpg";
    attTwo = document.createAttribute("src");
    attTwo.value = "./image2_2.jpg";
    attTree = document.createAttribute("src");
    attTree.value = "./image3_2.jpg";
    attFour = document.createAttribute("src");
    attFour.value = "./image4_2.jpg";
    attFive = document.createAttribute("src");
    attFive.value = "./image5_2.jpg";
    one.setAttributeNode(attOne);
    two.setAttributeNode(attTwo);
    tree.setAttributeNode(attTree);
    four.setAttributeNode(attFour);
    five.setAttributeNode(attFive);
}

setSecondImg = () => {
    attOne = document.createAttribute("src");
    attOne.value = "./image1.jpg";
    attTwo = document.createAttribute("src");
    attTwo.value = "./image2.jpg";
    attTree = document.createAttribute("src");
    attTree.value = "./image3.jpg";
    attFour = document.createAttribute("src");
    attFour.value = "./image4.jpg";
    attFive = document.createAttribute("src");
    attFive.value = "./image5.jpg";
    one.setAttributeNode(attOne);
    two.setAttributeNode(attTwo);
    tree.setAttributeNode(attTree);
    four.setAttributeNode(attFour);
    five.setAttributeNode(attFive);
}
//!donne w8 2 function?