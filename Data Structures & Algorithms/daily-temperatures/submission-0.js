class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
    const stack = [];
    const indices = [];

    let i = 0;
    while (i < temperatures.length) {
        while (stack.length > 0 && stack[stack.length - 1] < temperatures[i]) {
            const idx = indices.pop();
            stack.pop();
            result[idx] = i - idx;
        }

        stack.push(temperatures[i]);
        indices.push(i);
        i++;
    }
    return result;
    }
}
