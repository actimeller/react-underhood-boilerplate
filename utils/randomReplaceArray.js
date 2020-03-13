import randomInteger from "./randomInteger";

const randomReplaceArray = array => {
  const newArray = array;

  const initSymbolIndex = randomInteger(0, array.length - 1);
  const targetSymbolIndex = randomInteger(0, array.length - 1);
  [newArray[initSymbolIndex], newArray[targetSymbolIndex]] = [
    newArray[targetSymbolIndex],
    newArray[initSymbolIndex]
  ];
  return newArray;
};

export default randomReplaceArray;
