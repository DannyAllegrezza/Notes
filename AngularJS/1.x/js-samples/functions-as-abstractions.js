// The Function is the basis for the abstraction


// Functions that do work
var work = function () {
  console.log("Working hard!");  
};


// Functions that execute work
var doWork = function(f){
    // f - the parameter, is a another function we can invoke;
    console.log("starting...");
    f();
    console.log("end of work");
};

// Here we pass in the function "work" as a parameter to doWork(). Note that passing in the function is different than passing in the result of the function... 
// ex: this would pass in "working hard" string to doWork();
// doWork(work());

doWork(work);


