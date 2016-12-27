// Revealing module pattern
// Defining a function that returns an object that provides an API for other pieces of code elsewhere in the application to use.

var createWorker = function(){
    // we could create some private functionality
    var privateWorkerCount = 0;
    
    var task1 = function(){
        privateWorkerCount += 1;
        console.log("Inside of task1. Count = " + privateWorkerCount);
    };

    var task2 = function(){        
        privateWorkerCount += 1;
        console.log("Inside of task2. Count = " + privateWorkerCount);
    };

    // This is the public API
    return {
        job1: task1,
        job2: task2
    };
};


var workerObject = createWorker();

workerObject.job1();
workerObject.job2();
workerObject.job2();
workerObject.job2();
workerObject.job1();
