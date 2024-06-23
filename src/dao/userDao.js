const User = require('../models/user');
// creating the route for getting the number of users //
exports.listUsers = async () => {
  try {
    return await User.find({ isDeleted: false });
  } catch (error) {
    return "Internal server error"+error
  }
};

exports.getUser = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    return "Internal server error"+error
  }
};

exports.createUser = async (userData) => {
  try {
    const ispresnet = await User.findOne({email:userData.email});
    if(ispresnet){
      return "email is alerady registered try with the anthor email address"
    }
    // console.log(userData);
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    return "Internal Server Error"+error
  }
};

exports.updateUser = async (userId, userData) => {
  return await User.findByIdAndUpdate(userId, userData, { new: true });
};

exports.partialUpdateUser = async (userId, userData) => {
  return await User.findByIdAndUpdate(userId, userData, { new: true });
};

exports.deleteUser = async (userId) => {
  return await User.findByIdAndUpdate(userId, { isDeleted: true });
};
