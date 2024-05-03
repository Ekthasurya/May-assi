function generateNumber() {
  // generate a random integer(hint : Math.random)
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const numberElement = document.getElementById("number")
    numberElement.textContent =randomNumber;
}

function checkOddEven(num) {
  // logic for even / odd
  const evenOddvalue = num % 2 === 0 ? "The number is even" : "The number is odd";

  const oddEvenElement = document.getElementById("odd-even")
    oddEvenElement.textContent=evenOddvalue
}

window.onload = function () {
  // add event listeners to the button here
  document.getElementById("generate-Number").addEventListener("click",
  function(){
  generateNumber();

    
  })
  
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
