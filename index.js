'use strict';
module.exports = function (data_array, opts) {

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

	var fixedLabels = new Array();
	var labelsTrue = opts ? opts.labels : false;
	var maxLabelLength = 0;

	if (labelsTrue) {
		for (var i in data_array) {
			maxLabelLength = (i.toString().length > maxLabelLength)
			? i.toString().length : maxLabelLength;
		}

		for (var i in data_array) {
			var padLength = maxLabelLength - i.toString().length + 1;
			fixedLabels.push(i + (padLength > 0
				? new Array(padLength).join(' ') : ''));
		}
	}

	maxBarWidth = labelsTrue ? (maxBarWidth - maxLabelLength) : maxBarWidth;

	for(var i in percentage){
		barWidths.push(Math.ceil(percentage[i] / max_percentage * maxBarWidth))
	}

	for(var i in percentage){
		console.log((labelsTrue ? fixedLabels[i] : '') + ' : '
		+ new Array(barWidths[i]).join(barChar) + ' '
		+ percentage[i].toFixed() + '%');
	}

};
