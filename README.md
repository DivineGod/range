# range
JavaScript range implementation

Just a simple range implementation with flow annotations

## Usage

`range` can either take 1, 2, or 3 arguments.

If supplied with one argument, it will be interpreted as the end of the range and return an array from `0` to `end`, not including `end` with a step of `1`
If supplied with two arguments, range will go from `start` to `end` with a step of `1` as long as `start` is less than `end`.
If supplied with three arguments, that are all integers the range will go from `start` to `end` in increments of `step`. If `start` is bigger than `end` then `step` will have to be negative to produce a result.

Examples:
```javascript
import range from 'range';

console.log(range(10));
// > [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(range(-10));
// > []

console.log(range(0, 10));
// > [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(range(10, 0, -1));
// > [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

console.log(range(10, null, -1));
// > [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

console.log(range(10, null, 1));
// > [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(range(0, 10, 3));
// > [ 0, 3, 6, 9 ]

console.log(range(-10, 10, 5));
// > [ -10, -5, 0, 5 ]
```
