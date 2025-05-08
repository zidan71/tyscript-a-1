"use strict";
function formatString(input, toUpper) {
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    }
    else if (toUpper === false) {
        return input.toLowerCase();
    }
}
const heloo = formatString("Hello", false);
//console.log(heloo)
const filterByRating = (items) => {
    return items.filter(item => item.rating >= 4);
};
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
const filter = filterByRating(books);
//console.log(filter);
function concatenateArrays(...arrays) {
    const res = arrays.flat();
    return res;
}
const array1 = concatenateArrays(["a", "b"], ["c"]);
const array2 = concatenateArrays([1, 2], [3, 4], [5]);
//console.log(array1)
//console.log(array2)
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        //console.log(`Make:${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        //console.log(`Model: ${this.model}`)
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
const car1 = myCar.getInfo();
const car2 = myCar.getModel();
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}
const valueRes = processValue("hello");
const valueRes1 = processValue(10);
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    else {
        return products.reduce((max, product) => product.price > max.price ? product : max);
    }
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
const expensive = getMostExpensiveProduct(products);
//console.log(expensive)
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
const day = getDayType(Day.Monday);
const day1 = getDayType(Day.Sunday);
//console.log(day);
async function squareAsync(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n >= 0) {
                resolve(n * n);
                return;
            }
            else {
                reject(new Error('Negative number not allowed'));
            }
        }, 1000);
    });
}
// const res=squareAsync(4).then(console.log);        
// const res1 =squareAsync(-3).catch(console.error);
