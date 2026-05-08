let age = 15;

try {

  if (age < 18) {
    throw new Error("Not eligible");
  }

} catch(error) {
  console.log(error.message);
}