/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  const charList = words[0].split("")
  let stringResult = ""
  charList.forEach(x => {
    let status = true
    try {
      words.forEach(y => {
        if (!y.includes(x)){
          status = false
        }
      })
    } catch (error) {
      
    }

    if (status){
      stringResult += x
    }
  });

  return stringResult
}

console.log(result(words));
