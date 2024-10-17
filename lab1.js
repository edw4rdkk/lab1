// 1.1

const inc = function (n) {
  return ++n;
};

const a = 5;
const b = inc(a);

console.log(a, b);

// 1.2

const inc1 = function (num) {
  num.n += 1;
};
const obj = {
  n: 5,
};
inc1(obj);

console.log(obj);

// 2.1

const arr = [true, "hello", 5, 12, -200, false, false, "word"];

const hash = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (let key of arr) {
  const type = typeof key;
  hash[type]++;
}
console.log(hash);

// 2.2
const hash1 = {};
for (let i of arr) {
  const type = typeof i;
  if (type in hash1) {
    hash1[type]++;
  } else hash1[type] = 1;
}
console.log(hash1);
