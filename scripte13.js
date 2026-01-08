const mdp = document.querySelector("#mdp");
const toggle = document.querySelector("#toggle");
const len = document.querySelector("#len");
const bar = document.querySelector("#bar");
const etat = document.querySelector("#etat");
const clear = document.querySelector("#clear");

// 1) afficher / masquer
toggle.addEventListener("click", function () {
  if (mdp.type === "password") {
    mdp.type = "text";
    toggle.textContent = "🙈";
  } else {
    mdp.type = "password";
    toggle.textContent = "👁";
  }
});

// 2) longueur + barre de "complexité" (juste basé sur la longueur)
mdp.addEventListener("input", function () {
  const n = mdp.value.length;

  len.textContent = "Longueur : " + n;

  // barre : 0% à 100% (max à 12 caractères)
  let pourcent = (n / 12) * 100;
  if (pourcent > 100) pourcent = 100;
  bar.style.width = pourcent + "%";

  // texte simple
  if (n === 0) etat.textContent = "Complexité : —";
  else if (n < 6) etat.textContent = "Complexité : Faible";
  else if (n < 10) etat.textContent = "Complexité : Moyen";
  else etat.textContent = "Complexité : Fort";
});

// 3) interaction visible : bouton effacer
clear.addEventListener("click", function () {
  mdp.value = "";
  len.textContent = "Longueur : 0";
  bar.style.width = "0%";
  etat.textContent = "Complexité : —";
  mdp.type = "password";
  toggle.textContent = "👁";
});
