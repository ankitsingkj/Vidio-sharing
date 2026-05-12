const User = require("../models/user.model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");


// REGISTER
const register = async (req, res) => {

  try {

    const { email, password } = req.body;

    // hash password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // save user
    await User.create({

      email,

      password: hashedPassword

    });

    res.status(201).json({

      success: true,

      message: "User Registered"

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// LOGIN
const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "All fields required"
      });

    }

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found"
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });

    }

    // ACCESS TOKEN
    const accessToken = jwt.sign(

      {
        userId: user._id,
        email: user.email
      },

      process.env.ACCESS_TOKEN_SECRET,

      {
        expiresIn: "1d"
      }

    );

    // REFRESH TOKEN
    const refreshToken = jwt.sign(

      {
        userId: user._id
      },

      process.env.REFRESH_TOKEN_SECRET,

      {
        expiresIn: "7d"
      }

    );

    res.status(200).json({

      success: true,

      message: "Login successful",

      user: {
        userId: user._id,
        email: user.email
      },

      accessToken,

      refreshToken

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};


// EXPORT
module.exports = {
  register,
  login
};