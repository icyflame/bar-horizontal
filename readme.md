# bar-horizontal [![Build Status](https://travis-ci.org/icyflame/bar-horizontal.svg?branch=master)](https://travis-ci.org/icyflame/bar-horizontal)

> Create beautiful horizontal charts, that fit your terminal.


## Install

```
$ npm install --save bar-horizontal
```


## Usage

```js
var barHorizontal = require('bar-horizontal');
barHorizontal([6, 5, 4, 3, 2]);
// => Prints this on the console :-
: ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 30%
: ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 25%
: ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 20%
: ▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 15%
: ▇▇▇▇▇▇▇▇▇ 10%
```


## CLI

```
$ npm install --global bar-horizontal
```
```
$ bar-horizontal --help

  Usage
    $ bar-horizontal input-array

  Examples
    $ bar-horizontal 1 2 3 4
     : ▇▇▇▇▇▇▇▇ 10%
     : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 20%
     : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 30%
     : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 40%
```


## API

### barHorizontal(input_arr)

#### input_arr

*Required*  
Type: `Array of Numbers`

The array whose bar chart will be created.

## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
