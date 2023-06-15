
calculateNumber = (a, b) => {
    if (typeof(a) !== "number" && typeof(b) !== "number") {
        throw new Error('Value not integers')
    }else {
        return Math.round(a) + Math.round(b)
    }
}

module.exports = calculateNumber