class UserRepository {
    get(name) {
      return global.store.users.find(u => u.name === name);
    }
  
    get2(name) {
      const user = global.store.users.find(u => u.name === name);
      if (!user) throw new Error("NOT_FOUND");
      return user;
    }
  }
  
  module.exports = {
    UserRepository
  };
  