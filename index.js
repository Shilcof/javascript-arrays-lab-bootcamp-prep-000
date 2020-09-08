var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(element) {
  kittens.push(element);
  return kittens
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(array, element) {
  return array.concat(element);
}

function prependKitten(array, element) {
  return element.concat(array);
}

function removeLastKitten(array, element) {
  var len = array.length;
  return array.slice(0,len-1);
}

function removeFirstKitten(array, element) {
  var len = array.length;
  return array.slice(1);
}