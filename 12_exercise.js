// karra table

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('=================');
}
//////////////////////////////////////////////////////////
// 3-removing duplicates without using new Set() [1, 1, 2, 2] => [1, 2]

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 1, 2, 2];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 
//////////////////////////////////////////////////////////
// 1-getting sum of nested obj age

const obj = {
  person1: {
    name: 'Joxongir',
    age: 25
  },
  person2: {
    name: 'Zuhridin',
    age: 30
  }
};
function getNestedObjAgeSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      sum += getNestedObjAgeSum(obj[key]);
    } else if (key === 'age') {
      sum += obj[key];
    }
  }
  return sum;
}
const totalAge = getNestedObjAgeSum(obj);
console.log(totalAge); 
//////////////////////////////////////////////////////////
// 2-finding sum of n, n = 5
// 5 + 4 + 3 + 2 + 1 => 15

function findSumN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
const n = 5;
const sumN = findSumN(n);
console.log(sumN); 
