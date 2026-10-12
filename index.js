// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressed = event && event.key ? event.key : ''
  const displayElement = document.getElementById('keyPressDisplay')

  if (displayElement) {
    displayElement.textContent = `Key pressed: ${keyPressed}`
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  const target = event && event.target ? event.target : document.getElementById('textInput')
  const userInput = target && target.value !== undefined ? target.value : ''
  const displayElement = document.getElementById('textInputDisplay')

  if (displayElement) {
    displayElement.textContent = `You typed: ${userInput}`
  }
}

// Attach Event Listeners
function setupEventListeners() {
  const changeColorButton = document.getElementById('changeColorButton')
  const resetColorButton = document.getElementById('resetColorButton')
  const textInput = document.getElementById('textInput')

  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor)
  }

  if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor)
  }

  document.addEventListener('keydown', displayKeyPress)

  if (textInput) {
    textInput.addEventListener('input', displayUserInput)
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners)
  } else {
    setupEventListeners()
  }
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}