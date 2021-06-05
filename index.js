const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;
    case "get":
      getContactById(id);
      break;
    case "add":
      addContact(name, email, phone);
      break;
    case "remove":
      console.log("id", id);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
invokeAction(argv);
