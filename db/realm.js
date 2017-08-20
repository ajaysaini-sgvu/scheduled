import Realm from "realm";

class NewMessage extends Realm.Object {}
NewMessage.schema = {
  name: "Message",
  properties: {
    receiptNumber: "string",
    text: "string",
    time: "string"
  }
};

export default new Realm({
  path: "scheduled.realm",
  schema: [NewMessage.schema]
});
