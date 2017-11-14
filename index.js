'use strict';
var _ = require('lodash');

module.exports = function (inputObj, opts) {
  // Throw error if `inputObj` does not exist or is not an array/object.
  if ( !inputObj || typeof inputObj !== 'object'  ) {
    throw new Error( 'Whoops! Please ensure that `barHorizontal()` is invoked with either an array or object.' );
  }

  // Throw error if `inputObj` is an empty array or key-less object.
  if ( ( typeof inputObj.length !== 'undefined' && !inputObj.length ) || ( typeof inputObj.length === 'undefined' && !Object.keys( inputObj ).length ) ) {
    throw new Error( 'Whoops! Please ensure that `barHorizontal()` is invoked with a non-empty array or object.' );
  }

  // Ensure that `opts` is always an object.
  opts = (opts && typeof opts === 'object') ? opts : {};

  var width = (opts.width && typeof opts.width === 'number') ? opts.width : require('window-size').width;
  var barChar = opts.ascii ? '=' : require('figures').square;

  var maxBarWidth = width - (width > 20 ? 20 : 1);

  var totalSum = 0.0;
  var percentage = [];
  var barWidths = [];

  var values = _.values(inputObj);
  var keys = _.keys(inputObj);

  var printValues = opts.values;

  totalSum = _.sum(values);
  percentage = _.map(values, (elem) => elem / totalSum * 100);
  var maxPercentage = _.max(percentage);

  var fixedLabels = [];

  var labelsTrue = opts.labels || false;

  var maxLabelLength = 0;

  if (labelsTrue) {
    maxLabelLength = _.max(_.map(keys, e => e.toString().length));
    fixedLabels = _.map(inputObj, (value, key) => {
      var padLength = maxLabelLength - key.toString().length + 1;
      return padLength > 0 ? (key + new Array(padLength).join(' ')) : '';
    });
  }

  maxBarWidth = labelsTrue ? (maxBarWidth - maxLabelLength) : maxBarWidth;

  barWidths = _.map(percentage, elem => {
    var potentialWidth = Math.ceil(elem / maxPercentage * maxBarWidth);
    return (potentialWidth <= 1 ? 0 : potentialWidth);
  });

  percentage.forEach(function (element, index, array) {
    var elementLine = (labelsTrue ? fixedLabels[index] : '');
    elementLine += ' : ';
    elementLine += new Array(barWidths[index]).join(barChar);
    elementLine += '  ';
    elementLine += (printValues ? (values[index].toFixed(2)) : (element.toFixed(2) + '%'));
    console.log(elementLine);
  });

  if (_.filter(barWidths, x => x == 0).length > 0 && opts.warnings) {
    var message = "This terminal's width is too less!";

    if (labelsTrue) {
      message += ' You can remove labels, and try again!';
    }

    console.log(message);
  }
};
