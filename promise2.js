function demo(){
    return new Promise(function(resolve,reject){
        console.log("hi");
        setTimeout(function process(){
     console.log("wooo task is done");
     resolve("Students are the best");
        },7000)
        console.log("bye")
    })
}
y=demo();
console.log(y);

function demo2(val){
    return new Promise(function(resolve,reject){
        console.log("start");
        setTimeout(function process(){
       console.log("Completed timer");
       if(val%2==0){
        resolve("Even");
       }
       else{
        reject('Odd');
       }
        },8000)
        console.log("Somewhere");
    })
   
}  //if reject is called then js will conside it as a error and show error ..resolve and reject is already inside js we just have to use it
demo2(2);
//main program to show promise in an easy way;
function fetchData(url){
    return new Promise(function(resolve,reject){ //when js see it then creation of promise object will be synchronous
        console.log("Going to start the download"); //3
        setTimeout(function process(){  //this will be given to runtime
            let data="Dummy data";
            console.log("Download Completed");
            resolve(data); //from pending state we are moving from undefined to data(dummy data);

        },10000);
        console.log("Timer to mimic download started"); //4
    })
}
console.log("Starting the program"); //1
console.log("We are expecting to mimic a downloader"); //2
x=fetchData("www.google.com");  //x will be global variable;
console.log("New promise object created successfully,but downnloading still going on"); //5
console.log(x); //6



//it is mandatory to resolve and reject if it won't then promise wont to settled;
//some resources to study promises
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//http://262.ecma-international.org/#sec-promise-objects