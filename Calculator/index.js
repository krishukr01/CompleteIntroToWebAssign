let screenValue = "0";
let screen = document.querySelector(".screen");
// Event handlers : for handle number click
const handleNumber = (value) => {
  if (screenValue === "0") {
    screenValue = value;
  } else {
    screenValue += value;
  }
  reRender();
};

// Event Handler : For handle symbol click
const handleSymbol = (value) => {
  console.log(screenValue);
  console.log("Symbol is clicked");
};

// Event handlers : For Handle Click
const handleClick = (value) => {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
};

// Re-render after change happens
const reRender = () => {
  screen.innerHTML = screenValue;
};

const init = () => {
  document.querySelector(".calc-buttons").addEventListener("click", (event) => {
    handleClick(event.target.innerHTML);
  });
};

init();
