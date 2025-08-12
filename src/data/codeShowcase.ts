/* eslint-disable max-len */
import type { CodeExample } from '../types/data';

export const codeExamples: CodeExample[] = [
  {
    title: 'Memoization',
    description: 'Checks if a number is prime while caching results to speed up repeated calls.',
    language: 'js',
    code: `const isPrime = (num) => {
  if(!isPrime.cache) { isPrime.cache = {};}
  if(isPrime.cache[num] !== undefined) return isPrime.cache[num];

  let prime = num !== 0 && num !== 1;

  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      prime = false;
      break;
    }
  }

  return isPrime.cache[num] = prime;
}`,
  },
];
