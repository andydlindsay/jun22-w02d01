const numberOfVowels = (str) => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
};

module.exports = numberOfVowels;
