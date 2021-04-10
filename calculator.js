//initialize variables
const calculator = {
    initialDisplayValue: '0',
    firstOperand: null,
    operator: null;
    
  }
  
  const numberValues = document.querySelectorAll('[data-value]');
  const operatorValues = document.querySelectorAll('.operatorKey')
  const clearScreen = document.getElementsByClassName('clearKey');
  const equalKey = document.querySelector('.equals');
  const oldValue = document.querySelector('.memKey');
  
  function updateCalculatorDisplay(){
    const displayScreenValue = document.querySelector('.calculatorDisplay')
    displayScreenValue.value= calculator.initialDisplayValue;
      
  }
  updateCalculatorDisplay()
  
      numberValues.forEach(button => {
          button.addEventListener('click', ()=>{
               numberValues.innerText = displayScreenValue.value 
            updateCalculatorDisplay();
          })
      })
  
  chooseOperator(){
    
  }
  
  operationsCalculator(){
  
  }
  
  operationClearScreen(){
  
  }
  
  deleteNum(){
    
  }
  


