/*
1. Write a function called all which accepts an array and a callback and returns true 
if every value in the array returns true when passed as a parameter to the callback function.
*/

function all(arr, callbackFun ) {
    let result = true;
    let callbackres = false;
    arr.forEach(element => {
        callbackres = callbackFun(element);
        result = (callbackres && result);
    });
    return result;
}

var allAreLessThanSeven = all([1,2,9], function(num){

return num < 7;

});

console.log(allAreLessThanSeven); // false


/*
2. Write a function called contains that searches for a value in a nested object. 
It returns true if the object contains that value.
*/

function contains(val, obj) {
    let result = false;
    checkType(obj);
    function checkType(obj){
        for(const key in obj) {
            let value = obj[key]
            if(value !== undefined) {
                if(value && typeof value == 'object') {
                    checkType(value)
                }
                else {
                    if(val == value) {
                      result = true;
                    }
                }
            }
        }
    }
    return result;
}
var nestedObject = {

    data: {

        info: {

            stuff: {

                thing: {

                    moreStuff: {

                        magicNumber: 44,

                        something: 'foo2'

                    }

                }

            }

        }

    }

}

console.log(contains( 44 , nestedObject))
