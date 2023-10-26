
const celsiusToFahrenheit = (celsius) => (celsius * 1.8) + 32;


const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;


const convertTemperature = () => {
  const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
  const unitSelect = document.getElementById("unitSelect");
  const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

  let result;
  if (selectedUnit === "C") {
    result = celsiusToFahrenheit(temperatureInput);
    document.getElementById("result").textContent = `${temperatureInput}°C is equal to ${result}°F`;
  } else if (selectedUnit === "F") {
    result = fahrenheitToCelsius(temperatureInput);
    document.getElementById("result").textContent = `${temperatureInput}°F is equal to ${result}°C`;
  } else {
    document.getElementById("result").textContent = "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
  }
};

document.getElementById("convertButton").addEventListener("click", convertTemperature);
