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


input_obj = {
  'first task': 20,
  'second task': 40,
  'a really really long label!': 90,
  'short one': 20
};

barHorizontal(input_obj, {labels: true});
// => Prints this on the console :-
first task                  : ▇▇▇▇ 12%
second task                 : ▇▇▇▇▇▇▇▇▇ 24%
a really really long label! : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 53%
short one                   : ▇▇▇▇ 12%
```


## CLI

```
$ npm install --global bar-horizontal
```
```
$ bar-horizontal --help

  Usage
    $ bar-horizontal input-array
    $ bar-horizontal input-array --values

  Examples
    $ bar-horizontal 1 2 3 4
     : ▇▇▇▇▇▇▇▇ 10%
     : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 20%
     : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 30%
     : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 40%
```


## API

### barHorizontal(input_obj, [options])

#### input_obj

*Required*  
Type: `Array of Numbers`  
The array whose bar chart will be created.

#### options

##### labels

*Optional*  
Type: `Boolean`  
Default: `false`  
Labels to be shown or not

##### warnings

*Optional*
Type: `Boolean`
Default: `false`
Whether or not to show warnings (eg. 'missing/invalid input')

##### ascii

*Optional*
Type: `Boolean`
Default: `false`
Whether or not to use the `=` when printing the bar graph(s) to stdout. If this argument is missing/falsy, the `|` character will be used instead.

## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
