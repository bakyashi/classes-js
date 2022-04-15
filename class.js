/* Map, Filter and Reduce methods */

// Map 
var aplle = {value: 3};
var grape = {value: 5};
var myArr = [1, 2, 3, 4, 5];

function mapThis (arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

function map(arr, index){
    return arr.map(function(item){
        return item * index;
    });
}
// console.log(map(myArr, 2)); 

//Filter
var myRand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvens(arr){
    return arr.filter(function(item){
        return item % 2 === 0;
    });
}

// console.log(filterEvens(myRand));

// Reduce
var myArr = [1, 2, 3, 4];
var objArr = [{name: 'item1', value: 10}, {name: 'item2', value: 24}, {name: 'item3', value: 38}];
var balance = 100;

function reduce(arr){
    return arr.reduce(function(acc, item){
        return acc + item;
    })
}

function calcBalance(balance, arr){
    return arr.reduce(function(prev, current){
        return prev - current.value;
    }, balance);
}
console.log(calcBalance(balance, objArr));