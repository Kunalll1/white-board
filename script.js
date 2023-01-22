// TODO:You have an empty dark webpage, when you click on it anywhere it creates a circle/square shapes at that point. The shape stays there until you refresh the page.

document.addEventListener("click", function (event) {
  const selectBody = document.querySelector("body");
  const createDiv = document.createElement("div");
  selectBody.appendChild(createDiv);
  createDiv.setAttribute("id", "circle");
  //created the Circle
  const x = event.clientX;
  const y = event.clientY;
  createDiv.style.left = `${x}px`;
  createDiv.style.top = `${y}px`;
  //when ever i click the mouse CIRCLE sell create there!
});
