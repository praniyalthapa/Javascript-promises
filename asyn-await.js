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
 async function processing(){
    let downloadData=await fetchData("www.google.com");
    console.log("Downloading data completed",downloadData);
    let file=await writeFile(downloadData);
    console.log("writing file is completed",file);
    let uploadResponse=await uploadData(file,"www.yahoo.com");
    console.log("uploading await completed");
    console.log("completed process with response",uploadResponse);
    return true;
 }
 console.log("Start");
 processing();
 console.log("End");