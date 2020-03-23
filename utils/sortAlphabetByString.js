const sortAlphabetByString = (alphabet, string) => {
  const arrayFromString = string.split("");
  const includesIndexArray = arrayFromString
    .map(symbol => alphabet.indexOf(symbol))
    .sort();

  const newAlphabet = alphabet;
  arrayFromString.forEach((symbol, index) => {
    if (newAlphabet.indexOf(symbol)) {
      newAlphabet[includesIndexArray[index]] = symbol;
    }
  });
  //   console.info(newAlphabet);
  return newAlphabet;
};

export default sortAlphabetByString;
