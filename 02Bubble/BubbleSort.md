## Working of Bubble Sort
1. Let us assume we have an unsorted Array **[2, 3, 1, 10, 8, 6, 4, 9, 7, 5]**. 
2. We will take 1st 2 numbers ``(2, 3)``.
3. Is 2 < 3, Yes, We will move ahead.
4. Is 3 < 1? No, Swap [2, ``1, 3,`` 10, 8, 6, 4, 9, 7, 5].
5. Moving ahead, Is 3 < 10? Yes, We will move ahead.
6. Is 10 < 8? No, Swap [2, 1, 3, ``8, 10``, 6, 4, 9, 7, 5].
7. Moving ahead, Is 10 < 6? No, Swap [2, 1, 3, 8, ``6, 10``, 4, 9, 7, 5]
8. Moving ahead, Is 10 < 4? No, Swap [2, 1, 3, 8, 6, ``4, 10``, 9, 7, 5]
9. Moving ahead, Is 10 < 9? No, Swap [2, 1, 3, 8, 6, 4,``9, 10``, 7, 5]
10. Moving ahead, Is 10 < 7? No, Swap [2, 1, 3, 8, 6, 4, 9, ``7, 10``, 5]
11. Moving ahead, Is 10 < 5? No, Swap [2, 1, 3, 8, 6, 4, 9, 7, ``5, 10``]
12. As you can see when we traversed the array once, the largest element is at the right place.
13. Like this we will traverse the array n - 1 number of times and all the elements will be sorted.
14. We will traverse this array n - 1 times because if we had 2 elements in the array we will swap only once and one element will automatically be at the right place,
that's why for 10 elements we will traverse for n - 1 ie. 9 times.

## Bubble Sort Time Complexity
![image](https://github.com/jatiinyadav/SortingAlgorithms/assets/73248007/8804bdb9-3aca-4ce2-a72d-51d03d441cd7)
