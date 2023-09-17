function fun(){
    return new Promise(function f(resolve,reject){
        setTimeout(function process(){
    console.log("resolved");
    resolve(123)
        },5000)
    })
}
let x=fun();
x.then(function exec(value){
    console.log("Value is",value);
    return 100;
});
x.then(function exec1(value){
    console.log("Value is here",value)  //you can access same promise wt help of x.then and get same resolved value;
    return 101;
});
