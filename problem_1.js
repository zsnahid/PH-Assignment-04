function calculateTax(income, expenses) {
    if ((income < 0 || expenses < 0) || expenses > income) {
        return "Invalid Input";
    }
    const diff = income - expenses;
    const tax = diff * 0.2;
    return tax;
}