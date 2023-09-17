//promise.all takes arrays of promise and return a single promise
function fetchData(url){
    return new Promise(function(resolve,reject){
    console.log("Started downloading from",url);
    setTimeout(function processDownloading(){  //it had async piece a code and inside it we are resolving the problem
     let data="Dummy data";
      console.log("Downloaded your task");
      resolve(data);
    },5000)
 
    });
 
 }
 //writing file program
 function writeFile(data){
     return new Promise(function(resolve,reject){
         console.log("Started writing ",data,"in a file");
         setTimeout(function processWriting(){
             let filename='result.txt';
             console.log("File Written successfully");
             resolve(filename);
         },3000)
     })
 }
 //uploading file program
 function uploadData(file,url){
     return new Promise (function(resolve,reject){
         console.log('uploading started on url',url);
         setTimeout(function processUpload(){
             let result="SUCESS";
       console.log("Uploading done");
       resolve(result);
         },4000)
 
     })
 }
 let downloadPromise=fetchData("www.yahoo.com");
 let writePromise=writeFile("dummy data");
 let uploadPromise=uploadData("test.txt","www.praniyalthapa.com");
 console.log("Start");
 Promise.all([downloadPromise,writePromise,uploadPromise]).then(function process(value){
    console.log(value); 

 })

 //how to mimic errors in t so we have throw keyboard.



