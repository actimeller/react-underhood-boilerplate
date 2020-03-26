const sortAlphabetByString = (alphabet, string) => {
  const arrayFromString = string
    .split("")
    .filter(symbol => alphabet.indexOf(symbol) >= 0);
  const includesIndexArray = arrayFromString
    .map(symbol => alphabet.indexOf(symbol))
    .sort();
  const newAlphabet = [...alphabet];
  arrayFromString.forEach((symbol, index) => {
    newAlphabet[includesIndexArray[index]] = symbol;
  });
  return newAlphabet;
};

export default sortAlphabetByString;
