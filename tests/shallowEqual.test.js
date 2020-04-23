import shallowEqual from "../utils/shallowEqual";

test("shallowEqual works", () => {
  const obj1 = { name: "max", surname: "vodyanov" };
  const obj2 = { name: "max", surname: "vodyanov" };
  const obj3 = { name: "ivan", surname: "ivanov" };

  expect(shallowEqual(obj1, obj2)).toEqual(true);
  expect(shallowEqual(obj1, obj3)).toEqual(false);
});
