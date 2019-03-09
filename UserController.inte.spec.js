const { UserController } = require("./UserController");

describe("UserController", () => {
  const expected = { name: "Benoit", age: 27, gender: "M" };
  beforeAll(() => {
    global.store = { users: [] };
    global.store.users.push(expected);
  })

  describe("get", () => {
    describe("user exist", () => {
      it("returns response with user", () => {
        userController = new UserController();
        const user = userController.get("Benoit");
        expect(user).toEqual({ response: expected });
      });

      // We do NOT care about the implementation
      // of the get method of the repository
      // we do a social / integration test
      test("resilient to refactoring", () => {
        userController = new UserController();
        // we will call the method that handle
        // throwable error
        // and our test do not have to change
        userController.get = userController.get2
        const user = userController.get("Benoit");
        expect(user).toEqual({ response: expected });
      })
    });

    describe("user does NOT exist", () => {
      it("returns error", () => {
        userController = new UserController();
        const user = userController.get("UNKNOWN");
        expect(user).toEqual({ error: "NOT_FOUND" });
      });

      test("resilient to refactoring", () => {
        userController = new UserController();
        userController.get = userController.get2
        const user = userController.get("UNKNOWN");
        expect(user).toEqual({ error: "NOT_FOUND" });
      })
    });
  });
});
