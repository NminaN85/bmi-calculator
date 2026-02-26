function calculateBMI() {
    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);

    if (!height || !weight) {
        alert("Please enter valid height and weight!");
        return;
    }

    let bmiValue = weight / ((height/100)*(height/100));
    let BMI = bmiValue.toFixed(2);

    let card = document.getElementById('resultsCard');
    let message = `Your BMI is ${BMI} and you are `;

    if (bmiValue < 18.5){
        message += "Underweight";
        card.style.backgroundColor = 'lightblue';
        card.style.color = 'black';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        message += "Normal";
        card.style.backgroundColor = 'green';
        card.style.color = 'white';
    } else if (bmiValue >= 25 && bmiValue <= 29.9){
        message += "Overweight";
        card.style.backgroundColor = 'yellow';
        card.style.color = 'black';
    } else {
        message += "Obese";
        card.style.backgroundColor = 'red';
        card.style.color = 'white';
    }

    card.innerHTML = message;
}
