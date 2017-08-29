import Realm from "realm";

class NewMessage extends Realm.Object {}
NewMessage.schema = {
  name: "NewMessage",
  properties: {
    receiptNumber: "string",
    text: "string",
    time: "string"
  }
};

export default new Realm({
  schema: [NewMessage]
});
