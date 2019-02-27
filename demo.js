var count = 0;
for (var i = 4000; i > 0; i /= 2) {
  for (var j = 0; j < i; j++) {
    count++;
  }
}
console.log(count);