
const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(number, start, end) {
        if (end === undefined) {
            end = start
            start = 0
        }

        if (start > end) {
            let temp = end
            end = start
            start = temp
        }

        return number >= start && number < end
    },

    words(string) {
        return string.split(' ')
    },

    pad(string, length) {
        if (string.length > length) {
            return string
        }

        let startPaddingLength = Math.floor((length - string.length) / 2)
        let endPaddingLength = (length - string.length) - startPaddingLength

        
        return ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
    },

    has(object, key) {
        if(object[key]) {
            return true
        } else {
            return false
        }
    },

    invert(object) {
        const inverted = {}
        for (const key in object) {
            let newKey = object[key]
            inverted[newKey] = key
        }
        return inverted
    },

    findKey(object, func) {
        for(const key in object) {
            if(func(object[key])) {
                return key
            }
        }
        return undefined
    }

    
};

// Do not write or modify code below this line.
module.exports = _;