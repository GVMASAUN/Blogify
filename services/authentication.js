const JWT = require("jsonwebtoken");

const secret = "Victoria's Secret";

function createTokenForUser(user) {
  // console.log(user);
  const payload = {
    fullname: user.fullName,
    _id: user._id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };
  // console.log(payload);
  const token = JWT.sign(payload, secret);
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secret);
  return payload;
}

module.exports = {
  createTokenForUser,
  validateToken,
};
