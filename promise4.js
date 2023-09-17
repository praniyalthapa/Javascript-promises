console.log("Start of file"); //1
setTimeout(function timer1(){
console.log("time1 is done");
},0);
for(let i=0;i<100000;i++){
//something here
}

let x=Promise.resolve("Praniyal's Promise");
x.then(function processPromise(value){   //here .then expects some function to pass
    console.log("whose promise?",value);
})
setTimeout(function timer2(){
    console.log("timer2 is done")
},0);

console.log("End of file"); //2
/* output
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Start of file
End of file
whose promise? Praniyal's Promise
time1 is done
timer2 is done
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
lets see how this code will run and how it gives output
NOTE:Here we know that whatever async code will be there(which is not know by js)
 it will go inside event queue but here promises callback will go inside microtask queue (i.e processPromise func);
Lets do dry run of the above code:
First line will be printed as usual as "Start of file";
Then we hit setTimeout so js will give it to run time and there will be timer of 0 milisecond and we won't wait for it
we will go for next instruction here 0ms work is done but it will be inside event queue and our next program is done
as there is for loop it will wait for some time bcz it is sync code.
Lets see 9th line of our code: this is also resolved promise there is variable x which will get a resolved promise and its 
value is "Praniyal's promise";
after that on line 10th there is processPromise which would go inside microtask queue..processPromise will wait now;
Next line is a setTimeout function so it will definetly waits for some microseconds and after 0 ms it will go inside event queue.
Last line is "End of file" and when we finish printing this  then our timer1 would be finished and timer2() function will be inside eventqueue
Now our call stack is free now problem is timer1() and processPromise() both are ready to be executed and both are in race to get executed earlier.
NOTE:So microtask queue has more higher priority than event queue and it is predefined by JS.
now in call stack first processPromise is done then it will be clear(callstack will be empty) then timer1() then timer2();

*/