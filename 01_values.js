/*  

** Notes for Chapter 1 - Values, Types, and Operators **

# Values, Numbers #

- Basic review values and how they are represted by 0s and 1s. And the usage of arithmetic.


# Special Numbers # 
- three special values in JavaScript that are considered numbers but don’t behave like normal numbers.
- The first two are Infinity and -Infinity
- NaN


# Strings #

- Strings are used to represent text they are enclosed within quotes. You can enclose them using backticks(`backticks`), single quotes('single') or double quotes("dobule"). Almost anything could be enclosed within quotes.

- (\) indicates the character after it has a special meaning. It is called escaping the character.
- (n) occurs after a backslash, it is interpreted as a newline.
- we can concat two string such as "con" + "cat", `ten times 10 is ${10 * 10}` (this is template literal)

# Unary Operators #
- Not all operators are symbols. Some are written as words. Such as the typeof operators which will tell you what a value is represented as. typeof only takes in 1 value.
Example
console.log(typeof 10) - this will be represented as a number
console.log(type of "hello") - this will be represented as a string.

# Automatic type conversion 

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" * 10) # I DID NOT KNOW THIS WAS A THING
// → 50
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

Short-circuiting of logical operators

-The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.

- The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types.

*/
