class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        // const stack = [];
        const as = asteroids;
        let i = as.length - 1;

        while (i > 0) {
            if (as[i] < 0 && as[i - 1] > 0) {
                // collision
                const collision = as[i - 1] + as[i];
                if (collision === 0) {
                    as.splice(i - 1, 2);
                    i = as.length - 1;
                } else {
                    // one is negative & other is positive
                    if (Math.abs(as[i - 1]) > Math.abs(as[i])) {
                        // as.pop();
                        as.splice(i, 1);
                    } else {
                        as.splice(i - 1, 1);
                    }
                    i = as.length - 1;
                }
            } else {
                i--;
            }
            
        }
        
        return asteroids;

        // while (i < as.length) {
        //     if (stack.length === 0) {
        //         stack.push(as[i]);
        //     } else {
        //         let lastIdx = stack.length - 1;
        //         const coll = stack[lastIdx] + as[i];
        //         if (coll === 0) {
        //             stack.pop();
        //         } else if (
        //             (stack[lastIdx] > 0 && as[i] < 0) || 
        //             (stack[lastIdx] < 0 && as[i] > 0)
        //         ) {
        //             while (lastIdx > - 1 && ((stack[lastIdx] > 0 && as[i] < 0) || 
        //             (stack[lastIdx] < 0 && as[i] > 0))) {
        //                 if (Math.abs(stack[lastIdx]) < Math.abs(as[i])) {
        //                 stack.pop();
        //                 stack.push(as[i]);
        //             }
        //             lastIdx--;
        //             }
                    
        //         } else {
        //             stack.push(as[i]);
        //         }
        //     }
        //     i++;
        // }
        // return stack;
    }
}
