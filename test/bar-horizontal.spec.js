// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const assert = require( 'assert' );

// Vendor
const figures = require( 'figures' );
const capcon = require( 'capture-console' );

// Project
const barHorizontal = require( '../' );

// Constants
const width = 100;
const WIDTH_BASE = { width };

// --------------------------------------------------
// DECLARE TESTS
// --------------------------------------------------
describe( 'basics', function() {
  it( 'Should export a function.', function() {
    assert.equal( typeof barHorizontal, 'function' );
  } );
});

describe( 'argument checking', function () {

  it( 'Should exit when invoked with 0x arguments.', function() {
    assert.throws( function() {
      barHorizontal();
    } );
  } );


  it( 'Should exit when invoked with 1x invalid argument.', function() {
    assert.throws( function() {
      barHorizontal( 'This is an invalid argument.' );
    } );
  } );


  it( 'Should exit when invoked with an empty array argument.', function() {
    assert.throws( function() {
      barHorizontal( [] );
    } );
  } );


  it( 'Should exit when invoked with an empty object argument.', function() {
    assert.throws( function() {
      barHorizontal( {} );
    } );
  } );


  it( 'Should run as normal when invoked with 1x non-empty array argument.', function() {
    assert.doesNotThrow( function() {
      barHorizontal( [ 1,2,3 ], WIDTH_BASE );
    } );
  } );


  it( 'Should run as normal when invoked with a 1x object argument', function() {
    assert.doesNotThrow( function() {
      barHorizontal( { a: 1, b: 2, c: 3 }, WIDTH_BASE );
    } );
  } );


  it( 'Should accept an `options` object as an optional second argument.', function() {
    assert.doesNotThrow( function() {
      return barHorizontal( [ 1,2,3 ], WIDTH_BASE );
    } );
  } );
});

describe( 'labels option', function () {

  it( 'Should not display labels by default.', function() {
    let stdout = barHorizontal( { a: 1, b: 2, c: 3 }, WIDTH_BASE );

    assert.equal( stdout.indexOf( 'a' ), -1 );
  } );


  it( 'Should display labels when invoked with the `labels: true` key/value pair.', function() {
    let stdout = barHorizontal( { a: 1, b: 2, c: 3 }, { width, labels: true } );

    assert.ok( stdout.indexOf( 'a' ) !== -1 );
  } );
});

describe( 'warnings option', function () {

  it( 'Should not display warnings by default.', function() {
    let stdout = barHorizontal( [ 10, 100 ], { width: 4 } );

    assert.equal( stdout.indexOf( 'too less' ), -1 ); /// TODO: Make less brittle: what if the 'warning string' changes?
  } );


  it( 'Should display warnings when invoked with the `warnings: true` key/value pair.', function() {
    let stdout = barHorizontal( [ 10, 90 ], { width: 4, warnings: true } );

    assert.ok( stdout.indexOf( 'too less' ) !== -1 ); /// TODO: Make less brittle: what if the 'warning string' changes?
  } );
});

describe( 'ascii option', function () {

  it( 'Should create bar graphs using the `square` character by default.', function() {
    let stdout = barHorizontal( [ 1, 2, 3, 4 ], WIDTH_BASE  );

    assert.ok( stdout.indexOf( figures.square ) !== -1 );
  } );


  it( 'Should create bar graphs using the "=" character when invoked with the `ascii: true` key/value pair.', function() {
    let stdout = barHorizontal( [ 1, 2, 3, 4 ], { ascii: true, width } );

    assert.ok( stdout.indexOf( '=' ) !== -1 );
  } );
} );
