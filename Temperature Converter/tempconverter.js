// Convert from Celsius
function convertFromCelsius() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        let kelvin = celsius + 273.15;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
        document.getElementById("kelvin").value = kelvin.toFixed(2);
    } else {
        clearFields();
    }
}

// Convert from Fahrenheit
function convertFromFahrenheit() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5/9;
        let kelvin = celsius + 273.15;
        document.getElementById("celsius").value = celsius.toFixed(2);
        document.getElementById("kelvin").value = kelvin.toFixed(2);
    } else {
        clearFields();
    }
}

// Convert from Kelvin
function convertFromKelvin() {
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    if (!isNaN(kelvin)) {
        let celsius = kelvin - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("celsius").value = celsius.toFixed(2);
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else {
        clearFields();
    }
}

// Clear all fields
function clearFields() {
    document.getElementById("celsius").value = '';
    document.getElementById("fahrenheit").value = '';
    document.getElementById("kelvin").value = '';
}
