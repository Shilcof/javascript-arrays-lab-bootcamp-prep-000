var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(element) {
  kittens.push(element);
  return kittens
}

function destructivelyPrependKitten(array, element) {
  array.unshift(element);
  return array
}

function destructivelyRemoveLastKitten(array, element) {
  array.pop();
  return array
}

function destructivelyRemoveFirstKitten(array, element) {
  array.shift();
  return array
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