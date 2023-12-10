const sentence = "hello there from lighthouse labs";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  count ++;
  setTimeout(() => {
    if ( i != sentence.length - 1) {
      process.stdout.write(sentence[i]);
    } else {
      console.log(sentence[i]);
    }
  }, 100 * count)
}
