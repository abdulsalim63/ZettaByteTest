/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  return data.map(element => {
    let baseObj = Object.keys(element)
        .filter((k) => element[k] != null)
        .reduce((a, k) => ({ ...a, [k]: element[k] }), {});
    
    baseObj.classes = baseObj.classes.map(obj => {
      return Object.keys(obj)
      .filter((k) => obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    }) 

    return baseObj
  });
}

console.log(JSON.stringify(result(data)));
