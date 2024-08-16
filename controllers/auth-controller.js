import userModel from "../model/userModel.js";
import jwt from 'jsonwebtoken';


const login = async(req, res) => {
  const userData = req.body;

  try {
    const user = await userModel.findOne({ email: userData.email });
    if (!user) return res.json({ success: false, message: "Invalid User" });

const token = jwt.sign({email: userData.email},process.env.JWT_SECRET,{
    expiresIn:'1d',
})
    
    return res.json({
      success: true,
      user,
      token,
      message: "User logged in successful",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
    
};

const register = async (req, res) => {
  const user = req.body;
  try {
    const isAlreadyRegistered = await userModel.findOne({ email: user.email });
    if (isAlreadyRegistered)
      return res.json({ success: false, message: "User Already registered " });

    const newUser = await userModel(user);
    newUser.save();
    return res.json({
      success: true,
      user: newUser,
      message: "User registration successful",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export { login, register };
