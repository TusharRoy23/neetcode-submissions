class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {
        const getHash = (str) => {
            let tmpStr = '';
            for (let i = 0; i < str.length - 1; i++) {
                const diff = (str.charCodeAt(i + 1) - str.charCodeAt(i) + 26) % 26
                tmpStr += String.fromCharCode(diff, 'a'.charCodeAt(0));
            }
            return tmpStr;
        }

        const groups = new Map();
        for (const str of strings) {
            const hashKey = getHash(str);
            if (!groups.has(hashKey)) {
                groups.set(hashKey, []);
            }

            groups.get(hashKey).push(str);
        }

        

        return Array.from(groups.values());
    }
}
