// Get references to HTML elements
const nominalLengthInput = document.getElementById("bill"); // Renamed for clarity: was 'bill'
const projectRequiredLengthInput = document.querySelector(".people"); // Renamed for clarity: was 'people'
const projectRequiredNumberInput = document.querySelector(
  ".projectRequiredNumber"
);
const calculateButton = document.querySelector(".five"); // Renamed for clarity: was 'btn5'
const resetButton = document.querySelector(".reset");

// Output display elements
const quantityPerNominalLengthDisplay = document.querySelector(".tipper"); // Renamed for clarity: was 'tipper'
const totalQuantityDisplay = document.querySelector(".quantity"); // Renamed for clarity: was 'quantity'
const offCutLengthDisplay = document.querySelector(".offcuts"); // Renamed for clarity: was 'offcuts'
const extraOffCutDisplay = document.querySelector(".offcutextra"); // Renamed for clarity: was 'offcutextra'

// The following elements seem to be leftovers from a tip calculator and are not used in the current logic.
// Consider removing them from your HTML and JS if they are not needed.
// const biller = document.querySelector('.billper');
// const btn10 = document.querySelector('.ten');
// const btn15 = document.querySelector('.fift');
// const btn25 = document.querySelector('.twent');
// const btn50 = document.querySelector('.fifty');
// const custom = document.querySelector('.custom');

// Event listener for the Calculate button
calculateButton.addEventListener("click", () => {
  // Get numerical values from inputs
  console.log('hello')
  const nominalLength = parseFloat(nominalLengthInput.value);
  const projectRequiredLength = parseFloat(projectRequiredLengthInput.value);
  const projectRequiredNumber = parseFloat(projectRequiredNumberInput.value);

  // Basic validation to prevent division by zero or invalid inputs
  if (
    isNaN(nominalLength) ||
    isNaN(projectRequiredLength) ||
    isNaN(projectRequiredNumber) ||
    nominalLength <= 0 ||
    projectRequiredLength <= 0 ||
    projectRequiredNumber <= 0
  ) {
    alert("Please enter valid positive numbers for all fields.");
    resetCalculator(); // Reset if inputs are invalid
    return; // Stop execution if inputs are invalid
  }

  // Calculate Quantity per Nominal Length
  const quantityPerNominalLength = Math.trunc(
    nominalLength / projectRequiredLength
  );
  quantityPerNominalLengthDisplay.innerHTML = quantityPerNominalLength;

  let totalQuantityNeeded;
  let remainderRequiredLength =
    projectRequiredNumber % quantityPerNominalLength;
  let extraOffCutLength = 0;

  if (remainderRequiredLength !== 0) {
    // If there's a remainder, we need one more nominal length
    totalQuantityNeeded =
      Math.trunc(projectRequiredNumber / quantityPerNominalLength) + 1;

    // Calculate the extra off-cut length for the last nominal piece
    extraOffCutLength =
      nominalLength - projectRequiredLength * remainderRequiredLength;
    extraOffCutDisplay.innerText = `${extraOffCutLength} (${remainderRequiredLength} Nr)`;
  } else {
    // If no remainder, exact fit
    totalQuantityNeeded = projectRequiredNumber / quantityPerNominalLength;
    extraOffCutDisplay.innerText = "0"; // No extra off-cut
  }
  totalQuantityDisplay.innerHTML = totalQuantityNeeded;

  // Calculate Off-Cut Length per nominal piece (remainder from nominalLength / projectRequiredLength)
  const offCutPerNominalPiece = nominalLength % projectRequiredLength;
  // The number of times this off-cut occurs is the total quantity needed
  offCutLengthDisplay.innerText = `${offCutPerNominalPiece} (${totalQuantityNeeded} Nr)`;

  // Call a function for general input validation/display updates (if needed)
  validateInputs();
});

// Function to handle input validation and display resetting for zeros/negatives
function validateInputs() {
  if (nominalLengthInput.value <= 0 || projectRequiredLengthInput.value <= 0) {
    quantityPerNominalLengthDisplay.innerHTML = "0"; // Changed from "0.00" as it's a count
    // biller.innerHTML = "0.00"; // This element is not used in the current HTML/logic
  }
}

// Function to reset all inputs and display outputs
function resetCalculator() {
  nominalLengthInput.value = "";
  projectRequiredLengthInput.value = "";
  projectRequiredNumberInput.value = "";

  quantityPerNominalLengthDisplay.innerHTML = "0"; // Set to "0" instead of "$0.00" for quantity
  totalQuantityDisplay.innerHTML = "0";
  offCutLengthDisplay.innerHTML = "0";
  extraOffCutDisplay.innerHTML = "0";
  // biller.innerHTML = "$0.00"; // This element is not used in the current HTML/logic
  // if (custom) custom.value = ''; // Only try to reset if 'custom' exists
}

// Event listener for the Reset button
resetButton.addEventListener("click", resetCalculator);