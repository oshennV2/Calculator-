function add(a,b){
    parseInt(a,b)
    return a + b
}

function subtract(a,b){
    parseInt(a,b)

    return a - b
}

function multiply(a,b){
    parseInt(a,b)

    return a * b 
}

function divide(a,b){
    parseInt(a,b)

    return a/b 
}


function operate( a,operate, b){
   switch (operate) {
    case '+':
        return add(a,b)
        
        break;
   
    case '-':
        return subtract(a,b)
        break;
    
    case '*':
        return multiply(a,b)
        break;

    case '/':
        return divide(a,b)
            break;
            default:
      console.error('Invalid operation');
      return undefined;
   }
}

let display = document.querySelector(".display")
let numBtn = document.querySelectorAll(".num")

// number button that also displays the nums 
let arrayStore = []
let currentNumber = ''; // To accumulate digits

numBtn.forEach(num => {
    num.addEventListener("click", function(){
        display.textContent += num.textContent;

        if (!isNaN(num.textContent)) {
            // If it's a number, accumulate digits
            currentNumber += num.textContent;
        } else {
            // If it's an operator, push the accumulated number and the operator
            if (currentNumber !== '') {
                arrayStore.push(parseFloat(currentNumber));
                currentNumber = ''; // Reset the accumulator
            }
            
            arrayStore.push(num.textContent);
        }

        console.log(arrayStore);
    });
});


//clear button 
let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", function(){
    display.textContent = " "
    arrayStore =[]
})


let equalBtn = document.querySelector(".equal")

// does the calculation 
 equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", function() {
    // Push the last accumulated number (if any) before calling operate
    if (currentNumber !== '') {
        arrayStore.push(parseFloat(currentNumber));
        currentNumber = ''; // Reset the accumulator
    } 
    let result = operate(...arrayStore);
    display.textContent = ""
    display.textContent += result
});

// HTML Problems 
// 1.making the caculator bigger 
// 2.making it look better
// 3. display keeping it size 

// Javascript Problems
// 4. added numbers with more digits 
// 5. more operators 

// make 2 arrays and when a operater is hit is adds it to a array  