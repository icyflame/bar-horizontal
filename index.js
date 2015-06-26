'use strict';
module.exports = function (input_obj, opts) {

	var barChar = require('figures').square;
	var Stats = require('fast-stats').Stats;
	var width = require('window-size').width;
	var maxBarWidth = width - (width > 20 ? 20 : 1);
	var total_sum = 0.;
	var percentage = [];
	var barWidths = [];

	for (var i in input_obj) {
		total_sum += input_obj[i];
	}

	for (var i in input_obj) {
		percentage.push((input_obj[i] / total_sum) * 100);
	}

	var max_percentage = (new Stats().push(percentage)).range()[1];

	var fixedLabels = new Array();
	var labelsTrue = opts ? opts.labels : false;
	var maxLabelLength = 0;

	if (labelsTrue) {
		for (var i in input_obj) {
			maxLabelLength = (i.toString().length > maxLabelLength)
			? i.toString().length : maxLabelLength;
		}

		for (var i in input_obj) {
			var padLength = maxLabelLength - i.toString().length + 1;
			fixedLabels.push(i + (padLength > 0
				? new Array(padLength).join(' ') : ''));
		}
	}

	maxBarWidth = labelsTrue ? (maxBarWidth - maxLabelLength) : maxBarWidth;

	for (var i in percentage) {
		var potentialWidth = Math.ceil(percentage[i] / max_percentage * maxBarWidth);
		barWidths.push(potentialWidth < 0 ? 0 : potentialWidth);
	}

	for (var i in percentage) {
		console.log((labelsTrue ? fixedLabels[i] : '') + ' : '
		+ new Array(barWidths[i]).join(barChar) + ' '
		+ percentage[i].toFixed() + '%');
	}

	for (var i in barWidths) {
		if (barWidths[i] == 0) {
			console.log("This terminal's width is too less!" + (labelsTrue ? ' You can remove labels, and try again!' : ''));
			break;
		}
	}

};
