import userModel from "../model/userModel.js";

const login = (req ,res) => {
    console.log('loggin called');
};

const register =async (req ,res) => { 
    const user = req.body;

    const isAlreadyRegistered = await userModel.findOne({email:user.email})
    if(isAlreadyRegistered) return res.status(404).json({message:"User Already registered "})


};


export {login ,register};