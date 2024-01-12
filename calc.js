function sentresult(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}

function clearResult() {
    document.getElementById("result").value = "";
}