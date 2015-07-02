var expect = require('chai').expect
  , through = require('through')
  , via = require('./')

describe('via', function() {

  it('should buffer output', function(done) {
    var stream = through()
      , fn = function(d){ result = d }
      , result 

    stream.pipe(via(fn))
    ;[1,2,3,4,5].map(function(d){
      setTimeout(function(){
        stream.push(d)
      }, d*50)
    })

    setTimeout(function(){
      expect(result).to.be.eql('12345')
      done()
    }, 400)
  })

})