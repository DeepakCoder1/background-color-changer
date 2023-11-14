// console.log("hello world");
// console.log("hello world");



function backgroundchange() {
    const colors = ["red", "blue", "orange", "aqua", "pink", "purple", "brown", "grey", "yellow"]
    const childrens = Array.from(document.getElementById("parent").children);

    childrens.forEach((element) => {
        element.style.backgroundColor = colors[Math.floor(Math.random() * 9)]

    });

}

document.getElementById('btn').addEventListener("click", backgroundchange)