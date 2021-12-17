const jtw = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

function tokenBuilder(joke) {
  const payload = {
    subject: joke.id,
  };
  const options = {
    expiresIn: "1d",
  };
  const result = jtw.sign(payload, JWT_SECRET, options);

  return result;
}

module.exports = {
  tokenBuilder,
};
