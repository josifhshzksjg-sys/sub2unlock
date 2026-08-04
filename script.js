document.addEventListener("DOMContentLoaded", () => {

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {

const channel = document.getElementById("channel").value.trim();
const video = document.getElementById("video").value.trim();
const telegram = document.getElementById("telegram").value.trim();
const shorturl = document.getElementById("shorturl").value.trim();
const download = document.getElementById("download").value.trim();

if (
channel === "" ||
video === "" ||
telegram === "" ||
shorturl === "" ||
download === ""
){
alert("Please fill all fields.");
return;
}

alert("Information Saved Successfully!");

});
generateBtn.addEventListener("click", () => {

    alert(
`Step 1: Open YouTube Channel

Step 2: Open YouTube Video

Step 3: Join Telegram Channel

Step 4: Open Shortener Link

Step 5: Open Final Download Link`
    );

});

});
