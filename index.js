var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(array, element) {
  return array
}

function destructivelyPrependKitten(array, element) {
  array = [...array, element];
  return array
}

function destructivelyRemoveLastKitten(array, element) {
  array = [...array, element];
  return array
}

function destructivelyRemoveFirstKitten(array, element) {
  array = [...array, element];
  return array
}

function appendKitten(array, element) {
  return [...array, element];
}

function prependKitten(array, element) {
  return [element, ...array];
}

function removeLastKitten(array, element) {
  var len = array.length;
  return array.slice(0,len-1);
}

function removeFirstKitten(array, element) {
  var len = array.length;
  return array.slice(1);
}