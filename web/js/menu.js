const menucontent = document.querySelectorAll(".menu_content");

menucontent.forEach((element) => {
  element.style.transition = "color .3s ease-in-out";
});

const oNav = document.getElementById("openNav");
oNav.addEventListener("click", openNav);
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  menucontent.forEach((element) => {
    element.style.color = "#fffff0";
  });
}

const cNav = document.getElementById("closeNav");
cNav.addEventListener("click", closeNav);
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  setTimeout(() => {
    menucontent.forEach((element) => {
      element.style.color = "black";
    });
  }, 300);
}
