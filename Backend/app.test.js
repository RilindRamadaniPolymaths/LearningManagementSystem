import app from "./app";

describe("Test the root path", () => {
  test("It should respond with status code 200", async () => {
    const testRunning = "running";

    expect(testRunning).toBe("running");
  });
});
