function main() {
  const N = parseInt(readLine().trim(), 10);

  if (N % 2 === 0) {
    if (N == 2 || N == 3 || N == 4 || N > 20) {
      console.log("Not Weird");
    } else {
      console.log("Weird");
    }
  }

  if (N % 2 === 1) {
    console.log("Weird");
  }
}
//readLine is in the main function