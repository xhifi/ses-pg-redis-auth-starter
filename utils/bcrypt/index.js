const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
