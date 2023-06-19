const mongoose = require("mongoose");

const app = require("./app");

require("dotenv").config();

const { PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     console.log("Database connection successful");
//     app.listen(PORT);
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });
//  password = swnfzjjYhduHEoCv;
