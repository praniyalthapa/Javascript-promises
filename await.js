async function fun(){
    console.log('entered'); //2
    let x=await Promise.resolve(20);
    console.log("existing");//4
    return x;
}
console.log("Start"); //1
let val=fun();
val.then(function f(value){
    console.log("value is ",value);//5
})
console.log("end");//3