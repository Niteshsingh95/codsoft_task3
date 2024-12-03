let result = document.getElementById('result');

function clearDisplay() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function appendCharacter(character) {
    result.value += character;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
