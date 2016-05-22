/* global it */
'use strict'
var assert = require('assert')
var horizontal = require('./')

var input_obj = {
	'first task': 20,
	'second task': 40,
	'a really really long label!': 90,
	'short one': 20
};
console.log("Bar with labels and values");
horizontal(input_obj, {labels: true, values: true});
console.log("Bar with labels and without values, i.e with percentages");
horizontal(input_obj, {labels: true, values: false});
console.log("Bar without labels and without values, i.e with percentages");
horizontal(input_obj, {labels: false, values: false});
console.log("Default bar graph (must be same as above)");
horizontal(input_obj);
