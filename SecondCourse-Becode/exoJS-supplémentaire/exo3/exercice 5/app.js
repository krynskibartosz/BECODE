let one = document.getElementById("image1");
two = document.getElementById("image2");
tree = document.getElementById("image3");
four = document.getElementById("image4");
five = document.getElementById("image5");

over = document.getElementsByClassName("conteneur")[0].addEventListener("mouseover", () => {
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
})
//! done with bonus