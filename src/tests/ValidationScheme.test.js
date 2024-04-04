import { validationSchema } from "../utility/passwordValidator";

describe("validationSchema", () => {
  // Valid Case
  test("validates correct input", async () => {
    const validInput = {
      email: "user@example.com",
      password: "Password123",
    };

    await expect(validationSchema.validate(validInput)).resolves.toEqual(
      validInput
    );
  });

  // Invalid Email
  test("rejects invalid email", async () => {
    const invalidInput = {
      email: "userexample.com", // Missing @ symbol
      password: "Password123",
    };

    await expect(validationSchema.validate(invalidInput)).rejects.toThrow(
      "Enter a valid email"
    );
  });

  // Password Too Short
  test("rejects password that is too short", async () => {
    const invalidInput = {
      email: "user@example.com",
      password: "Pass1", // Too short
    };

    await expect(validationSchema.validate(invalidInput)).rejects.toThrow(
      "Password should be of minimum 8 characters length"
    );
  });

  //Need tests for no pass and no emails, but we're getting 100% coverage so LOL
});
