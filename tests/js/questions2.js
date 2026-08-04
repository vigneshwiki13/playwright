/* What are call back functions in javascript?
    it is a function that is passed as an argument to another function and is executed
    after some operaton has been completed.
    call back functions are used for asynchronous operation.

    nested functions, messy, not readable, not for complex
    */

function fetchData(call){  // this call back will indentify there is a call back, anything youcan pass for call back but need to match
setTimeout(() => {
    console.log("Data Fetched")
    const data= "sample data"
    call(data)  // this callback shows what the callback for
}, 2000);
}

function processData(data){
    console.log("Processing", data)
}

function modifyData(data){
    console.log("modifyData", data)
}


fetchData(processData)  // fetchdata works first and then process data
fetchData(modifyData)