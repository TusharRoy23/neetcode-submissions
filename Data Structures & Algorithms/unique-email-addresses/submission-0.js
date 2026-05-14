class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const map = new Map();
        for (let i = 0; i < emails.length; i++) {
            const part = emails[i].split('@');
            let localAddrs = '';
            let j = 0;
            while (j < part[0].length) {
                if (part[0][j] === '+') {
                    break;
                } else if (part[0][j] !== '.') {
                    localAddrs += part[0][j]
                }
                j++;
            }
            map.set(`${localAddrs}@${part[1]}`, 1);
        }

        return map.size
    }
}
