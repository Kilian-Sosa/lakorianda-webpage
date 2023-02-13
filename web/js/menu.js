const menucontent = document.querySelectorAll(".menu_content");

menucontent.forEach((element) => {
  element.style.transition = "color .3s ease-in-out";
});

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  menucontent.forEach((element) => {
    element.style.color = "#F8F9FA";
  });
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  setTimeout(() => {
    menucontent.forEach((element) => {
      element.style.color = "black";
    });
  }, 300);
}
