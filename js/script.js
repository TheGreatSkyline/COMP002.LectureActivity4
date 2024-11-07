/*
*   COMP002.LectureActivity4
*    Author: Joaquin Gomez
*    Date: 22/10/2022
*    Purpose: JavaScript for Lecture Activity 4
*/
let figures = [25, 35, 36, 40, 42];//Array in JavaScript are zero index, meaning the first element is at index 0.
console.log(figures[0]);// figures[0] accesses the first element of the array, which is 25 in this case.
console.log(figures[figures.length - 2]);// To get the second to last element of the array, we use the formula: arrayName[arrayName.length - 2].
// Figure.length returns the number of elements in the array, which is 5 in this case.
// Since the array is zero-indexed, the last element is at index length - 1, giving us 42
let newFigures = [25, 35, 36, 40, 42];
for (let i = 0; i < newFigures.length; i++) {// let i = 0: Initalizes the loop counter i to 0, which is the starting point of the index of the array.        
// i < newFigures.length: Continues the loop as long as i is less than the length of the array.
// i++: Increments the loop counter i by 1 after each iteration of the loop.
// console.log(newFigures[i]): Outputs the value of the element at index i of the array.
    