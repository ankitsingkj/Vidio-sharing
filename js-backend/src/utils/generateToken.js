const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {

  return jwt.sign(
    {
      userId: user._id,
      email: user.email
    },

    process.env.ACCESS_TOKEN_SECRET,

    {
      expiresIn: "1d"
    }
  );
};

const generateRefreshToken = (user) => {

  return jwt.sign(
    {
      userId: user._id
    },

    process.env.REFRESH_TOKEN_SECRET,

    {
      expiresIn: "7d"
    }
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken
};