let a, b;
const factors = (n) => {
  let count = 0;
  let list = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      if (i == n / i) {
        count = count + 1;
        list.push(i);
      } else {
        list.push(i, n / i);
        count = count + 2;
      }
    }
  }
  const sortedArray = list.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArray);
  return count;
};

let numberOfFactors = factors(36);

console.log(numberOfFactors);
