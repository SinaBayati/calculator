const btnContainer = document.querySelector(".btn-container");
btnContainer.addEventListener("click",clickHandler);
const outputPara = document.querySelector(".output > p");
let inputText = [];

function clickHandler(e){
  const targetID = e.target.id;
  switch(targetID){
    case "addition":
      inputText.push(" + ");
      break;
    case "subtraction":
      inputText.push(" - ");
      break;
    case "division":
      inputText.push(" ÷ ");
      break;
    case "multiplication":
      inputText.push(" x ");
      break;
    case "equality":
      calculate(inputText.join(""));
      break;
    case ".":
      inputText.push(".");
      break;
    case "backspace":
      inputText.pop();
      break;
    case "clear":
      inputText = [];
      break;
    case "000":
      inputText.push("000");
      break;
    case "0":
      inputText.push("0");
      break;
    case "1":
      inputText.push("1");
      break;
    case "2":
      inputText.push("2");
      break;
    case "3":
      inputText.push("3");
      break;
    case "4":
      inputText.push("4");
      break;
    case "5":
      inputText.push("5");
      break;
    case "6":
      inputText.push("6");
      break;
    case "7":
      inputText.push("7");
      break;
    case "8":
      inputText.push("8");
      break;
    case "9":
      inputText.push("9");
      break;
  }
  if(inputText.at(-1) == "000"){
    let targetNum = inputText.at(-2) + "000";
    inputText.splice(inputText.length - 2,2,targetNum)
  }
}

function calculate(inputText){
  const newText = inputText.split(" ");
}