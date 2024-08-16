import userModel from "../model/userModel.js";

const login = async(req, res) => {
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
