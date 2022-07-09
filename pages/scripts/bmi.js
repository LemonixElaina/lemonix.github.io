function calc() {

    const weight = Number(document.getElementById('weight').value),
        height = Number(document.getElementById('height').value);

    let result;

    const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));

    if (bmi <= 16.4) {
        result = '极瘦';
    } else if (bmi >= 16.5 && bmi <= 18.4) {
        result = '偏瘦';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = '正常';
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = '过重';
    } else if (bmi >= 30 && bmi <= 34.9) {
        result = '1类肥胖';
    } else if (bmi >= 35 && bmi <= 39) {
        result = '2类肥胖';
    } else if (bmi > 39) {
        result = '3类肥胖';
    } else {
        result = 'Error 请输入数字！';
    }

    document.getElementById('res').innerHTML = result;
}