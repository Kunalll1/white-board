// TODO:You have an empty dark webpage, when you click on it anywhere it creates a circle/square shapes at that point. The shape stays there until you refresh the page.

document.addEventListener("click", function () {
  const selectBody = document.querySelector("body");
  const createDiv = document.createElement("div");
  selectBody.appendChild(createDiv);
  createDiv.setAttribute("id", "circle");
  //created the Circle
});
