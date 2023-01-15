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
	processOperation(operation){
		// Check if current is empty
		if(this.currentOperationText.innerText === ""){
			// Check if previous is not empty, we can change operation
			if(this.previousOperationText.innerText !== ""){
				this.changeOperation(operation)
			}
			return;
			/* 
			the line above is equals to code: 
			else{
			 return;
			}
			*/
		}

		// Get current and previous value
		let operationValue
		
		// Converter valores para número(anterior e atual)
		const previous = +this.previousOperationText.innerText.split(" ")[0]
		const current = +this.currentOperationText.innerText

		switch(operation){
			case "+":
				operationValue = previous + current
				this.updateScreen(operationValue, operation, current, previous)
				break;
			case "-":
				operationValue = previous - current
				this.updateScreen(operationValue, operation, current, previous)
				break;
			case "%":
				operationValue = previous / current
				this.updateScreen(operationValue, operation, current, previous)
				break;
			case "X":
				operationValue = previous * current
				this.updateScreen(operationValue, operation, current, previous)
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
		previous = null
		){
		if(operation === null){
			this.currentOperationText.innerText += this.currentOperation
		} else{
			// Check if value is zero, if it is just add current value
			if(previous == 0){
				operationValue = current
			}

			// Add current value to previous
			this.previousOperationText.innerText = `${operationValue} ${operation}`
			this.currentOperationText.innerText = "" 
		}
	}

	// Change math operation
	changeOperation(operation){
		const mathOperations = ["*", "/", "+", "-"]
		if(!mathOperations.includes(operation)){
			return;
		}
		this.previousOperationText.innerText =  this.previousOperationText.innerText.slice(0, -1) + operation

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