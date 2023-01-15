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
		if(digit === "." && this.currentOperationText.includes(".")){
			return;
		}
		this.currentOperation = digit
		this.updateScreen()
	}

	// Process all calculator operations
	processOperation(operation){
		

		// Get current and previous value
		let operationValue
		
		// Converter valores para número(anterior e atual)
		let previuos = +this.previousOperationText.innerText
		let current = +this.currentOperationText.innerText

		

	}
	
	// Change values of the calculartor screen
	updateScreen(){
		this.currentOperationText.innerText += this.currentOperation
	}
} 

const calc = new Calculator(previousOperationText, currentOperationText)


buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const value = e.target.innerText

		// converter valor para número
		if(+value >= 0 || value === "."){
			calc.addDigit(value)
		} else{
			calc.processOperation(value)
		}
	})
});