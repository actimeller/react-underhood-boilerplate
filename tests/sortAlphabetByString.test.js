import sortAlphabetByString from "../utils/sortAlphabetByString";

test("sortAlphabetByString works", () => {
  expect(sortAlphabetByString(["а", "б", "в", "г", "д"], "гба")).toEqual([
    "г",
    "б",
    "в",
    "а",
    "д"
  ]);
  expect(sortAlphabetByString(["а", "б", "в", "г", "д"], "дв!")).toEqual([
    "а",
    "б",
    "д",
    "г",
    "в"
  ]);
  expect(sortAlphabetByString(["а", "б", "в", "г", "д"], "")).toEqual([
    "а",
    "б",
    "в",
    "г",
    "д"
  ]);
  expect(sortAlphabetByString(["а", "б", "в", "г", "д"], "двиклабг!")).toEqual([
    "д",
    "в",
    "а",
    "б",
    "г"
  ]);
});
