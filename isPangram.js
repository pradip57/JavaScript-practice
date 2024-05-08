let c = 0;
let str = "the QUICK brown fox jumps over the laZY DOG";
str = str.toLowerCase()
let allAlphabets = "abcdefghijklmnopqrstuvwxys";
allAlphabets = allAlphabets.split("");

for (let i = 0; i < 26; i++) {
  if (str.includes(allAlphabets[i])) {
    c += 1;
  }
}
console.log(c);

if (c == 26) {
  console.log("True");
} else {
  console.log("False");
}
