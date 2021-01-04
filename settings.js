const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(focusTimeInput);
  localStorage.setItem("focusTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector(".start").style.transform = "scale(1)";
  clearTimeout(initial);
  setProgress(0);
  mindiv.textContent = 0;
  secdiv.textContent = 0;
});

document.querySelector(".pause").addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    initial = setTimeout("decremenT()", 60);
    document.querySelector(".pause").textContent = "pause";
    document.querySelector(".pause").classList.remove("resume");
  } else {
    clearTimeout(initial);
    document.querySelector(".pause").textContent = "resume";
    document.querySelector(".pause").classList.add("resume");
    paused = true;
  }
});
