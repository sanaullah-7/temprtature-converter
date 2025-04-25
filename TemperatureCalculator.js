function ConvertTemp() {
  const Temperature = parseFloat(document.getElementById("temperature").value); //Using parseFloat() t to convert the value from string to number — just like +.
  const Unit = document.getElementById("Unit").value; //“value=>Jo user ne box mein likha hai, wo value le lo.”
  const Result = document.getElementById("result");

  if (isNaN(Temperature)) {
    //This line checks if the value inside Temperature is not a number.isNaN() stands for "Is Not A Number".

    Result.innerHTML = "❌ Please enter a valid number <br> Thanks"; //innerHTML tags ko ignore karta ha
    Result.style.display = "block"; //This makes the hidden element visible again.
    return; //The return stops the function immediately, preventing any further code from being executed if the input is invalid..
  }

  //Celsius (°C)0°C = Water freezes ❄️---100°C = Water boils 💧🔥
  //Fahrenheit (°F) = Water Freezes at 32°F, Boils at 212°F.
  //Kelvin (K)= Scientific Scale (used in physics, chemistry).Iska zero point (0 K) sabse thanda mumkin temperature hai.0-to-273.15k

  let celsius, fahrenheit, kelvin;
  if (Unit === "celsius") {
    celsius = Temperature;
    fahrenheit = (Temperature * 9) / 5 + 32; //celsius to farenheit formula
    kelvin = Temperature + 273.15; //celsius to kelvin formula
  } else if (Unit === "farenheit") {
    celsius = (Temperature - 32 * 5) / 9; //farenheit to Celsius formula
    fahrenheit = Temperature;
    kelvin = Temperature - (32 * 5) / 9 + 273.15; //farenheit to Kelvin formula
  } else if (Unit === "kelvin") {
    celsius = Temperature - 273.15; //Kelvin to Celsius formula
    fahrenheit = (Temperature - 273.15 * 9) / 5 + 32; //Kelvin to Farenheit formula
    kelvin = Temperature;
  }
  Result.innerHTML =
    //It shows the converted temperature values (Celsius, Fahrenheit, Kelvin) inside the webpage.
    `<span class="emoji">🌡️</span> <b>  Celsius : <b><span class="name-color">${celsius.toFixed(
      2
    )}°C</span><br>
     <span class="emoji">🔥</span><b> Farenheit : <b><span class="name-color">${fahrenheit.toFixed(
       2
     )}°F</span><br>
     <span class="emoji">❄️</span> <b> Kelvin : <b><span class="name-color">${kelvin.toFixed(
       2
     )}K</span>`;
  Result.style.display = "block"; //This makes the hidden element visible again.
}
//toFixed(2) means:"Round the number to 2 decimal places."
//e.g If the value is 37.666666, then toFixed(2) will turn it into 37.67.
