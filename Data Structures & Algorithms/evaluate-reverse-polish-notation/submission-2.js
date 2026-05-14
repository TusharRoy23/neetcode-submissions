class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let i = 0;

        while (i < tokens.length) {
            if (tokens[i] === "*" || tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "/") {
                const value2 = stack.pop();
                const value1 = stack.pop();
                let newValue = 0;
                if (tokens[i] === "*") {
                    newValue = value1 * value2;
                } else if (tokens[i] === "+") {
                    newValue = value1 + value2;
                } else if (tokens[i] === "-") {
                    newValue = value1 - value2;
                } else {
                    newValue = Math.trunc(value1 / value2);
                }
                stack.push(newValue);
            } else {
                stack.push(parseInt(tokens[i]));
            }
            i++;
        }

        return stack[0]
    }
}
