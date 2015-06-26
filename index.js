'use strict';
module.exports = function (data_array, str, opts) {

	var barChar = require('figures').square;
	var Stats = require('fast-stats').Stats;
	var width = require('window-size').width;
	var maxBarWidth = width - 20;
	var total_sum = 0.;
	var percentage = [];
	var barWidths = [];

	for(var i in data_array){
		total_sum += data_array[i];
	}

	for(var i in data_array){
		percentage.push((data_array[i] / total_sum) * 100);
	}

	var max_percentage = (new Stats().push(percentage)).range()[1];

	for(var i in percentage){
		barWidths.push(Math.ceil(percentage[i] / max_percentage * maxBarWidth))
	}

	for(var i in percentage){
		console.log(': ' + new Array(barWidths[i]).join(barChar) + ' ' + percentage[i].toFixed() + '%');
	}

};
