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

// Your goal is to Implement a function called countDown that accepts a time in seconds. The function will print the time remain to the console every second. Instead of printing 0, the function should print "Ring Ring Ring!!!".

// function countDown(num) {
//     let intervalId = setInterval(function () {
//         if (num === 0) {
//             console.log('Ring Ring Ring!!!');
//             clearInterval(intervalId);
//         } else {
//             console.log('Timer: ', num);
//             num--;
//         }
//     }, 1000);
// }

// console.log(countDown(3));

// PROMISES ////

// creating a promise //
// var p1 = new Promise(function (res, rej) {
//     res([1, 2, 3, 4, 5]);
// });

// p1.then(function (data) {
//     console.log('p1 with data', data);
// });

// handling errors //
// let p1 = new Promise(function (res, rej) {
//     rej('ERROR!!!');
// });

// p1.then(function (data) {
//     console.log('resolved with data', data);
// }).catch(function (data) {
//     console.log('rejected with data', data);
// });

// randomly occuring errors //
// let p1 = new Promise(function (resolve, reject) {
//     let num = Math.random();
//     if (num < 0.5) {
//         resolve(num);
//     } else {
//         reject(num);
//     }
// });

// p1.then(function (result) {
//     console.log('SUCCESS!', result);
// }).catch(function (error) {
//     console.log('ERROR!', error);
// });

//  Promise with asynchronous code //
// let promise = new Promise(function(res,rej){
//     setTimeout(function(){
//         let randomInt = Math.floor(Math.random() * 10);
//         res(randomInt);
//     }, 4000);
// });

// promise.then(function(data){
//     console.log('Randon Int passed to resolve', data);
// });

// Nested Async callbacks //
// let counter = 0;
// setTimeout(function () {
//     counter++;
//     console.log('Counter:', counter);
//     setTimeout(function () {
//         counter++;
//         console.log('Counter:', counter);
//         setTimeout(function () {
//             counter++;
//             console.log('Counter:', counter);
//         }, 3000);
//     }, 2000);
// }, 1000);

// refactored above //

var promise = new Promise(function (res, rej) {
    setTimeout(function () {
        let randomInt = Math.floor(Math.random() * 10);
        res(randomInt);
    }, 500);
});

promise
    .then(function (data) {
        console.log('RandomInt passed to resolve', data);
        return new Promise(function (res, rej) {
            setTimeout(function () {
                res(Math.floor(Math.random() * 10));
            }, 3000);
        });
    })
    .then(function (data) {
        console.log('2nd random int passed to resolve', data);
    });
