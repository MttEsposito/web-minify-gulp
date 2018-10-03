"use strict";

var myarray = [1, 2, 3, 4, 5];
var sum = myarray.reduce(function (a, b) {
    return a + b;
}, 0);

var showSum = function showSum() {
    alert("the total sum is " + sum);
};
showSum();
'use strict';

var fruitsArray = ['apple', 'banana', 'mango', 'pear'];

var loopFruits = function loopFruits() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = fruitsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var fruit = _step.value;

            alert('Next fruit is ' + fruit);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

loopFruits();