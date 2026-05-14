class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const IsDigit = (digit) => {
            return digit >= '0' && digit <= '9';
        }

        const decode = (start) => {
            let digitStr = '';
            let tmpStr = '';
            for (let i = start; i < s.length; i++) {
                if (s[i] === '[') {
                    const decoded = decode(i + 1);
                    tmpStr += new Array(parseInt(digitStr)).fill(decoded[0]).join('');
                    i = decoded[1];
                    digitStr = '';
                } else if (s[i] === ']') {
                    return [tmpStr, i];
                } else if (IsDigit(s[i])) {
                    digitStr += s[i];
                } else {
                    tmpStr += s[i];
                }
            }
            return tmpStr;
        }

        return decode(0);
    }
}
