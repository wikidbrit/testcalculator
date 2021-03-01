const { sum, subtract, multiply, divide } = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("multiply 2 x 2 to equal 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test("divide 8 by 2 to equal 4", () => {
    expect(divide(8, 2)).toBe(4);
  });

  test("multiply by 0", () => {
    expect(multiply(2, 0)).toBe(0);
  });