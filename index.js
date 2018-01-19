var animal = 'dog'

function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
<<<<<<< HEAD
  return n + 2
=======
  
  return n + 2

  // Feel free to move things around!
  
>>>>>>> bcf35217d2d9abdf36a81e28cc8b20bf876ef17b
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theeFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
