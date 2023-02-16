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

const btnUp = document.getElementById("btnUp");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
});

btnUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});