// Before ES2015
// var math = math || {};

// (function () {
//     function sum(a, b) {
//         return a + b;
//     }

//     math.sum = sum;
// })();

// After ES2015
export function sum(a, b) {
    return a + b;
}
