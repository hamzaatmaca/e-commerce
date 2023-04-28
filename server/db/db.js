const mongoose = require("mongoose");

const connetDB = async () => {
  await mongoose.set("strictQuery", false);
  await mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log(`MongoDB Connection Is Successfull`);
    })
    .catch((err) => console.log("DB error" + err));
};

module.exports = connetDB;
