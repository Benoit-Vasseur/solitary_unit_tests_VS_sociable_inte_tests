const { UserController } = require("./UserController");

global.store = { users: [] };
global.store.users.push({ name: "Benoit", age: 27, gender: "M" });

userController = new UserController();

let Benoit = userController.get("Benoit");
console.log('get() : exist', Benoit);
Benoit = userController.get2("Benoit");
console.log('get2() : exist', Benoit);

let error = userController.get("Unkwown");
console.log('get() : Unkwown', error);
error = userController.get2("Unkwown");
console.log('get2() : Unkwown', error);
