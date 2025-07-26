"use strict";
const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const app = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = "sUperpassw0rd!";
const someOtherPlaintextPassword = "pass123";

//START_ASYNC -do not remove notes, place code between correct pair of notes.

(async () => {
  const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
  console.log("Hash:", hash);
  const isMatch = await bcrypt.compare(myPlaintextPassword, hash);
  console.log("Password match:", isMatch);
})();

//END_ASYNC

//START_SYNC

const syncHash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log("Sync Hash:", syncHash);
const isSyncMatch = bcrypt.compareSync(myPlaintextPassword, syncHash);
console.log("Sync Password match:", isSyncMatch);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
