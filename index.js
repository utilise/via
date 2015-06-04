var through = require('through')

module.exports = function via(fn){
  var buffer = ''

  return through(write, end)

  function write(chunk){
    buffer += chunk
  }

  function end(){
    this.queue(fn(buffer.toString()))
  }
}