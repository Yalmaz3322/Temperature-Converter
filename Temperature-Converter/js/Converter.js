// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () 
{
    // Get references to HTML elements
    const temperatureInput = document.getElementById("temperature");
    const fromScaleSelect = document.getElementById("FromScale");
    const toScaleSelect = document.getElementById("ToScale");
    const convertButton = document.getElementById("convertButton");
    const resultParagraph = document.getElementById("result");
  
    // Function to calculate the converted temperature
    function convertTemperature() 
    {
      const temperature = parseFloat(temperatureInput.value);
      const fromScale = fromScaleSelect.value;
      const toScale = toScaleSelect.value;
  
      // Perform temperature conversion
      let convertedTemperature;
  
      if (fromScale === "Celsius") 
      {
        if (toScale === "Fahrenheit") 
            {
                convertedTemperature = (temperature * 9/5) + 32;
            } 
        else if (toScale === "Kelvin") 
            {
                convertedTemperature = temperature + 273.15;
            }
      } 
      else if (fromScale === "Fahrenheit") 
      {
        if (toScale === "Celsius") 
            {
                convertedTemperature = (temperature - 32) * 5/9;
            } 
        else if (toScale === "Kelvin") 
            {
                convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
            }
        } 
      else if (fromScale === "Kelvin") 
      {
        if (toScale === "Celsius") 
            {
                convertedTemperature = temperature - 273.15;
            } 
        else if (toScale === "Fahrenheit") 
            {
                convertedTemperature = ((temperature - 273.15) * 9/5) + 32;
            }
      }
  
      // Display the result
      resultParagraph.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toScale}`;
    }
  
    // Attach the conversion function to the button click event
    convertButton.addEventListener("click", convertTemperature);
  });
  