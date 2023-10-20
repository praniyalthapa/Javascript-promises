//wap tp download some data from url not using callback instead use promises
//
function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log('started fetching from the url',url);
      setTimeout(function process(){
        let data="Dummy Data";
        console.log("Completed fetching the data")
        //now return the data
        resolve(data); //return somedata on success;
      },4000)

    });
}





function fetch(url){
    return new Promise(function(resolve,reject){
      //any logic here
        for(let i=0;i<100000;i++){
            //some task
        }
        console.log('Completed');
        resolve("Praniyal");
    });
}
let x=fetch("www.google.com");
console.log("we have called the promise",x);
let y=fetchData('www.amazon.com');

//https://sv-dev.netlify.app/projects