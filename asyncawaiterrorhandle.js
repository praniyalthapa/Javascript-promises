function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("Started downloading data from",url);
       setTimeout(function processDownloading(){
        let data="Dummy Data";
        console.log("Downloading completed successfully");
      reject(data);

       },7000)
    })
 }
 async function errorHandling(){
    try{
    let downloadData=await fetchData("www.aws.com");
    }
    catch(err){
        console.log("error is",err);
    }

 }
 console.log("Started");
 errorHandling();
 console.log("Ended");
 