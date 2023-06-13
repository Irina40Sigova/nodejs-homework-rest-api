const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Iryna:swnfzjjYhduHEoCv@cluster0.myhzs0k.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// swnfzjjYhduHEoCv
