'use strict';

//Do not change any of the function names

function multiplyArguments() {
	//use the arguments keyword to multiply all of the arguments together and return the product
	//if no arguments are passed in return 0
	//if one argument is passed in just return it
    if(arguments.length == 0)
    {
        return 0;
    }
    var product = 1;
    for(var index = 0; index < arguments.length; index++)
    {
        product *= arguments[index];
    }
    return product;
}

function invokeCallback(cb) {
	//invoke cb
    cb();
}

function sumArray(numbers, cb) {
	//sum up all of the integers in the numbers array
	//pass the result to cb
	//no return is necessary
    var sum = 0;
    for(var index = 0; index < numbers.length; index++)
    {
        sum += numbers[index];
    }
    cb(sum);
}

function forEach(arr, cb) {
	//iterate over arr and pass its values to cb one by one
	//hint: you will be invoking cb multiple times (once for each value in the array)
    arr.forEach(function(num)
    {
        cb(num);
    });
}

function map(arr, cb) {
	//create a new array
	//iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
	//the new array should be the same length as the array argument
    var result = [];
    arr.forEach(function(num){
        result.push(cb(num));
    });
    return result;
}

function getUserConstructor() {
	//create a constructor called User
	//it should accept an options object with username, name, email, and password properties
	//in the constructor set the username, name, email, and password properties
	//the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
	//{{name}} should be the name set on each instance
	//return the constructor
    function User(options) {
        this.username = options.username;
        this.name = options.name;
        this.email = options.email;
        this.password = options.password;
        this.sayHi = function()
        {
            return 'Hello, my name is ' + name;
        };
    }
    return User;
}

function addPrototypeMethod(Constructor) {
	//add a method to the constructor's prototype
	//the method should be called 'sayHi' and should return the string 'Hello World!'
    Constructor.prototype.sayHi = function()
    {
        return 'Hello World!';
    };
}

function addReverseString() {
	//add a method to the string constructor's prototype that returns a reversed copy of the string
	//name this method reverse
	//hint:
	//you will need to use 'this' inside of reverse
    //the argument '' for split and join changes the default "delimiter" or separator to none
    //This method changes the string(this) to an array(split) then uses the array method reverse() then converts it into a string(join())
    String.prototype.reverse = function()
    {
        return this.split('').reverse().join('');
    };
}

function nFactorial(n) {
	//return the factorial for n
	//solve this recursively
	//example:
	//the factorial of 3 is 6 (3 * 2 * 1)
    if(n == 1)
    {
        return 1;
    }
    return n * nFactorial(n-1);
}

function cacheFunction(cb) {
	//Extra Credit
	//use closure to create a cache for the cb function
	//the function that you return should accept a single argument and invoke cb with that argument
	//when the function you return is invoked with an argument it should save that argument and its result
	//when the function you return is called again with an argument that it has seen before it should not call cb
	//but should instead directly returned the previous result
	//example:
	//cb -> function(x) { return x * x; } |||||cb is this function defined here
	//if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
	//if the function you return is invoked again with 5 it will look on an object in the closure scope
	//and return 25 directly and will not invoke cb again
    var cache = {};
    function cacheSquared(num)
    {
        //Cache stores what it has seen already. So if number(argument) has been seen, it'll return what it previously stored
        if(!cache.hasOwnProperty(num))
        {
            cache[num] = cb(num);
        }
        return cache[num];
    }
    return cacheSquared;
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
	multiplyArguments: multiplyArguments,
	invokeCallback: invokeCallback,
	sumArray: sumArray,
	forEach: forEach,
	map: map,
	getUserConstructor: getUserConstructor,
	addPrototypeMethod: addPrototypeMethod,
	addReverseString: addReverseString,
	nFactorial: nFactorial,
	cacheFunction: cacheFunction
};
