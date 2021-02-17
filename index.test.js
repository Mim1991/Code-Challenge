const { repeat, reformat, next_binary_number } = require("./index");
test("Returns an array three times", () => {
  expect(repeat([1, 2, 3])).toMatchObject([1, 2, 3, 1, 2, 3, 1, 2, 3]);
});

test("Returns an empty array if no values parsed", () => {
  expect(repeat([])).toMatchObject([]);
});

test("Returns no vowels and all lowercase except first letter", () => {
  expect(reformat("liMeSHArp DeveLoper TEST")).toEqual("Lmshrp dvlpr tst");
});

test("Returns correct string when non alphabet characters passed", () => {
  expect(reformat("liMe6SHArp! DeveLoper #TEST")).toEqual(
    "Lm6shrp! dvlpr #tst"
  );
});

test("Returns the next binary number as an array", () => {
  expect(next_binary_number([1, 0, 0, 0, 0, 0, 0, 0, 0, 1])).toMatchObject([
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
  ]);
});
