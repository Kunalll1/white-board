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
  let createRandomHexCode = () => {
    let randomValue = "123456789abcdef";
    return randomValue[Math.floor(Math.random() * randomValue.length)];
  };
  createDiv.style.backgroundColor = `#${createRandomHexCode()}${createRandomHexCode()}${createRandomHexCode()}${createRandomHexCode()}${createRandomHexCode()}${createRandomHexCode()}`;
  // created random HAX Color Code
  setTimeout(() => {
    createDiv.remove();
  }, 2000);
  //removed the Created Div at 2sec
});
