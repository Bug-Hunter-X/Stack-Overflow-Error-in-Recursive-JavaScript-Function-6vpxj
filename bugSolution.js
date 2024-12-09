function foo(a, b) {
  if (a === b) {
    return true;
  }
  if (a > b) {
    return false; 
  }
  if (b > a) {
    return foo(a + 1, b);
  }
}
console.log(foo(1, 10)); //true
console.log(foo(10,1)); //false
console.log(foo(5,5)); //true