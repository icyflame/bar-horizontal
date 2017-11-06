/* global it */
'use strict'
var assert = require('assert');
var horizontal = require('./');

var line = function () {
  console.log();
  console.log()
}

var input_obj = {
	'first task': 20,
	'second task': 40,
	'a really really long label!': 90,
	'short one': 20
};

// there are a total of 4 options, generate all combinations and strings

var getStrings = function (n) {
  if (n == 1) {
    return ['0', '1'];
  }

  var base = getStrings(n-1);

  var res = [ ];
  for (var str in base) {
    res.push(base[str] + '0');
    res.push(base[str] + '1');
  }

  return res;
}

var numOpt = 4;
var opts = getStrings(numOpt);

console.log(opts);
console.log(getStrings(1));
console.log(getStrings(2));
console.log(getStrings(3));

line();
console.log("Bar with labels and values");
horizontal(input_obj, {labels: true, values: true});

line();
console.log("Bar with labels and without values, i.e with percentages");
horizontal(input_obj, {labels: true, values: false});

line();
console.log("Bar without labels and without values, i.e with percentages");
horizontal(input_obj, {labels: false, values: false});

line();
console.log("Default bar graph (must be same as above)");
horizontal(input_obj);

line();
console.log("Bar with labels and values (ASCII)");
horizontal(input_obj, {labels: true, values: true, ascii: true});

line();
console.log("Bar with labels and without values, i.e with percentages (ASCII)");
horizontal(input_obj, {labels: true, values: false, ascii: true});

line();
console.log("Bar without labels and without values, i.e with percentages (ASCII)");
horizontal(input_obj, {labels: false, values: false, ascii: true});

process.exit(0);
