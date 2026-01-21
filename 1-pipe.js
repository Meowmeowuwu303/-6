'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All arguments must be functions');
    }
  }
  return (x) => fns.reduce((value, fn) => fn(value), x);
};

// Тестові функції
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

// Тестування
const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 1728

const f2 = pipe(inc, inc);
console.log(f2(7)); // 9

// Перевірка помилки
try {
  const f3 = pipe(inc, 7, cube);
  console.log(f3(1));
} catch (error) {
  console.error('Error:', error.message); // Error: All arguments must be functions
}
