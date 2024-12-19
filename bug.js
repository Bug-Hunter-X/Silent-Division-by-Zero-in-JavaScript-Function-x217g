function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle cases where a or b is zero
  }
  return a / b;
}

console.log(myFunction(10, 0)); // This will return 0 which can be unexpected