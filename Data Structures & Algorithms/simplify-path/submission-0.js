class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const pathArr = path.split("/").filter(data => data != "");
        const stack = [];
        let i = 0;

        while (i < pathArr.length) {
            if (pathArr[i] === "..") {
                stack.pop();
            } else if (pathArr[i] !== ".") {
                stack.push(pathArr[i]);
            }
            i++;
        }

        return '/' + stack.join("/");
    }
}
