This repo is to reflect the reflections I have about solitary tests, mocks VS sociable / integration tests.

Code is simple, we have a `UserController` that use a `UserRepository` to get a user.

**We "simulate" a refactoring of the get() function with a get2()** fct in the controller and in the repository.

The nature of the refactoring is not important and I am not saying that throwing an exception is better than returning nullable value ;).

# Goal

The goal is to show that if you are too agressive in mocking, you are wirting tests that are tightly coupled to the implementation and a **refactoring can result with false negative** (point of view of the feature / end user of the controller).

The code contains the following files :
    
    - UserController
    - UserRepository
    - UserController.spec : solitary test -> refactoring -> red 
    - UserController.inte.spec : sociable test -> refactoring -> green

You can read the comments in the UserController.spec file to have the detail about my reflections.


# Tests and me

I am an evangelist about tests. I wrote my first tests in the Rails / ruby world with Rspec and some cucumber test. Then in front end javascript with VueJs and some Junit tests.

I am fine with developing with TDD.
Sometimes I still write my tests after, and sometimes I do not write tests.

In all my working experiences, I pushed hard tests (and TDD). And I still will.
However I have to admit that I also created a lot of frustration and disapointment to my colleagues.
Some were lost in front of blank testing file (what do I have to test ? What is a good test ?) and some were frustrated about refactoring (I am refactoring a bit of code and tests are red but it works).
I was mainly using/pushing the solitary techniques : "simple rules", you follow the recipes.

So now I try to find some ways to write less rigid tests and tests than can serve the developper as well as the business.


Some articles that influenced my vision about the testing techniques : 
- https://martinfowler.com/bliki/IntegrationTest.html
- https://martinfowler.com/bliki/UnitTest.html
- https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a
- https://kentcdodds.com/blog/why-youve-been-bad-about-testing
- https://kentcdodds.com/blog/the-merits-of-mocking
- https://kentcdodds.com/blog/ui-testing-myths
- https://kentcdodds.com/blog/common-testing-mistakes
- https://kentcdodds.com/blog/testing-implementation-details
- https://kentcdodds.com/blog/why-i-never-use-shallow-rendering
- https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests