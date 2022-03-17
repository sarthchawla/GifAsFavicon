// import utility from './utility.js';
document.addEventListener("DOMContentLoaded", function () {

    // console.log(`division result from utility.js:
    // divide = ${utility.divider(10, 2)}
    // multiply = ${utility.multiply(20, 3)}`);


    var print = function (str) {
        console.log(str);
    }

    var printArrowFunc = (str) => {
        console.log(str);
    }

    // with single parameter curly braces are optional
    var printArrowFunc2 = str => console.log(str); // if you have a single expression, you can remove the flower braces

    var multiply = function (a, b) {
        return a * b;
    }

    var multiplyArrowFunc = (a, b) => a * b; // single line arrow function with multiple parameters


    var personES5 = {
        firstName: "JohnES5",
        lastName: "DoeES5",
        get: function () {
            console.log("ES5 outer: " + this.firstName + " " + this.lastName);
            var print = function () {
                console.log("ES5 inner: " + this.firstName + " " + this.lastName);
            }
            print();
        }
    }

    // personES5.get();

    var personES6 = {
        firstName: "John",
        lastName: "Doe",
        get: function () {
            console.log("ES6 outer: " + this.firstName + " " + this.lastName);
            var print = () => {
                // "this" keyword is same as "this" of parent function/class/object
                console.log("ES6 inner: " + this.firstName + " " + this.lastName);
            }
            print();
        },
        address: {
            street: "123 Main St",
        }
    }

    personES6.get.call(personES5);
    var bindedES6 = personES6.get.bind(personES5);
    bindedES6();

    var numbers = [2, 3, 6, 8];

    var twice = numbers.map(function (number) {
        return number * 2;
    });

    console.log("original: " + numbers);
    console.log("twice: " + twice);


    var evenNumbers = numbers.filter(function (number) {
        return number % 2 === 0;
    });

    console.log("original: " + numbers);
    console.log("evenNumbers: " + evenNumbers);

    var sumUsingFor = function (numbers) {
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }
    var arr = [100, 2, 3, 4, 5];
    var fact = arr.reduce(function (ans, current) { // total -> accumulator -> retains the value of the previous iteration
        console.log("current value: " + current + "fac till now: " + ans);
        return ans * current;
    });

    console.log("sumUsingFor: " + sumUsingFor(numbers));
    console.log("fact with reduce(): " + fact);

    var cloneOfNumbers = [...numbers]; // expands the numbers array into a new array

    var specialNumbers = [100, 200, ...numbers, 10, 20, 30]; // spread operator

    // spread -> distributer
    var cloneOfPerson = { ...personES6 }; // spreads the personES6 object into a new object
    cloneOfPerson.firstName = "changed value of first name"; // level 1 change
    console.log("cloneOfPerson: " + cloneOfPerson.firstName);
    console.log("personES6: " + personES6.firstName);

    cloneOfPerson.address.street = "changed value of adrs"; // nested change
    console.log("cloneOfPerson: " + cloneOfPerson.address.street);
    console.log("personES6: " + personES6.address.street);

    // rest -> collector
    let numberLogger = (...args) => console.log(`numberLogger: ${args.length}`); // rest operator -> collects all the parameters into an array
    numberLogger(1, 2, 3, 4, 5, "hello", "world"); // sending many arguments to the function parameter

    let numberLogger2 = (obj) => console.log("numberLogger2: \n new line \n \n" + obj.length);
    let args = [1, 2, 3, 4, 5, "hello", "world"];
    numberLogger2(args);

    let templatedStr = `hi hello ${personES6.firstName} 
    ${personES6.lastName}`;


    // callbacks and promises


    // setTimeout async
    // context switching->
    //alert("Hello"); // 1. thread will be here
    //setTimeout(()=>alert("notification: good morning"), 10000); // async code 
    // 3. after 10 sec above code will be executed
    //setTimeout(()=>alert("notification: good morning"), 10000); // async code
    // 4. after 10.00000000001 sec above code will be executed
    //alert("how are you guys?"); // this line executes before setTimeout -> 2. thread will be here

    let add = (a, b, printFunc) => {
        let ans = a + b;
        printFunc(ans); // passed function is called/invoked/executed here
        console.log("callback done");
    }

    // let alertPrinter = (result)=> {alert(result);
    // let consolePrinter = (result)=> {console.log(result);
    // add(10, 20 , alertPrinter)
    // add(10, 20 , consolePrinter)


    let printer = (ans) => console.log("ans from callback: " + ans);
    let convertor = (ans) => console.log("converted to dollars: " + (ans * 72.25));
    add(10, 20, printer); // passing the function as a parameter
    add(10, 20, convertor);
    add(22, 44, (ans) => console.log("anonymous func ans: " + ans));


    let addWithMultiCallback = (a, b, callback1, callback2) => {
        callback1(a, b);
        let ans = a + b;
        callback2(ans); // passed function is called/invoked/executed here
        console.log("callback done");
    }

    addWithMultiCallback(10, 20,
        (a, b) => console.log("a: " + a + " b: " + b), // func1
        (ans) => console.log("ans: " + ans)); // func 2


    // promises

    let promise = new Promise(
        (resolve, reject) => {
            let workDone = true; // 
            if (workDone) {
                resolve("work done");
            } else {
                reject(Error("work not done"));
            }
        });

    // calling the promise
    // let resolveFunc = (result) => console.log("result: " + result);
    // let rejectFunc = (error) => console.log("error: " + error);
    // promise.then(
    //     resolveFunc, //resolve
    //     rejectFunc // reject
    // );

    // let promise2 = new Promise((resolve, reject) => {
    //     // time consuming operation-> async
    //     setTimeout(() => {
    //         reject(Error("work failed")); // fails -> rejected
    //     }, 5000);
    // });
    // console.log("initially: " + promise2); // pending in processing for 5sec
    // promise2.then( 
    //     (result) => console.log("result: " + result), // fulfilled
    //     (error) => console.log("error: " + error) // rejected
    // );
    // setTimeout(() => {
    //     console.log("after: " + promise2);
    // }, 6000);


    let promise3 = new Promise((resolve, reject) => {
        if(1>3){
            resolve("success"); 
        }
        else{
            throw Error("failed"); // step2
        }
    });
    console.log('\n\nthen catch and finally syntax\n\n');
    //step1 -> then
    promise3.then(result => console.log("result of then: " + result)); // async

    // step3 -> to catch any errors that happens in promise3
    promise3.catch(error => console.log("error catch: " + error)); // any errors 

    // step4 -> run after promise3 is excecuted
    promise3.finally(() => console.log("finally will always run"));// will run always

    try{
        // some code that can be dangerous
        throw Error("dangerous code");
        //
        //
        //
    }
    catch(error)
    {
        console.log("error catch: " + error);
    }
    finally{
        console.log("finally will always run");
    }

    // async returning the promise
    async function promiseCreater(){ // 
        let promise4 = new Promise((resolve, reject) => {
            resolve("success");
        });
        let result = await promise4; // await -> wait for the promise to be resolved
        return result;
    }
});