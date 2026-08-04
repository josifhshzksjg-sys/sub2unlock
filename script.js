document.addEventListener("DOMContentLoaded", () => {

const menu = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {

const channel = document.getElementById("channel").value;
const video = document.getElementById("video").value;
const telegram = document.getElementById("telegram").value;
const shorturl = document.getElementById("shorturl").value;

if(channel==="" || video==="" || telegram==="" || shorturl===""){
    alert("Please fill all fields.");
    return;
}

alert("Unlock Link Generated Successfully!");

});

});
