const { UserRepository } = require("./UserRepository");

class UserController {
  constructor() {
    this.UserRepository = new UserRepository();
  }

  get(name) {
    const user = this.UserRepository.get(name);
    return user ? { response: user } : { error: "NOT_FOUND" };
  }

  get2(name) {
    try {
      return { response: this.UserRepository.get2(name) };
    } catch (e) {
      return { error: "NOT_FOUND" };
    }
  }
}

module.exports = { UserController };
