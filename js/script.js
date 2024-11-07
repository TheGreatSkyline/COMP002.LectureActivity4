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
console.log(newFigures[i]);
}
let studentGrades = [75, 80, 85, 90, 95];// This is my 
array of student grades.
studentGrades.push(78);// The .push() method adds an element to the end of an array. In this case, it adds 78 to the array.
studentGrades.push(82);// The .push() method adds an element to the end of an array. In this case, it adds 82 to the array.
studentGrades.push(90);// The .push() method adds an element to the end of an array. In this case, it adds 90 to the array.
studentGrades.push(94);// The .push() method adds an element to the end of an array. In this case, it adds 94 to the array.
studentGrades.push(98);// The .push() method adds an element to the end of an array. In this case, it adds 98 to the array.
console.log(studentGrades);// This logs the array studentGrades, which contains the updated student grades.