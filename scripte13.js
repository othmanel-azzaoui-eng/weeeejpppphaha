const mdp = document.querySelector("#mdp");
const toggle = document.querySelector("#toggle");

// 1) Toggle afficher/masquer
toggle.addEventListener("click", function () {
  if (mdp.type === "password") {
    mdp.type = "text";
    toggle.textContent = "🙈";
  } else {
    mdp.type = "password";
    toggle.textContent = "👁";
  }
});

// 2) Afficher la longueur du mot de passe (dans la console)
mdp.addEventListener("input", function () {
  console.log("Longueur :", mdp.value.length);
});

// 3) Au focus / blur : changer le bouton
mdp.addEventListener("focus", function () {
  toggle.textContent = "👀";
});

mdp.addEventListener("blur", function () {
  if (mdp.type === "password") toggle.textContent = "👁";
  else toggle.textContent = "🙈";
});
