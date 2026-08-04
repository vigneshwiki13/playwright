/*What are promises in javascript?  Explain the differences between callBack functions and promises with example.*/



function fetchData(){
    return new Promise((hell)=>{  // you can give anything resolve, reject or any but match with same
        setTimeout(() => {
            console.log("fetch data")
            const data = "Simple Data"
            hell(256)  // but match with same.  if mismatch throw not defined and timeout 
        }, 2000);

    })
}

fetchData().then(function(d){  // it still like asynchronous chaining and messy
    console.log("Processing", d)  //256
})

const hello = await fetchData();     // await also falls under promise concept,  neat, linear
console.log("await processing", hello)  //256