const bodymira = document.querySelector("body");

bodymira.style.backgroundColor = '#008888'

bodymira.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const Princess = document.createElement("span");
  Princess.style.left = xPos + "px";
  Princess.style.top = yPos + "px";
  const size = Math.random() * 70;
  Princess.style.width = size + "px";
  Princess.style.height = size + "px";
  bodymira.appendChild(Princess);
  setTimeout(() => {
    Princess.remove();
  }, 3000);
});