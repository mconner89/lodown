'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns the given value unchanged
 * 
 * @param {value} value: input value can be any datatype
 * 
 * @return {value}: the value returned will be the same as the input value 
 * unaltered
 */
 
 function identity(value) {
     return value;
 }
 module.exports.identity = identity;

/**
 * typeOf: returns the type of the given value as a string
 * 
 * @param {value} value: input value can be any datatype
 * 
 * @return {string}: string denoting the type of variable type of value
 */
 
 function typeOf(value) {
         if (Array.isArray(value) == true) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else {
        return typeof(value);
    }
 }
 module.exports.typeOf = typeOf;
 
/**
 * first: returns the specified number of elements of an array
 * 
 * @param {array} array: the array who's elements are being used
 * 
 * @param {number} number: the number of elements to pull from array
 * 
 * @return {array}: array of elements from array, as specified by number 
 * 
 * Edge Cases:
 *  1. If number is larger than the given array, first will return the entire 
 *     array.
 *  2. If number is negative, first will return an empty array.
 * 
 */
 
 function first(array, number) {
    var myArray = [];
    if(!Array.isArray(array)) {
        return [];
    } else if(number == undefined || number.isNaN == true) {
        return array[0];
    } else if (number > array.length) {
        return array;
    } else {
        for(var i = 0; i < number; i++) {
            myArray.push(array[i]);
        }
    }
    return myArray;
 }
 module.exports.first = first;
 
/**
 * last: returns the specified number of elements from the end of an array as
 * a new array
 * 
 * @param {array} array: the array from which elements will be returned
 * 
 * @param {number} number: the number of elements to return from array
 * 
 * @return {array}: an array containing the specified number of elements from
 * the array input
 * 
 *  Edge Cases:
 *  1. If number is larger than the given array, last will return the entire 
 *     array.
 *  2. If number is negative, last will return an empty array.
 * 
 */
 
 function last(array, number) {
    let myArray = [];
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number == undefined || number.isNaN == true) {
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    } else {
        for (let i = array.length - 1; i > 0; i--) {
            myArray.unshift(array[i]);
        }
    }
    return myArray;     
 }
 module.exports.last = last;
 
/**
 * indexOf: returns the index of an array that is the first occurrence of a 
 * specified value
 * 
 * @param {array} array: array of values to be searched through
 * 
 * @param {value} value: value to search for in array
 * 
 * @return {value}: index position of value input in array input if found; will
 * return -1 if value is not found in array
 * 
 */
 
 function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (value == array[i]) {
            return i;
        }
    }
    return -1;
 }
 module.exports.indexOf = indexOf;
 
/**
 * contains: check an array to see if a particular value occurs in said array
 * 
 * @param {array} array: array to search through
 * 
 * @param {value} value: value to search for in array
 * 
 * @return {boolean}: true if value is found, false if value is not found
 * 
 */
 
 function contains(array, value) {
    return array.indexOf(value) == -1 ? false : true;
 }
 module.exports.contains = contains;
 
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: returns a new array from an array input that has all the duplicates
 * removed
 * 
 * @param {array} array = array from which duplicates are to be removed; 
 * will remain unaltered
 * 
 * @return {array} = new array that contains all elements from array input, but
 * with no duplicates
 * 
 */
 
 function unique(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        let first = indexOf(array, array[i]);
        if(first == i) {
            newArray.push(array[i]);
        }
    }
    return newArray;     
 }
 module.exports.unique = unique;
 
 
/**
 * filter: calls a function on an array and creates a new array containing 
 * elements that the function call returned true for. The function can be called
 * on every element, index, and on the entire array. 
 * 
 * @param {array} array: array that will have a function executed on each of its
 * parameters
 * 
 * @param {function} func: function to be exected on each parameter of array
 * input
 * 
 * @return {array}: array consisting of elements from array input that evaluated
 * to true after function was executed on them
 * 
 */

 function filter(array, func) {
    let myArray = [];
    for(var i = 0; i < array.length; i++) {
        if(func(array[i], i, array) == true) {
            myArray.push(array[i]);
        }
    }
    return myArray;     
 }
 module.exports.filter = filter;
 
/**
 * reject: calls a function on an array and creates a new array containing 
 * elements that the function call returned false for. The function can be 
 * called on every element, index, and on the entire array. 
 * 
 * @param {array} array: array that will have a function executed on each of its
 * parameters
 * 
 * @param {function} func: function to be exected on each parameter of array
 * input
 * 
 * @return {array}: array consisting of elements from array input that evaluated
 * to false after function was executed on them
 * 
 */

 function reject(array, func) {
    var reject = [];
    for (let i = 0; i < array.length; i++) {
        if(filter(array, func) < array[i]) {
            reject.push(i);
        }
    }
    return reject;     
 }
 module.exports.reject = reject;
 
/**
 * partition: run a function on each element of array and return an array that 
 * is made up of two subarrays: the first subarray contains all values that the
 * function call returned a truthy statement on, the second subarray contains 
 * all values that the function call returned a falsey statement on
 * 
 * @param {array} array: array that will have a function executed one each of 
 * its elements
 * 
 * @param {function} func: function that will be executed on each element of 
 * array input
 * 
 * @return {array}: array consisting of two subarrays: the first subarray 
 * contains all values that the function call returned a truthy statement on, 
 * the second subarray contains all values that the function call returned a 
 * falsey statement on
 * 
 */

 function partition(array, func) {
    var trueArray = filter(array, func);
    var falseArray = [];
    for(var x = 0; x < array.length; x++) {
        if(func(array[x], x, array) == false) {
            falseArray.push(array[x]);
        }
    }
    var finalArray = [];
    finalArray.push(trueArray);
    finalArray.push(falseArray);
    return finalArray;     
 }
 module.exports.partition = partition;
 
/**
 * map: calls a function for each element in an array (or object) and returns 
 * the value of those calls as a new array
 * 
 * @param {object, array} collection: array or object that will have the func
 * input executed on each of its elements
 * 
 * @param {function} func: function to be executed on each element of collection
 * 
 * @return {array}: array consisting of the value of each element of colelction
 * after func has been executed on it.
 * 
 */

 function map(collection, func) {
    var newArray = [];
    if (Array.isArray(collection) == true) {
        for(let i = 0; i < collection.length; i++) {
            newArray.push(func(collection[i], i, collection));
        }
    } else if (typeof collection == 'object') {
        for(let key in collection) {
            newArray.push(func(collection[key], key, collection));
        }
    }
    return newArray;     
 }
 module.exports.map = map;
 
/**
 * pluck: takes an array and returns an array containing the value of a 
 * specified property for every element of that array
 * 
 * @param {array} array: each element of this array will have the value of a 
 * speficied property placed in a new array
 * 
 * @param {string} prop: name of property who's value will be pulled from each
 * element of array input
 * 
 * @return {array}: new array that contains each property value found at each
 * element of array input
 * 
 */

 function pluck(array, prop) {
    let newArray = map(array, function(obj) {
        for(var key in obj) {
            return obj[prop];
           }
    });
    return newArray;     
 }
 module.exports.pluck = pluck;
 
/**
 * every: checks every element of an array (or object) against a function and 
 * returns true if all of them or true, or false is any of them are false
 * 
 * @param {array, object} collection: an array or object. func will be executed
 * upon each element of this input
 * 
 * @param {function} func: a function that will be executed upon each element of
 * collection
 * 
 * @return {boolean}: returns true if every function call returned true or false
 * if any function call returned false
 * 
 * Edge cases:
 *  1.  If no function is passed, every will test if every element of collection
 *      is truthy, and return true if so and false if any of them evaluate to
 *      falsey
 *  2.  If func doesn't evaluate to a boolean, every will return true.
 * 
 */

 function every(collection, func) {
    if (Array.isArray(collection) === true) {
        for(let i = 0; i < collection.length; i++) {
            if (func == undefined) {
               if (collection[i] == false) {
                   return false;
               } 
               return true;
           } else if (func(collection[i], i, collection) == false) {
                return false;
            }
        }
    } else if (typeof(collection) === 'object') {
        for (let key in collection) {
            if (func(collection[key], key, collection) == false) {
                return false;
            }
        }
    }
    return true;     
 }
 module.exports.every = every;
 
/**
 * some: checks every element of an array (or object) against a function and 
 * returns true if any of them or true, or false is all of them are false
 * 
 * @param {array, object} collection: an array or object. func will be executed
 * upon each element of this input
 * 
 * @param {function} func: a function that will be executed upon each element of
 * collection
 * 
 * @return {boolean}: returns true if any function call returned true or false
 * if every function call returned false
 * 
 *  * Edge cases:
 *  1.  If no function is passed, some will test if any element of collection
 *      is truthy, and return true if so and false if all of them evaluate to
 *      falsey
 *  2.  If func doesn't evaluate to a boolean, some will return false.
 * 
 */

 function some(collection, func) {
    if(Array.isArray(collection) == true) {
        for(let i = 0; i < collection.length; i++) {
            if(func == undefined) {
                if(collection[i] == true) {
                    return true;
                }
                return false;
            } else if(func(collection[i], i, collection) == true) {
                return true;
            }
        } 
    } else if(typeof collection === 'object') {
            for (let key in collection) {
                if (func(collection[key], key, collection) == true) {
                    return true;
                }
            }
    }
    return false;     
 }
 module.exports.some = some;
 
/**
 * reduce: execute a function sequentially on the elements of an array, passing 
 * the value of each execution into the next function call
 * 
 * @param {array} array: array that contains values to sequentially execute a 
 * function upon
 * 
 * @param {function} func: function to be executed sequentially upon array input
 * 
 * @param {value} seed: value to feed into function to begin sequential 
 * execution. can be a number, string, array, or object.
 * 
 * @return {value}: returns the end result of executing func on an element of 
 * array and subsequently passing that value into the next function call
 * 
 */

 function reduce(array, func, seed) {
    let prevRes;
    if(seed === undefined) {
        prevRes = array[0];
        for(let i = 1; i < array.length; i++) {
            prevRes = func(prevRes, array[i], i);
        } 
    } else {
        prevRes = seed;
        for(let i = 0; i < array.length; i++) {
            prevRes = func(prevRes, array[i], i);
        }
    }
    return prevRes;
};
 module.exports.reduce = reduce;
 
/**
 * extend: copy a property from any number of objects onto one object
 * 
 * @param {object} objects: objects whose properties will be passed to the first
 * object entered as a parameter. can accept any number of objects
 * 
 * @return {object}: the updated object that contains all passed properties
 * 
 */

 function extend(...objects) {
    let objectArray = arguments;
    let test = objectArray[0];
    for(let i = 1; i < arguments.length; i++) {
        Object.assign(test, objectArray[i]);
    }
    return test;     
 }
 module.exports.extend = extend;