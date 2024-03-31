const btnContainer = document.querySelector(".btn-container");
btnContainer.addEventListener("click",clickHandler);
const outputPara = document.querySelector(".output > p");
let inputText = [];

function clickHandler(e){
  const targetID = e.target.id;
  switch(targetID){
    case "addition":
      inputText.push(" + ");
      render(" + ");
      break;
    case "subtraction":
      inputText.push(" - ");
      render(" - ");
      break;
    case "division":
      inputText.push(" ÷ ");
      render(" ÷ ")
      break;
    case "multiplication":
      inputText.push(" x ");
      render(" x ");
      break;
    case "equality":
      render(" = ");
      calculate(inputText.join(""));
      break;
    case ".":
      inputText.push(".");
      render(".")
      break;
    case "backspace":
      inputText.pop();
      render();
      break;
    case "clear":
      inputText = [];
      outputPara.textContent = "";
      console.log("clicked");
      break;
    case "000":
      inputText.push("000");
      render("000");
      break;
    case "0":
      inputText.push("0");
      render("0");
      break;
    case "1":
      inputText.push("1");
      render("1");
      break;
    case "2":
      inputText.push("2");
      render("2");
      break;
    case "3":
      inputText.push("3");
      render("3");
      break;
    case "4":
      inputText.push("4");
      render("4");
      break;
    case "5":
      inputText.push("5");
      render("5");
      break;
    case "6":
      inputText.push("6");
      render("6");
      break;
    case "7":
      inputText.push("7");
      render("7");
      break;
    case "8":
      inputText.push("8");
      render("8");
      break;
    case "9":
      inputText.push("9");
      render("9");
      break;
  }
  if(inputText.at(-1) == "000"){
    let targetNum = inputText.at(-2) + "000";
    inputText.splice(inputText.length - 2,2,targetNum)
  }
}

function calculate(inputText){
  let inputArr = inputText.split(" ");
  mulDivCalculator(inputArr);
  addSubCalculator(inputArr);
}

function mulDivCalculator(inputArr){
  let decimalPoints = 2;
  for(let index = 0; index < inputArr.length; index++){
    let element = inputArr[index];
    if(element == "x" || element == "÷"){
      let num1 = +inputArr[index - 1];
      let num2 = +inputArr[index + 1];
      if(element == "x"){
        let result = num1 * num2;
        result = result.toFixed(decimalPoints);
        inputArr.splice(index - 1,3,result);
      } else if(element == "÷"){
        if(num2 == 0){
          alert("You cannot divide numbers by zero!");
          location.reload();
        } 
        let result = num1 / num2;
        result = result.toFixed(decimalPoints);
        inputArr.splice(index - 1,3,result);
      }
    }
  }
}

function addSubCalculator(inputArr){
  for(let index = 0; index < inputArr.length; index++){
    let element = inputArr[index];
    if(element == "+" || element == "-"){
      let num1 = +inputArr[index - 1];
      let num2 = +inputArr[index + 1];
      if(element == "+"){
        let result = num1 + num2;
        inputArr.splice(index - 1,3,result);
        index = 0;
      } else if(element == "-"){
        let result = num1 - num2;
        inputArr.splice(index - 1,3,result);
        index = 0;
      }
    }
  }
  render(inputArr[0]);
}

function render(str){
  if(!str){
    let tempText = outputPara.textContent.split("");
    let lastIndex = tempText.length - 1;

    let charsToRemove = (tempText[lastIndex] == " ")
    ? 3 : 1;

    let indexToStartRemoval = (charsToRemove == 3)
      ? lastIndex - 2
      : lastIndex;

    tempText.splice(
      indexToStartRemoval,
      charsToRemove
    );
    console.log(tempText);
    outputPara.textContent = tempText.join("");
  } else {
    outputPara.textContent += str;
  }
}