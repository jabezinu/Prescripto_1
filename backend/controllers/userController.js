import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

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
      return res.json({
        success: false,
        message: "Password should contain at leas 8 charactor.",
      });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };
    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "user doesn't exist" });
    }
    
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.json({ success: true, token });
    }else{
        return res.json({ success: false, message: "Invalid credentials." });

    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get user profile data
const getProfile = async(req, res) => {
  try {
    const {userId} = req.body;
    const user = await userModel.findById({userId: user._id})
  } catch (error) {
    
  }
}

export { registerUser, loginUser };
