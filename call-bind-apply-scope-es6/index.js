
document.addEventListener("DOMContentLoaded", function () {
    var person = {
        firstName: "Sarthak",
        lastName: "Chawla",
        getFullName: function (hobby, foodPref) {
            return this.firstName + " " + this.lastName + " " + hobby + " " + foodPref;
        }
    }
    var newPerson = {
        firstName: "John"
    }

    // bind
    var bindFunc = person.getFullName.bind(newPerson);
    console.log("bind = " + bindFunc()); // -> John undefined undefined

    // call
    console.log("call = " + person.getFullName.call(newPerson, "Cricket", "Mangoes")); // -> John undefined undefined

    // apply -> same as call but parameters are passed as array
    console.log("apply = " + person.getFullName.apply(newPerson, ["Cricket", "Mangoes"])); // -> John undefined undefined

    // poll 4
    var person2 = {
        firstName: "Sidharth",
        get: function () {
            console.log("Outer: " + this.firstName);
            var print = function (role) {
                console.log("Inner: " + this.firstName);
            }.call(this, "Developer")
        }
    }

    person2.get();

    // block scope
    // let vs var
    a = 5;
    console.log(a);//  -> 5
    {
        var a = 10;
    }
    console.log(a);// -> 10



    a = 5; // error
    console.log(a);//  -> error
    {
        //console.log(a); // error
        let a = 10; // no hoisting
        console.log(a) // -> accessable -> 10

        {
            let a = 15;
            {
                let a = 20;
            }
        }
    }
    console.log(a);// -> erro


    // function scope
    function outer() {
        var a = 10;
        console.log(a);
        function inner() {
            var b = 15;
            console.log(a, b); // a -> error, b-> b
        }
        inner();
    }

    'use strict'; // chrome -> superpower -> strict mode
    newVar = 20 // if we miss writing var chrome will add the var


    // var allow recreation of same varaiable
    // let won't allow
    var myVar = 10;
    var myVar = 20;
    var myVar = 30;

    let myLet = 10;
    // let myLet = 20; // error


    // poll 1 of let var sheet
    let arr = [1, 2, 3, 4, 5], numberToFind = 4;

    for (let i = 1; i <= 10; i++) {
        if (arr[i] === numberToFind) {
            break;
        }
    }

    console.log(i);

    // object freeze

    const person = {
        firstName: "Sarthak",// level 1
        address: {
            lane1: "street1", // level 2
            lane2: "street2",
            country: "India"
        }
    }

    person.firstName = "John";
    person.address.lane1 = "street3";

    Object.freeze(person);

    person.firstName = "CoolDude" // freeze won't allow
    person.address.lane1 = "new lane1" // freeze will allow

    Object.freeze(person.address);
    person.address.lane1 = "old lane1" // freeze won't allow

    // poll 4:
    'use strict';
    const details = {
        firstName: "Sid",
        lastName: "Sund"
    }
    Object.freeze(details);
    details.lastName = "Mal"; // will give error
    console.log(details.lastName); 




});