module.exports = function reverse (n) {
  numb = Math.abs(n);
  return +String(numb).split('').reverse().join('');
}
