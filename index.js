var through = require('through')
  , noop = require('noop')

module.exports = function via(fn){
  var stream = through(write, noop)
    , buffer = ''
    , ending

  return stream

  function write(chunk){
    buffer += chunk
    ending && clearTimeout(ending)
    ending = setTimeout(function(){ stream.push(fn(buffer.toString())) }, 20)
  }
}