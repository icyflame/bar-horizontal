#!/usr/bin/env node
'use strict';
var meow = require('meow');
var barHorizontal = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ bar-horizontal [input]',
		'',
		'Examples',
		'  $ bar-horizontal',
	].join('\n')
});

console.log(barHorizontal(cli.input[0] || 'unicorns'));
