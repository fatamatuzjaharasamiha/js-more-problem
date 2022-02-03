function largeElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > max) {
            max = element;

        }
    }
    return max;
}
let array = [23, 45, 65, 87, 32];
let result = largeElement(array);
console.log('maximum result is', result);