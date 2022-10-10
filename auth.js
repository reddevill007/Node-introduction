const register = function (userName) {
  console.log(`User ${userName} has been registered`);
};

const login = function (userName, password) {
  console.log(`User ${userName} has been logged in`);
};

module.exports = { register, login };
