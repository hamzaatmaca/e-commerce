const RegisterSchema = require("../model/registerModel");
const bcrypt = require("bcrypt");

exports.createRegister = (req, res) => {
  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    if (err) return res.status(500).json({ error: "Password Not Salted" });

    const userAlreadyExist = await RegisterSchema.findOne({
      email: req.body.email,
    });

    if (userAlreadyExist) {
      return res.status(500).json({ data: "User Already Exists" });
    } else {
      let userObj = {
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,
        password: hash,
        email: req.body.email,
      };

      try {
        await RegisterSchema.create(userObj);
        return res.status(201).json({
          data: "User Created",
        });
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    }
  });
};
