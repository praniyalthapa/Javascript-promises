 //how to mimic errors in promises so we have throw keyboard.
 function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("Started downloading data from",url);
       setTimeout(function processDownloading(){
        let data="Dummy Data";
        console.log("Downloading completed successfully");
      resolve(data);

       },7000)
    })
 }
//  let x=fetchData("www.aws.com");
//  x.then(function success(value){ //.then actually takes two function one is success and second is error callback accoding to the resolve &reject.
//     console.log("value is",value);
//  },function err(err){
//     console.log("error is",err);
//   });
let x=fetchData("www.amazon.com");
x.then(function success(v){
    console.log("value is",v);
    return 123;
})
.then(function success(y){
    console.log('value again is',y);
   
})
.catch(function errorHandle(error){
    console.log("your error is ",error);
})
.finally(()=>{
    console.log("I will get executed always");
})

/* another method to resolve erro is .catch method as soon as we call reject function .
how to throw error inside .then 
ok lets see this
we should call throw keyboard here then it will send error
.then(function success(y){
    console.log('value again is',v);
   throw{errow:"new error"}
})

*/ 
//NOTE: while using .then and .catch if error is not defined inside .catch then it will show overall error 
