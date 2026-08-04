// RONYFFOFFICIAL - Part 1

const btn = document.querySelector("button");

btn.addEventListener("click", function () {

    const inputs = document.querySelectorAll("input");

    const youtubeChannel = inputs[0].value.trim();
    const youtubeVideo = inputs[1].value.trim();
    const telegram = inputs[2].value.trim();
    const download = inputs[3].value.trim();

    if (
        youtubeChannel === "" ||
        youtubeVideo === "" ||
        telegram === "" ||
        download === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    const randomCode = Math.random().toString(36).substring(2, 8);

    const shortLink =
        window.location.origin +
        window.location.pathname.replace("index.html", "") +
        "#" +
        randomCode;

    navigator.clipboard.writeText(shortLink);

    alert(
        "Link Generated Successfully!\n\n" +
        shortLink +
        "\n\n(Link copied to clipboard)"
    );

});
