document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    const bmi = weight / (height * height);

    let resultBmi = 'Твой ИМТ: ' + bmi.toFixed(2) + '. ';
    result.textContent = resultBmi

    if (bmi < 18.5) {
        resultBmi += 'Ты недостаточно весишь, иди покушай!'
    }else if (bmi >= 18.5 && bmi <24.9) {
        resultBmi += 'Хороший вес!'
    }else if (bmi >= 24.9 && bmi <29.9){
        resultBmi += 'У тебя избыточный вес!'
    }else if (bmi >29.9 && bmi <=40){
        resultBmi += 'У тебя сильное ожирение!'
    }else {
        resultBmi += 'Введите реалистичные данные!'
    }

    result.textContent = resultBmi
} )