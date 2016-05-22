'use strict'
module.exports = function (input_obj, opts) {
  var barChar = require('figures').square
  var Stats = require('fast-stats').Stats
  var width = require('window-size').width
  var ObjectValues = require('object.values')

  var maxBarWidth = width - (width > 20 ? 20 : 1)
  var total_sum = 0.0
  var percentage = []
  var barWidths = []
  var index
  var values = ObjectValues(input_obj)

	var printValues = false;

	if (opts !== undefined) {
		if (opts.values === 'true' || opts.values === true) {
			printValues = true;
		}
	}

  for (index in input_obj) {
    total_sum += input_obj[index]
  }

  for (index in input_obj) {
    percentage.push((input_obj[index] / total_sum) * 100)
  }

  var max_percentage = (new Stats().push(percentage)).range()[1]

  var fixedLabels = []
  var labelsTrue = opts ? opts.labels : false
  var maxLabelLength = 0

  if (labelsTrue) {
    for (index in input_obj) {
      maxLabelLength = (index.toString().length > maxLabelLength)
        ? index.toString().length : maxLabelLength
    }

    for (index in input_obj) {
      var padLength = maxLabelLength - index.toString().length + 1
      fixedLabels.push(index + (padLength > 0
          ? new Array(padLength).join(' ') : ''))
    }
  }

  maxBarWidth = labelsTrue ? (maxBarWidth - maxLabelLength) : maxBarWidth

  percentage.forEach(function (element, index, array) {
    var potentialWidth = Math.ceil(element / max_percentage * maxBarWidth)
    barWidths.push(potentialWidth < 0 ? 0 : potentialWidth)
  })

  percentage.forEach(function (element, index, array) {
    console.log((labelsTrue ? fixedLabels[index] : '') + ' : ' +
      new Array(barWidths[index]).join(barChar) + '  ' +
      (printValues ? (values[index].toFixed(2)) : (element.toFixed(2) + "%")))
  })

  for (index in barWidths) {
    if (barWidths[index] === 0) {
      console.log("This terminal's width is too less!" + (labelsTrue ? ' You can remove labels, and try again!' : ''))
      break
    }
  }

}
