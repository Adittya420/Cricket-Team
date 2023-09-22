import User from "../schema/user-schema.js";

export const addUser = async (request, response) => {
  const user = request.body;

  const validUser = new User(user);

  try {
    await validUser.save();
    response.status(201).json(validUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
