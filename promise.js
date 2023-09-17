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


// Description
// Hello Humans, I am Sanket Singh, working as a Software Engineer @ Google. I am an Ex - Software Engineer @ LinkedIn and 
// Ex - Software Engineer @ Interviewbit.
//  I am a former Google Summer Of Code Student Developer under Berkman Klein Centre @ Harvard University. 
// My expertise and field of interest lie in Tech, Engineering, Software Development, Coding, etc.
// I will be posting things around tech and my travel vlogs on this channel. 
//https://sv-dev.netlify.app/projects