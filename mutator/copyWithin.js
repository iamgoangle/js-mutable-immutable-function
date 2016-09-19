/*
    target	Required. The index position to copy the elements to
    start	Required. The index position to start copying elements from
    end	Optional. The index position to stop copying elements from (default is array.length)
*/

const arraySet = ["Apple", "Banana", "Coconut", "Donut"]

console.log(arraySet.copyWithin(2, 0, 1))   // Apple, Banana, Apple, Donut
console.log(arraySet.copyWithin(-2, 0)) // Apple, Banana, Apple, Banana

// trying to console source of array

// the result is that [Apple, Banana, Apple, Banana] since this it was mutate value prior event
console.log(arraySet)
