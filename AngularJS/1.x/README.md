# Angular JS 1.x Notes 
[AngularJS.org](http://angularjs.org)

### What is it?
AngularJS is a Javascript framework one can use to create apps that run in a browser.

## Getting Started
### Requirements
1. Add a `<script>` tag pointing to `angular.js` file
2. Add an `ng-app` attribute in your HTML
    * ng-app is an Angular **directive**
    * The `ng` is short for A**ng**ular

```
<script src="angular.js"></script>
```

* You can add the `ng-app` directive to the <html> element or the <body> element; You only get 1 ng-app directive per page. Angular will only take control of the section of DOM where that `ng-app` directive applies. So if you apply it to the <body> element, it will only apply inside of that scope. 

### Binding Expressions
`{{ my expression }}`

## JavaScript Patterns
* Functions as abstractions
* Functions to build modules
* Functions to avoid global variables

Angular relies heavily on the functional nature of JavsScript.

#### Functions as abstractions

The Function is the basis for the abstraction
        
    
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
    

#### Functions to build Modules
#### Revealing module pattern
Defining a function that returns an object that provides an API for other pieces of code elsewhere in the application to use.
    
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
    
The createWorker() function above creates scope. The local variables inside of that function are ONLY visible inside of that function itself.

So you couldn't say

`workerObject.task1(); // undefined is not a function`


The problem with the above approach is global scope.

####How to define all of my code and execute it safely? 
 Use an IIFE (immediate invoked function expression).

## Controllers
* Controller directive in HTML (ng-controller)
* `ng-controller` is an attribute which we place inside of our HTML.
* Can only be used under a `ng-app` directive

```
    <div ng-app>
    	<div ng-controller="MainController">
    	</div>
    </div>
```

* Controller will be a function that Angular invokes
* How does Angular know where the controller lives? We create a controller with that name. 

```
var MainController = function($scope){
	$scope.message = "Hello!";
};
```

* Attach model to `$scope`. `$scope` is NOT the model, but things we attach to it will be the model.
* Above, we've only attached one property to $scope, `.message`


## Directives and Views