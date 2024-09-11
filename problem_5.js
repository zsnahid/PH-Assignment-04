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