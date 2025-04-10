import validator from "validator";
import bcrypt, { hash } from 'bcrypt';

//  API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // all fileds are filled
    if (!name || !email || !password) {
        return res.json({ success: false, message: "Missing Details" });
    }
    
    // validate email
    if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Enter a valid email" });
    }

    // validate Password
    if (password.length < 8) {
      return res.json({ success: false, message: "Password should contain at leas 8 charactor." });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const userData = {
        name,
        email,
        password: hashedPassword,
    }
    new userModel.create(userData)
  } catch (error) {}
};
