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