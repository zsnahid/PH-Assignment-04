function calculateTax(income, expenses) {
    if ((income < 0 || expenses < 0) || expenses > income) {
        return "Invalid Input";
    }
    const diff = income - expenses;
    const tax = diff * 0.2;
    return tax;
}

function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    const arr = email.split('@');
    const notification = `${arr[0]} sent you an email from ${arr[1]}`;
    return notification;
}

function checkDigitsInName(name) {
    if (typeof (name) !== "string") {
        return "Invalid Input";
    }
    let isDigit = false;
    for (let char of name) {
        if (!isNaN(char)) {
            isDigit = true;
            break;
        }
    }
    return isDigit;
}

function calculateFinalScore(obj) {
    if (typeof (obj) !== "object") {
        return "Invalid Input";
    }
    let result = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
        result += 20;
    }
    if (result >= 80) {
        return true;
    }
    return false;
}

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof (serialNumber) !== "number") {
        return "Invalid Input";
    }
    let totalInterviewTime = 0;
    for (let item of waitingTimes) {
        totalInterviewTime += item;
    }
    const avg = Math.round(totalInterviewTime / waitingTimes.length);
    const remainingCandidates = serialNumber - waitingTimes.length - 1;
    const waitTime = avg * remainingCandidates;
    return waitTime;
}