//----------------
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non - positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {
//   const sortedArr = numbers.sort((p, n) => p - n);
//   return sortedArr[0] + sortedArr[1];
// }
// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

// -----------------------------------------------

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value(null, None, Nothing etc. ) is given instead of an array,
//     or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {
//   if (!array || array.length <= 1) {
//     return 0;
//   }

//   return array
//     .sort((p, n) => p - n)
//     .slice(1, -1)
//     .reduce((acc, el) => acc + el, 0);
// }

// console.log(sumArray([-6, -20, -1, -10, -12]));

// --------------------------------------------------------------
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// function repeatStr(n, s) {
//   //   let str = "";
//   //   for (let i = 1; i <= n; i++) {
//   //     str += s;
//   //   }
//   //   return str;
//   return s.repeat(n);
// }

// console.log(repeatStr(2, "ha "));

// --------------------------------------------------
// Task:
// Given a non - negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e.no negative integers.

// var countSheep = function (num) {
//   let res = "";
//   for (let i = 1; i <= num; i++) {
//     res += `${i} sheep...`;
//   }
//   return res;
// };

// console.log(countSheep(2));

// ---------------------------------------------------

// Consider an array / list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array(true means present).

// For example,

// [true,  true,  true,  false,  true,  true,  true,  true ,  true,  false, true,  false,
//   true,  false, false, true ,  true,  true,  true,  true ,  false, false, true,  true]
// The correct answer would be 17.

// function countSheeps(sheep) {
//   return sheep.reduce((acc, i) => (i ? acc + 1 : acc), 0);
// }

// ----------------------------------------------------------------------

// Given an array of integers, remove the smallest value.Do not mutate the original array / list.
// If there are multiple elements with the same value, remove the one with the lowest index.
// If you get an empty array / list, return an empty array / list.

// Don't change the order of the elements that are left.

// function removeSmallest(numbers) {
//   const lowest = Math.min(...numbers);

//   const idx = numbers.findIndex((i) => i === lowest);
//   const res = [...numbers];
//   res.splice(idx, 1);
//   return res;
// }

// console.log(removeSmallest([2, 2, 1, 2, 1]));

// --------------------------------------------------------------

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;

//     default:
//       return "should be a valid operation!!!!";
//   }
// }

// console.log(basicOp("+", 4, 7));
// console.log(basicOp("-", 15, 18));
// console.log(basicOp("*", 5, 5));
// console.log(basicOp("/", 49, 7));

// -----------------------------------------------------------------

// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers.
// You are provided with consecutive elements of an Arithmetic Progression.
// There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you.
// The rest of the given series is the same as the original AP.Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers.
// The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7

// var findMissing = function (list) {
//   const length = list.length;
//   const sum = ((list[0] + list[length - 1]) * (length + 1)) / 2;
//   return sum - list.reduce((acc, i) => acc + i, 0);
// };

// console.log(findMissing([1, 3, 5, 9, 11]));

// -----------------------------------------------------------------

// Task
// Your task is to write a function which returns the n - th term of the following series,
//     which is the sum of the first n terms of the sequence(n is the input parameter).

// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// function SeriesSum(n) {
//   let res = 0;
//   for (let i = 0; i < n; i++) {
//     res += 1 / (3 * i + 1);
//   }

//   return (Math.round(parseFloat(res) * 100) / 100).toFixed(2).toString();
// }
// console.log(SeriesSum(1));

// -------------------------------------------------------------------

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is[1, 2, 3, 1, 2, 1, 2, 3], you take[1, 2, 3, 1, 2],
// drop the next[1, 2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to[1, 2, 3, 1, 2, 3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// function deleteNth(arr, n) {
//   const set = {};
//   const res = arr.reduce((acc, item) => {
//     const key = item.toString();
//     set[key] ? (set[key] += 1) : (set[key] = 1);
//     if (set[key] <= n) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);

//   return res;
// }

// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

// -----------------------------------------------------

// function getGrade(s1, s2, s3) {
//   const average = (s1 + s2 + s3) / 3;
//   if (average >= 90) return "A";
//   if (average >= 80) return "B";
//   if (average >= 70) return "C";
//   if (average >= 60) return "D";
//   return "F";
// }

// ------------------------------------------------------

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements,
// with the same multiplicities(the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121,
//   20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
//   It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing(except in C++, COBOL, Crystal, D, Dart, Elixir,
//   Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// function comp(array1, array2) {
//   if (!array1 || !array2) return false;
//   const firstSquared = array1.map((el) => el ** 2);
//   return array2.every((el) => firstSquared.some((i) => i === el));
// }

// console.log(
//   comp([3, 1, 5, 0, 3, 0, 4, 5, 5, 2, 0], [0, 1, 9, 16, 25, 1, 25, 4, 0, 9, 25])
// );

// -------------------------------------------------------------

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// function expandedForm(num) {
//   return num
//     .toString()
//     .split("")
//     .map((item, idx, arr) => Number(item) * Math.pow(10, arr.length - idx - 1))
//     .filter((item) => item !== 0)
//     .join(" + ");
// }

// console.log(expandedForm(70304));

// -------------------------------------------------------------

// expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
// expanded_from(1.24); // should return "1 + 2/10 + 4/100"
// expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
// expanded_from(0.04); // should return "4/100"

// function expandedForm(num) {
//   const [entire, fractional] = String(num).split(".");

//   const entireExpanded = entire
//     .split("")
//     .map((item, idx, arr) => Number(item) * Math.pow(10, arr.length - idx - 1))
//     .filter((item) => item !== 0);

//   const fractionalExpanded = fractional
//     .split("")
//     .map((item, idx) =>
//       item != 0 ? `${Number(item)}/${Math.pow(10, idx + 1)}` : 0
//     )
//     .filter((item) => item !== 0);

//   return [...entireExpanded, ...fractionalExpanded].join(" + ");
// }

// console.log(expandedForm(0.0));

// ---------------------------------------------------------------

// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be { 'a': 2, 'b': 1 }.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  return [...string].reduce(
    (obj, item) => ({ ...obj, [item]: obj[item] ? obj[item] + 1 : 1 }),
    {}
  );
}

console.log(count("gooogle"));
