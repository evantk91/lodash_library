
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
    }
};

// Do not write or modify code below this line.
module.exports = _;