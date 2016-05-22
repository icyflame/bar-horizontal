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
    '   : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 40%'
  ].join('\n')
})

console.log(cli.input);
console.log(cli.flags);
barHorizontal(cli.input, cli.flags)
