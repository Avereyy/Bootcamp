function generateResult() {
    var name = document.getElementById('name').value;
    var randomValue = Math.floor(Math.random() * 100) + 1; 
    var resultElement = document.getElementById('result');
    resultElement.innerText = name + " mendapatkan nilai :" + randomValue ;
}
