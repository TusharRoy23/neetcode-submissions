class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        /*
            1. Check if N[left] or N[right] is eql to limit
            2. After doing N[left] + N[right] > Sum, check who is closer to limit
                by doing abs(N[left] - limit) and abs(N[right] - limit)
            3. If N[left] + N[right] <= Sum, pick both
        */
        people.sort((a, b) => a - b);

        let n = people.length;
        let left = 0;
        let right = n - 1;
        let count = 0;

        while (left <= right) {
            if (people[left] === limit) {
                count++;
                left++;
                continue;
            }
            if (people[right] === limit) {
                count++;
                right--;
                continue;
            }

            const sum = people[left] + people[right];
            if (sum <= limit) { // Pick both
                count++;
                left++;
                right--;
            } else if (sum > limit) { // Pick who is the closest
                const leftNum = Math.abs(limit - people[left]);
                const rightNum = Math.abs(limit - people[right]);
                if (rightNum <= leftNum) {
                    count++;
                    right--;
                }
            }
        } 
        return count;
    }
}
