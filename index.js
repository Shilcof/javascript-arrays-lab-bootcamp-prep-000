var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(array, element) {
  array = [...array, element];
  return array
}

function appendKitten(array, element) {
  return [...array, element];
}