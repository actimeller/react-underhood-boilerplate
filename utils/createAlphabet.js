const createAlphabet = () => {
  const alphabetArray = [];
  for (let i = 1040; i <= 1071; i += 1) {
    alphabetArray.push(String.fromCharCode(i));
  }
  return alphabetArray;
};

export default createAlphabet;
