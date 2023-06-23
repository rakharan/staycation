const user = {
  name: "Matt",
  age: 22,
};

test("Matt is 22", () => {
  expect(user.name).toBe("Matt");
});
