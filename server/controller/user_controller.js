import User from "../schema/user-schema.js";

export const addUser = async (request, response) => {
  const getNextUserId = async () => {
    const user = await User.findOne({}, { id: 1 }, { sort: { id: -1 } }); // Find the latest user
    return user ? String(Number(user.id) + 1) : "1"; // Increment the ID or start from '1' if no users are found
  };

  const user = request.body;
  const userId = await getNextUserId();
  user.id = userId;

  const validUser = new User(user);

  try {
    await validUser.save();
    response.status(201).json(validUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const fetchUser = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: message.error });
  }
};

export const getSingleUser = async (request, response) => {
  try {
    const user = await User.findOne({ id: request.params.id });

    // console.log("User ID:", request.params.id);

    if (!user) {
      // User not found
      return response.status(404).json({ error: "User not found" });
    }
    console.log(user);
    return response.status(200).json(user);
  } catch (error) {
    console.error("Error in the controller:", error);
    // console.log("User ID:", request.params.id);
    response.status(500).json({ error: "Internal server error" });
  }
};

export const editUser = async (request, response) => {
  const user = request.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { id: request.params.id },
      user,
      { new: true } // This option returns the updated document
    );

    if (!updatedUser) {
      return response.status(404).json({ error: "User not found" });
    }

    response.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error in the controller edit user", error);
    response.status(500).json({ error: "Internal server error" });
  }
};

export const delUser = async (request, response) => {
  try {
    const userId = request.params.id;

    // Check if the user exists before attempting to delete
    const user = await User.findOne({ id: userId });

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    // If the user exists, delete it
    await User.deleteOne({ id: userId });
    response.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error while deleting user:", error);
    response.status(500).json({ error: "Internal server error" });
  }
};
