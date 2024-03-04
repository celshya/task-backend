const authService = require("../services/authService");

const register = async (req, res) => {
  //Try to register
  try {
    const userData = req.body; //input

    const user = await authService.registerUser(userData); //processing

    //Registration is successful
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register };
