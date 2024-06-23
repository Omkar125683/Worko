const userService = require('../services/userService');

exports.listUsers = async (req, res) => {
  const users = await userService.listUsers();
  res.status(200).json(users);
};

exports.getUser = async (req, res) => {
  const user = await userService.getUser(req.params.userId);
  res.status(200).json(user);
};

exports.createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.userId, req.body);
  res.status(200).json(user);
};

exports.partialUpdateUser = async (req, res) => {
  const user = await userService.partialUpdateUser(req.params.userId, req.body);
  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.userId);
  res.status(204).send();
};
