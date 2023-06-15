const calculateNumber = (type, a, b) => {
    const Types = ['SUM', 'SUBTRACT', 'DIVIDE']
    
    if (typeof(a) !== "number" && typeof(b) !== "number") {
        throw new Error('Value not integers')
    }
    if (type === "SUM"){
        return Math.round(a) + Math.round(b)
    } else if (type === "SUBTRACT"){
        return Math.round(a) - Math.round(b)
    } else if (type === "DIVIDE"){
        return Math.round(b) == 0 ? "Error" : Math.round(a) / Math.round(b)
    }
}

module.exports = calculateNumber