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


// --------------------------------------------------
// DECLARE TESTS
// --------------------------------------------------
describe( 'barHorizontal', function() {
  it( 'Should export a function.', function() {
    assert.equal( typeof barHorizontal, 'function' );
  } );


  xit( 'Should exit when invoked with 0x arguments.', function() {
    /// TODO
  } );


  xit( 'Should exit when invoked with 1x invalid argument.', function() {
    /// TODO
  } );


  xit( 'Should exit when invoked with an empty array argument.', function() {
    /// TODO
  } );


  it( 'Should run as normal when invoked with 1x non-empty array argument.', function() {
    assert.doesNotThrow( function() {
      barHorizontal( [ 1,2,3 ] );
    } );
  } );


  it( 'Should run as normal when invoked with a 1x object argument', function() {
    assert.doesNotThrow( function() {
      barHorizontal( { a: 1, b: 2, c: 3 } );
    } );
  } );


  it( 'Should accept an `options` object as an optional second argument.', function() {
    assert.doesNotThrow( function() {
      return barHorizontal( [ 1,2,3 ], {} );
    } );
  } );


  it( 'Should not display labels by default.', function() {
    let stdout = capcon.captureStdout( function() {
      return barHorizontal( { a: 1, b: 2, c: 3 } );
    } );

    assert.equal( stdout.indexOf( 'a' ), -1 );
  } );


  it( 'Should display labels when invoked with the `labels: true` key/value pair.', function() {
    let stdout = capcon.captureStdout( function() {
      return barHorizontal( { a: 1, b: 2, c: 3 }, { labels: true } );
    } );

    assert.ok( stdout.indexOf( 'a' ) !== -1 );
  } );


  xit( 'Should not display warnings by default.', function() {
    /// TODO
  } );


  xit( 'Should display warnings when invoked with the `warnings: true` key/value pair.', function() {
    /// TODO
  } );


  it( 'Should create bar graphs using the `square` character by default.', function() {
    let stdout = capcon.captureStdout( function() {
      return barHorizontal( [ 1, 2, 3 ]  );
    } );

    assert.ok( stdout.indexOf( figures.square ) !== -1 );
  } );


  it( 'Should create bar graphs using the "=" character when invoked with the `ascii: true` key/value pair.', function() {
    let stdout = capcon.captureStdout( function() {
      return barHorizontal( [ 1, 2, 3 ], { ascii: true } );
    } );

    assert.ok( stdout.indexOf( '=' ) !== -1 );
  } );
} );
