function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    const arr = email.split('@');
    const notification = `${arr[0]} sent you an email from ${arr[1]}`;
    return notification;
}