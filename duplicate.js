// remove duplicate item from an array

function removeDuplicateItem(numbers) {

    let unique = [];
    // new array eta declare krbo duplicate bad diye rakhar jnno

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
let array = [10, 30, 40, 67, 90, 90, 30];
let result = removeDuplicateItem(array);
console.log(result);
let array2 = ['rahim', 'karim', 'rahim'];
let result2 = removeDuplicateItem(array2);
console.log('here', result2);
