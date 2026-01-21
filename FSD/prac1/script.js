const box = document.querySelector(".box");
const name = document.getElementById("name");

box.style.opacity = "0";
box.style.transition = "0.4s ease";
window.onload = () => box.style.opacity = "1";

box.onmouseenter = () => box.style.transform = "scale(1.75)";
// box.onmouseleave = () => box.style.transform = "scale(0.5)";
box.onmouseleave = () => box.style.transform = "scale(1)";
