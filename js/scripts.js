const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator{
	constructor(previousOperationText, currentOperationText){
		this.previousOperationText = previousOperationText
		this.currentOperationText = currentOperationText
		this.currentOperation = ""
	}

	// add digit to calculator screen
	addDigit(digit){
		// check if current operation already has a dot
		if(digit === "," && this.currentOperationText.includes(",")){
			return;
		}
		this.currentOperation = digit
		this.updateScreen()
	}

	// Process all calculator operations
	processOperation(operation, showValueCurrent = false){
		// Check if current is empty
		if(this.currentOperationText.innerText === "" && operation !== "C"){
			// Check if previous is not empty, we can change operation
			if(this.previousOperationText.innerText !== ""){
				this.changeOperation(operation)
			}
			return;
		}

		// Get current and previous value
		let operationValue
		
		// Converter valores para número(anterior e atual)
		const previous = +this.previousOperationText.innerText.split(" ")[0]
		const current = +this.currentOperationText.innerText

		switch(operation){
			case "+":
				operationValue = previous + current
		
				if(!showValueCurrent){
					this.updateScreen(operationValue, operation, current, previous)
				}
				else{				
					this.updateScreen(operationValue, operation, current, previous, true)
				}
				break;

			case "-":
				operationValue = previous - current
		
				if(!showValueCurrent){
					this.updateScreen(operationValue, operation, current, previous)
				}
				else{				
					this.updateScreen(operationValue, operation, current, previous, true)
				}
				break;

			case "%":
				operationValue = previous / current
				
				if(!showValueCurrent){
					this.updateScreen(operationValue, operation, current, previous)
				}
				else{				
					this.updateScreen(operationValue, operation, current, previous, true)
				}
				break;
			
			case "X":
				operationValue = previous * current
				
				if(!showValueCurrent){
					this.updateScreen(operationValue, operation, current, previous)
				}
				else{				
					this.updateScreen(operationValue, operation, current, previous, true)
				}
				break;
			
			case "DEL":
				this.processDelOperator()
				break;
			case "CE":
				this.processClearCurrentOperation()
			break;
			case "C":
				this.processClearOperation()
			break;
			case "=":
			this.processEqualOperator();
			break;
			default:
				return;
		}

	}
	
	// Change values of the calculartor screen
	updateScreen(
		operationValue = null, 
		operation = null, 
		current = null, 
		previous = null, 
		showValueCurrent = false
		){
		if(operation === null){
			this.currentOperationText.innerText += this.currentOperation
		} else{
			// Check if value is zero, if it is just add current value
			if(previous == 0){
				operationValue = current
			}

			if(!showValueCurrent){
				// Add current value to previous
				this.previousOperationText.innerText = `${operationValue} ${operation}`
				this.currentOperationText.innerText = "" 
			}
			else{
				// Add current value to current
				this.previousOperationText.innerText = "" 
				this.currentOperationText.innerText = `${operationValue}`
			}
			
		}
	}

	// Change math operation
	changeOperation(operation){
		const mathOperations = ["X", "%", "+", "-"]
		if(!mathOperations.includes(operation)){
			return;
		}
		this.previousOperationText.innerText =  this.previousOperationText.innerText.slice(0, -1) + operation
	 }

	 // Delete the last digit 
	 processDelOperator(){
		this.currentOperationText.innerText = 
		this.currentOperationText.innerText.slice(0, -1)
	}

	// Clear current operation
	processClearCurrentOperation(){
		this.currentOperationText.innerText = "";
	}

	// Clear all operations
	processClearOperation(){
		this.currentOperationText.innerText = "";
		this.previousOperationText.innerText = "";	
	}

	// Processo an operation
	processEqualOperator(){
		const operation = previousOperationText.innerText.split(" ")[1]	

		this.processOperation(operation, true)
	}
}

const calc = new Calculator(previousOperationText, currentOperationText)


buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const value = e.target.innerText

		// converter valor para número
		if(+value >= 0 || value === ","){
			calc.addDigit(value)
		} else{
			calc.processOperation(value)
		}
	})
});