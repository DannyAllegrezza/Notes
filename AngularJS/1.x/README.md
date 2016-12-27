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

# Controllers
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

## Controller Capabilities
* Multiple controllers
* Complex objects
* Nest controllers

## Calling HTTP
Right now we are mocking data in our controller. In the real world, we fetch data from a server through HTTP. 

#### $http Service
* Encapsulates HTTP communication 
* Object with methods that can be used to make HTTP calls 
	* GET, POST, PUT, DELETE
* We can "ask" for $http inside a controller

```
var PersonController = function($scope, $http){
	$scope.user = $http.get("/users/1759");
};
```
The above code is flawed, however, because the HTTP call never return data immediately because the call happens asynchronously. The background call could that 25ms or 25 seconds, so we cannot access the data immediately.

The HTTP method returns a `Promise`

* A Promise is an object that promises to give you some result in the future, and the result might be your data or an error.
* To find out, call a `.then()` method a function that will be called in the future

```
var PersonController = function($scope, $http){
	var promise = $http.get("/users/1759");
	// Pass functions to other functions to do work
	// The .then() method calls a new function which will pass in the response data when it is ready. The promise passes the response object.

	promise.then(function(response){
		$scope.user = response.data;
	});
};
```

We can chain functions together to shorten things up

```
$http.get("/users/1759")
	.then(function(response){
		$scope.data = response.data;
	});
```

## Modules
* Controllers usually live in Angular modules
	* Avoids the global namespace

Create a single module and place a controller inside of it

* Working with modules
	* Create a module with a name
	* Register your controllers in the module
	* Tell Angular to use your module with `ng-app`

`var app = angular.module("githubViewer", []);`
`// module(nameOfTheModule, an array of dependencies`

# Directives and Views
* $scope provides the model
* model does not touch the HTML
* data binding moves model data to view
* directives allow for indirect model view interaction

We can push data back into our model using `ng-model` on our view

    <!-- User Form -->
    <form name="searchUser">
        <input type="search" placeholder="Username to find" ng-model="username" />
        <input type="submit" value="Search"/>
    </form>

### ng-repeat
Very similar to a for-each loop in C#. Allows us to repeat over a variable, usually a collection.

### filters

### Directives
There are a ton of directives that we can use

* ng-app
* ng-class
* ng-disabled
* ng-if
* ng-keypress
* ng-mouseleave
* ng-repeat
* ng-bind
* ng-click
* ng-focus

etc......

### Services
* Controllers setup the model
* View consumes the model using directives
* Directives are an intermediary

`Controller -> Model -> Directives -> View`

One way to think about things is that if the logic doesn't fit in a Model, View, or Directive, then you can put your logic in a Service.

* You'd never use a Service from a View  
* Can offer functionality to Models and Directives in a re-usable way
* Can contain logic that either
* A. Doesn't belong in a Model or Directive
* B. Logic you want to be able to use from several Models or Directives that are in the application
* C. Just want to package up some functionality because Controller is growing too large

So far, we've used the `$http` service.

`$timeout` and `$interval` services

### Demo:
Give users 5 seconds to enter search query and click "Search" else use whatever is in input field.

`setInterval` in Angular is `$interval` 

`setTimeout` in Angular is `$timeout`
