function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        
        displayResult(bmi);
    } else {
        alert("กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้องครับ");
    }
}

function displayResult(bmi) {
    const resultContainer = document.getElementById('result-container');
    const bmiValue = document.getElementById('bmi-value');
    const bmiStatus = document.getElementById('bmi-status');

    resultContainer.classList.remove('hidden');
    bmiValue.innerText = bmi;

    let status = "";
    let color = "";

    if (bmi < 18.5) {
        status = "น้ำหนักน้อย / ผอม";
        color = "#3498db";
    } else if (bmi >= 18.5 && bmi <= 22.9) {
        status = "ปกติ (สุขภาพดี)";
        color = "#27ae60";
    } else if (bmi >= 23.0 && bmi <= 24.9) {
        status = "ท้วม / โรคอ้วนระดับ 1";
        color = "#f1c40f";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = "อ้วน / โรคอ้วนระดับ 2";
        color = "#e67e22";
    } else {
        status = "อ้วนมาก / โรคอ้วนระดับ 3";
        color = "#e74c3c";
    }

    bmiStatus.innerText = status;
    bmiStatus.style.color = color;
}
