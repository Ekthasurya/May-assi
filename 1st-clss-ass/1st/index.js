// index.js

//  import the crypto module
const crypto = require("crypto");


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function sub(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function mult(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (parseFloat(b) === 0) {
        return "Cannot divide by zero";
    }
    return parseFloat(a) / parseFloat(b);
}

function sin(a) {
    return Math.sin(parseFloat(a));
}

function cos(a) {
    return Math.cos(parseFloat(a));
}

// Function to calculate tangent
function tan(a) {
    return Math.tan(parseFloat(a));
}

function random(length) {
    if (!length) {
        return "Provide length for random number generation.";
    }
    const randomBytes = crypto.randomBytes(parseInt(length));
    return randomBytes.toString('hex').slice(0, length);
}

//  get a commands using process.argv
const args =process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1).map(Number);

// complete the  function


switch (operation) {

    case "add":
       console.log(add(numbers[0], numbers[1]));

        break;

    case "sub":
     console.log(sub(numbers[0],numbers[1]))
    
        break;
        
        case "mult":
     console.log(mult(numbers[0],numbers[1]))
    
        break;

        case "divide":
            console.log(divide(numbers[0],numbers[1]))
           
               break;

    case "sin":
   console.log(sin(numbers[0]))
               
    break;

    case "cos":
        console.log(cos(numbers[0]))
                    
         break;
    
         case "tan":
            console.log(tan(numbers[0]))
                        
             break;
    
             case 'random':
             console.log(random(numbers[0]))
                break;

    
  
    default:
      console.log("Invalid operation");
  }
  