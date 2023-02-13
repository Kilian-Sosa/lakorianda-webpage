window.addEventListener("resize", function() {
    let image = document.querySelector("#headImg");
    let menus = document.querySelectorAll(".navbar");
    let totalHeight = 0;
    for (let i = 0; i < menus.length; i++) {
        totalHeight += menus[i].offsetHeight;
    }
    image.style.width = "100%";
    image.style.height = window.innerHeight - totalHeight + "px";
});