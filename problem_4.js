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