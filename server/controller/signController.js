const RegisterSchema = require("../model/registerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createSign = async (req, res) => {
  const loginUser = await RegisterSchema.findOne({ email: req.body.email });

  if (loginUser) {
    bcrypt
      .compare(req.body.password, loginUser.password)
      .then(function (result) {
        if (result === false) {
          return res.status(401).json({ error: "Password Not Match" });
        } else {
          var token = jwt.sign(
            {
              id: loginUser._id,
              email: req.body.email,
              name: loginUser.name,
              surname: loginUser.surname,
              phone: loginUser.phone,
            },
            process.env.SECRET
          );
          res.status(200).json({ data: token });
        }
      });
  } else {
    res.status(401).json({ error: "Kullanıcı bulunamadı" });
  }
};
