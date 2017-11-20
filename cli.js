#!/usr/bin/env node
'use strict'
var meow = require('meow')
var barHorizontal = require('./')

var cli = meow({
  help: [
    'Usage',
    '  $ bar-horizontal input-array',
		'  $ bar-horizontal input-array --values',
    '',
    'Examples',
    '  $ bar-horizontal 1 2 3 4',
    '   : ▇▇▇▇▇▇▇▇ 10%',
    '   : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 20%',
    '   : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 30%',
    '   : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 40%',
    '',
    '  $ bar-horizontal 1 2 3 4 --ascii ',
    '   : ======  10.00%',
    '   : =============  20.00%',
    '   : ====================  30.00%',
    '   : ===========================  40.00%'
  ].join('\n')
});

console.log(barHorizontal(cli.input, cli.flags));
