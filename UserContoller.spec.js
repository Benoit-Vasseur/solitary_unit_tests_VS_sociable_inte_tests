const { UserController } = require("./UserController");
const { UserRepository } = require("./UserRepository");

jest.mock("./UserRepository");

describe("UserController with mock", () => {
  describe("get", () => {
    it("calls userRepository.get(...)", () => {
      userController = new UserController();
      userRepositotyInstance = UserRepository.mock.instances[0];

      userController.get("Benoit");

      expect(userRepositotyInstance.get).toHaveBeenCalledWith("Benoit");

      /*
        The following test is a copy/paste test
        It is the controller code that has been pasted and modified a bit.
        Can you imagine a touch of the controller code without breaking this tests ?
        What is the point of this kind of test ?
        You controll all the dependencies, why not a social test ?
      */
    });

    describe("user exist", () => {
      it("returns response with user", () => {
        const expected = { name: "Benoit", age: 27, gender: "M" };
        UserRepository.mockImplementationOnce(() => {
          return { get: () => expected };
        });
        userController = new UserController();
        const user = userController.get("Benoit");
        expect(user).toEqual({ response: expected });
      });

      test("NOT resilient to refactoring", () => {
        const expected = { name: "Benoit", age: 27, gender: "M" };
        UserRepository.mockImplementationOnce(() => {
          return {
            get: () => expected,
            /*
              We mock the repository so a refactoring on the true class
                must be reflected in the mock
            */
            get2: () => expected
          };
        });
        userController = new UserController();
        userController.get = userController.get2;
        const user = userController.get("Benoit");
        expect(user).toEqual({ response: expected });
      });

      /*
      What is the point to mock the repository ?
      because we mocked it, we have to unit test it independently

      But what if the repository is just used by this controller.
      
      Does this test give us more confidence than a socialble / integration test ?
      Do this group of solitary tests are worth the fact  that they are testing
       implementation's detail
          -> repository API

      If we change the implementation of the get
      for example to throw an error instead of returning null
      we also have to change some tests / mocks -> to reflect this new behavior

      We are testing our own code like we can test 
      some third party libraries / services (code that we do not controll)

      But here we definitively have more control and have access
      to the next link in the chain.
      Be careful to not cut off the chain to short

      So ask yourself, does the test that am i going to write :
          - will give me confidance that it works correctly
              -> you have to define the "it", is this "it" a business feature or is it a "technical detail"
          - will be a good documentation for me and my colleague
          - will be resilitent to some refactoring
            -> this point is usually not take that much into account
              espacially if you are a fan a solitary tests
            But it is important to note that if your test is not resilitent
            to a refactoring it has a good risk to give you or your colleage
            some frustration

      The main frustration of lot of new comers (to tests) is to see unexpected red tests.
      And when you are in a project with lot of unit solitary tests
      you definitively are not enthousiast about refactoring 
        (I mean real refactoring not just renaming an attribute in a class).
      Because if you re-architecture your implementation you know that lot of tests are going to fail
        (because they are tightly coupled to the current implementation).

      Another point is that I find that we are laking good documentation 
        about what business problem our code solve.
      Unit test are usually not good to serve as business documentation.
      Whereas integration tests are more well suited for that.
      I would say that longer the chain is better it can describe the business.

      We do not want just "business" test
      but it definitevely can be good to have some
    */
    });

    describe("Notuser does NOT exist", () => {
      it("returns error", () => {
        UserRepository.mockImplementationOnce(() => {
          return { get: () => undefined };
        });
        userController = new UserController();
        const user = userController.get("Benoit");
        expect(user).toEqual({ error: "NOT_FOUND" });
      });

      it("NOT resilient to refactoring, returns error", () => {
        UserRepository.mockImplementationOnce(() => {
          return { get: () => undefined, 
            /*
            the new implemantation throws an exception (instead of returning null) so our mock need to be changed.
            So now our test is red BUT the feature for the end user is still working.

            In some situation we may find this red usefull but in lot of situations
            we see those red tests just because we follow some recipes.
            "I must mock everything, I heard that it is a good practise and if I do not so I am a bad developper"

            I see not real benefit that this test is red in this situation.

            - Will it avoid a bug ?
              No, there is NO bug
            - Will it alert the dev of an important things to check here or elswhere ?
              No, this code is used just by the controller qnd the end feature os working properly
            Is it a good documentation about the code or the feature ?
              No, it is very tightly coupled to the code, so it is somehow a form of copy/paste.
              It does not give more info than the code itself and definitevely do not describe the 
                business feature.
            Will it frustrate the refactorer ?
              Well, yes. We created an "artificial world" which is so rigid.
                Again, in the real world, for the end user it works fine.
            */
            get2: () => undefined };
        });
        userController = new UserController();
        userController.get = userController.get2;
        const user = userController.get("Benoit");
        expect(user).toEqual({ error: "NOT_FOUND" });
      });
    });
  });
});
