//wap to download from a url
//wap to save that downloaded data in a file and return the filename
//wap to upload the file written in previous step to a newurl

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
// let data=fetchData("www.yahoo.com");
// // let filename=writeFile(data);
// // let response=uploadData(filename,"www.google.com");
// // let downloadPromise=fetchData("www.yahoo.com");
// // downloadPromise.then(function processDownload(value){
// //     console.log("Download promise fullfilled");
// // //     let writePromise=writeFile(value);
// // //     writePromise.then(function processWrite(value){
// // //         console.log("Writing a file completed");
// //         console.log(value);
// // // })


// })
//Note:you can't resolve multiple times
//.then only works for fullfillment of promise 
//the callback is stored in onfullfillment array[] and onfullfillment array is present in promise object

//now here is the concept of promise hell so we can say that when we call .then function then it will create a new promise object internally
let downloadPromise=fetchData("www.yahoo.com");
downloadPromise
.then(function processDownload(value){
     console.log("downloading done with followingvalue",value);
     return value;
})
.then(function processWrite(value){
//    return writeFile(value);
console.log(value);
})
//to read more about promises read this article:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
