/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  const maxNumber = numbers.reduce((oa, u) => Math.max(oa, u), 0);
  const minNumber = numbers.reduce((ya, u) => Math.min(ya, u), Number.MAX_VALUE);

  for (let i = minNumber; i <= maxNumber; i++) {
    if (!numbers.some(x => x === i)){
      return i
    }
  }
}

console.log(result(numbers));
