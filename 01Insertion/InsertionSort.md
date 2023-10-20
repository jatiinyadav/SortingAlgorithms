## Working of Insertion Sort
1. Let us assume we have an unsorted Array **[10, 4, 1, 7, 8, 0]**. 
2. Start at the second element (4) of the array and compare it with its neighbouring element to the left (10).
3. Is 4 < 10? Yes, so insert 4 into 10’s place => [**4, 10**, 1, 7, 8, 0].
4. Now move up to the 3rd element (1) and compare with the value to the left (10).
5. Is 1 < 10? Yes, so insert 1 into 10’s place => [**4, 1, 10**, 7, 8, 0].
6. Now we will move to left.
7. Is 1 < 4? Yes, so insert 4 into 1’s place => [**1, 4, 10**, 7, 8, 0].
8. Our half array is sorted now.
9. Now we will move ahead.
10. Is 7 < 10? Yes, so insert 7 into 10’s place => [**1, 4, 7, 10**, 8, 0].
11. Is 7 < 4? No, So we will move ahead.
12. Is 8 < 10? Yes, so insert 8 into 10’s place => [**1, 4, 7, 8, 10**, 0].
13. Is 8 < 7? No, So we will move ahead.
14. Now we will compare 0 with every value and then our sorted array will be [**0, 1, 4, 7, 8, 10**].

## Insertion Sort Time Complexity
![image](https://github.com/jatiinyadav/SortingAlgorithms/assets/73248007/8804bdb9-3aca-4ce2-a72d-51d03d441cd7)
