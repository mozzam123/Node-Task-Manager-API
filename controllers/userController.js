const User = require("./../models/userModel");

exports.registerUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await User.findOne({ username: username });

  if (existingUser) {
    return res.status(409).json({ message: "Username is already registered" });
  }

  const newUser = new User({
    username: username,
    password: password,
  });

  try {
    // Save the new user to the database
    const savedUser = await newUser.save();
    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json({ status: "success", allUsers });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const existingUser = await User.findById(req.params.id);

    if (existingUser) {
      res.json({ message: existingUser });
    }
  } catch (error) {
    res.status(400).json({status: "Error", message: "User does not exist"});
  }
};
