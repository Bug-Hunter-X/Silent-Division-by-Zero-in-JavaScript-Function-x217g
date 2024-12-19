function myFunction(a, b) {
  if (b === 0) {
    throw new Error('Division by zero'); // Throw an error if b is zero
  }
  return a / b;
}

//This will now throw an error
try{
    console.log(myFunction(10,0));
} catch(e){
    console.error("Error: "+ e.message);
}

console.log(myFunction(10, 2)); // This will return 5