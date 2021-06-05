const fs = require("fs").promises;
const path = require("path");
const contactPath = path.join("./db/contacts.json");
const v4 = require("uuid-v4");
console.log(contactPath);

async function listContacts() {
  try {
    const listContact = await fs.readFile(contactPath, "utf-8");
    const result = JSON.parse(listContact);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}
module.exports = { listContacts };

async function getContactById(contactId) {
  try {
    const getId = await fs.readFile(contactPath, "utf-8");
    const searchId = JSON.parse(getId).find((item) => item.id == contactId);
    console.table(searchId);
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getContactById };

async function addContact(name, email, phone) {
  try {
    const file = await fs.readFile(contactPath, "utf-8");
    const data = JSON.parse(file);
    const newContact = { name, email, phone, id: v4() };
    data.push(newContact);
    const dataString = JSON.stringify(data);
    fs.writeFile(contactPath, dataString, "utf-8");
    console.table(dataString);
  } catch (error) {
    console.log(error);
  }
}
module.exports = { addContact };
// function removeContact(contactId) {
//   // ...твой код
// }
