let screenValue = "0";
let currentTotal = 0;
let previousOperator;

let screen = document.querySelector(".screen");

// Handle Back-Arrow
const handleBackArrow = () => {
  if (screenValue.length === 1) {
    screenValue = "0";
  } else {
    screenValue = screenValue.substring(0, screenValue.length - 1);
  }
};

const handleMathOperation = (intScreenValue) => {
  if (previousOperator === "+") {
    currentTotal += intScreenValue;
  } else if (previousOperator === "-") {
    currentTotal -= intScreenValue;
  } else if (previousOperator === "×") {
    currentTotal *= intScreenValue;
  } else if (previousOperator === "÷") {
    currentTotal /= intScreenValue;
  }
};

const handleMath = (value) => {
  if (screenValue === "0") {
    return;
  }
  let intScreenValue = parseInt(screenValue);
  if (currentTotal === 0) {
    currentTotal = intScreenValue;
  } else {
    handleMathOperation(intScreenValue);
  }
  previousOperator = value;
  screenValue = "0";
};

// Event handlers : for handle number click
const handleNumber = (value) => {
  if (screenValue === "0") {
    screenValue = value;
  } else {
    screenValue += value;
  }
};

// Event Handler : For handle symbol click
const handleSymbol = (symbol) => {
  switch (symbol) {
    case "C": {
      screenValue = "0";
      break;
    }
    case "=": {
      if (previousOperator === null) {
        return;
      }
      handleMathOperation(parseInt(screenValue));
      previousOperator = null;
      screenValue = "" + currentTotal;
      currentTotal = 0;
      break;
    }
    case "←": {
      handleBackArrow();
      break;
    }
    case "÷": {
      handleMath(symbol);
      break;
    }
    case "×": {
      handleMath(symbol);
      break;
    }
    case "-": {
      handleMath(symbol);
      break;
    }
    case "+": {
      handleMath(symbol);
      break;
    }
  }
};

// Event handlers : For Handle Click
const handleClick = (value) => {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }

  reRender();
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
