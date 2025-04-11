import jwt from "jsonwebtoken";

// use authentication middleware
const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.json({
        success: false,
        message: "not authorized login again",
      });
    }

    const token = authHeader.split(' ')[1];
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!req.body) req.body = {};
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
