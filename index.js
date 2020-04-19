// Callback functions

// function callback() {
//     console.log('coming from callback');
// }

// function higherOrder(fn) {
//     console.log('before callback');
//     callback();
//     console.log('after callback');
// }

// higherOrder(callback);

// Callback functions with declaration

// function greet(name, formatter) {
//     return 'Hello, ' + formatter(name);
// }

// function upperCaseName(name) {
//     return name.toUpperCase();
// }

// console.log(greet('Tim', upperCaseName));

// FOR EACH w/ ARRAYS

// const arr = [1, 2, 3, 4, 5, 6];

// function forEach(arr, function (num) {
//     console.log(num * 2);
// });

// var num = 0;
// var intervalId = setInterval(function () {
//     num++;
//     console.log("num: ", num);
//     if (num === 3) {
//         clearInterval(intervalId);
//     }
// }, 1000);
