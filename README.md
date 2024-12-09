# Stack Overflow Bug in Recursive JavaScript Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow due to an infinite recursion.  The function `foo` compares two numbers a and b. It should return true if a equals b, and false if a is greater than b. If a is less than b, it recursively calls itself with a incremented by 1.  However, if a is initially greater than b, it leads to an infinite recursive loop, resulting in a stack overflow error.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version with a proper base case to handle all scenarios, avoiding stack overflow.

This example serves as a clear illustration of how improper base cases in recursive functions can lead to runtime errors. 