// IIFE
// Immediately invoked function expression


/*
 
(function(){
    // do stuff
}());

*/

(function(){

    var createWorker = function(){
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

}());