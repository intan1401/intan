document.addEventListener("DOMContentLoaded", function () {
  const asideDetail = document.getElementById("detail");
  const hindiaBtn = document.getElementById("hindiaBtn");
  const realityclubBtn = document.getElementById("realityclubBtn");
  const arcticmonkeysBtn = document.getElementById("arcticmonkeysBtn");

  hindiaBtn.addEventListener("click", function () {
    window.location.href = "hindia.html";
  });

  realityclubBtn.addEventListener("click", function (e) {
    e.preventDefault();
    asideDetail.innerHTML = document.getElementById("realityclub").innerHTML;
  });

  arcticmonkeysBtn.addEventListener("click", function (e) {
    e.preventDefault();
    asideDetail.innerHTML = document.getElementById("arcticmonkeys").innerHTML;
  });
});
