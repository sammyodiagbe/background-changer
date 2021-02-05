const trigger = document.getElementById("trigger");
const colors = ["#45df67", "orange", "dodgerblue", "slateblue", "pink", "blue"];
const body = document.getElementsByTagName("body")[0];

trigger.addEventListener("click", () => {
  body.style.background = colors[Math.floor(Math.random() * colors.length)];
});
