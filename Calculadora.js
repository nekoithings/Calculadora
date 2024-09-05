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

function convertKgToGrams() {
    const display = document.getElementById('display');
    const kg = parseFloat(display.value);

    if (isNaN(kg)) {
        alert("Por favor, ingrese un valor numérico válido en kilogramos");
        clearDisplay();
        return;
    }

    const grams = kg * 1000;
    display.value = grams.toFixed(2);
}

function convertBarToAtm() {
    const display = document.getElementById('display');
    const bar = parseFloat(display.value);

    if (isNaN(bar)) {
        alert("Por favor, ingrese un valor numérico válido en bar");
        clearDisplay();
        return;
    }

    const atm = bar * 0.986923; // Conversión de bar a atmósferas
    display.value = atm.toFixed(2);
}

function convertCOPtoUSD() {
    const display = document.getElementById('display');
    const cop = parseFloat(display.value);

    if (isNaN(cop)) {
        alert("Por favor, ingrese un valor numérico válido en pesos colombianos");
        clearDisplay();
        return;
    }

    const conversionRate = 0.00027; // Tasa de cambio estimada de COP a USD
    const usd = cop * conversionRate;
    display.value = usd.toFixed(2);
}