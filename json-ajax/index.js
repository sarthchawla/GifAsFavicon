
document.addEventListener("DOMContentLoaded", function () {


    let jsonDataFromServer = '{"name":"John","age":24,"bankBal":500.45,"isGovtEmp":false,"address":{"street":"123 Main St","city":"Boston"},"cars":["Ford","BMW","Fiat"]}'; // in string format

    console.log("json = " + jsonDataFromServer);

    // Convert JSON to JS object
    let objFromJson = JSON.parse(jsonDataFromServer); // convert string to object

    console.log("JS Object = ");
    console.log(objFromJson);

    debugger;
    // Convert JS object to JSON
    let obj = {
        carName: "Ford",
        carModel: "Mustang",
        carYear: 2017,
        colorsAvailable: ["Red", "Blue", "Green"]
    }

    let jsonFromObj = JSON.stringify(obj); // convert object to string
    console.log(jsonFromObj);

    // Poll 3:
    let arr = [
        {name: "Sid"},
        {name: "John"},
    ]

    let jsonFromArr = JSON.stringify(arr);
    let arrFromJson = JSON.parse(jsonFromArr);
    console.log(arrFromJson);

    // // AJAX -> CORS 
    // let xhttp = new XMLHttpRequest();
    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // define
    // xhttp.send(); // send

    // // 0 (The XHR client has been created, but the open() method hasn't been called yet.),
    // // 1 (open() has been called.), 
    // // 2 (send() has been called, and headers and status are available.), 
    // // 3 (Response's body is being received.) and
    // // 4 (The fetch operation is complete)
    // let response
    // xhttp.onreadystatechange = function () {
    //     if(this.readyState === 4 && this.status === 200) {
    //         response = this.responseText;
    //         console.log(response);
    //     }
    // }

    // what is url made of?
    // https://www.google.com:80/search?q=what+is+url+made+of&oq=what+is+url+made+of&aqs=chrome..69i57j0l5.8981j0j7&sourceid=chrome&ie=UTF-8
    // schema code = https/http
    // host = www.google.com
    // port = 80
    // path = /search

    // Step1 -> we open our websit
    // when we write some url in 
    // browser(js) -> request is sent to server -> browser

    //Step2 -> we make ajax calls inside our website code
    // manual request in our js
    // Browser -> our js -> makes -> request -> server -> response -> browser

});