function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        alert("Error en la expresión");
        clearDisplay();
    }
}

function convertToFahrenheit() {
    const display = document.getElementById('display');
    const celsius = parseFloat(display.value); // Obtener el valor actual y convertirlo a número
    
    if (isNaN(celsius)) {
        alert("Por favor, ingrese un valor numérico válido en grados Celsius");
        clearDisplay();
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32; 
    display.value = fahrenheit.toFixed(2);
}