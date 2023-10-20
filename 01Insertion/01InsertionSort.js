function insertionSort(unsorted_array) {
    for (let i = 1; i < unsorted_array.length; i++) {
      let currentValue = unsorted_array[i];
      let j = 0;
      for (j = i - 1; j >= 0 && unsorted_array[j] > currentValue; j--) {
        unsorted_array[j + 1] = unsorted_array[j]
      }
      unsorted_array[j + 1] = currentValue
    }
    return unsorted_array
  }
  console.log(insertionSort([10, 4, 1, 7, 3, 0]))