function foo(a, b) {
  if (a === b) {
    return true;
  }
  if (a > b) {
    return false; 
  }
  return foo(a + 1, b);
}
console.log(foo(1, 10)); //This works fine
console.log(foo(10,1)); //This causes a stack overflow error