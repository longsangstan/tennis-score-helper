# tennis-score-helper

A helper library for tennis score.

## Example Usage

```js
const describeGameScore = require("tennis-score-helper").describeGameScore;

console.log(describeGameScore(1, 2)); // 15-30
console.log(describeGameScore(2, 2)); // 30-all
console.log(describeGameScore(3, 3)); // deuce
console.log(describeGameScore(4, 5)); // advantage out
console.log(describeGameScore(7, 5)); // server won
console.log(describeGameScore(6, 2)); // Invalid score!
```

## Testing

```shell
$ npm test
```
