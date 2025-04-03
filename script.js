const fases = document.querySelectorAll(".fases");
const fasestexto = document.querySelectorAll(".fases-texto");

//Abrindo as fases amarelas
fases.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (fasestexto[index].style.display === "flex") {
      fasestexto[index].style.display = "none";
    } else {
      fasestexto.forEach((texto) => (texto.style.display = "none"));

      fasestexto[index].style.display = "flex";
    }
  });
});
