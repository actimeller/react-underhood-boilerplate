import App from "../samples/App";
import sortAlphabetByString from "../utils/sortAlphabetByString";

test("jsx works", () => {
  expect(new App()).toEqual({
    state: {
      alphabet: [
        "а",
        "б",
        "в",
        "г",
        "д",
        "е",
        "ж",
        "з",
        "и",
        "й",
        "к",
        "л",
        "м",
        "н",
        "о",
        "п",
        "р",
        "с",
        "т",
        "у",
        "ф",
        "х",
        "ц",
        "ч",
        "ш",
        "щ",
        "ъ",
        "ы",
        "ь",
        "э",
        "ю",
        "я"
      ],
      inputValue: ""
    }
  });
});

test("sortAlphabetByString works", () => {
  expect(sortAlphabetByString(["а", "б", "в", "г", "д"], "гба")).toEqual([
    "г",
    "б",
    "в",
    "а",
    "д"
  ]);
});
