# bar-horizontal [![Build Status](https://travis-ci.org/icyflame/bar-horizontal.svg?branch=master)](https://travis-ci.org/icyflame/bar-horizontal)

> Create beautiful horizontal charts, that fit your terminal.


## Install

```
$ npm install --save bar-horizontal
```


## Usage

```js
var barHorizontal = require('bar-horizontal');
data_array = [1, 2, 3, 4, 5, 6];
barHorizontal(data_array);
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global bar-horizontal
```
```
$ bar-horizontal --help

  Usage
    bar-horizontal [input]

  Example
    bar-horizontal
```


## API

### barHorizontal(input, [options])

#### input

*Required*  
Type: `Array of Numbers`

The array whose bar chart will be created.

## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
