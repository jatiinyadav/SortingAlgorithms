const array = [2, 3, 1, 10, 8, 6, 4, 9, 7, 5]

let swapped = true

while (swapped) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            var temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            swapped = false;
        }
    }
    if(swapped) break;
    !swapped ? swapped = true : swapped = false;
}

console.log(array);