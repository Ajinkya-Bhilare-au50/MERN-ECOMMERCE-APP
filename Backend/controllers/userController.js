import User from "../models/userModel.js";
import AsyncHandler from "express-async-handler";
import generateToken from "../utils/generateTokens.js";
//Auth user and get a token
// @route    POST/api/users/login
// @access   Public Routes
const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    req.statusCode(401);
    throw new Error("Invalid email or password ");
  }
});


//Auth get user Profile
// @route    GET/api/users/profile
// @access   Public Routes
const getUserProfile = AsyncHandler(async (req, res) => {
  res.send('success')
});

export { authUser ,getUserProfile};
