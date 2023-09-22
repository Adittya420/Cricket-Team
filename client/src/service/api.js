import axios from "axios";

// const URL = "http://localhost:8000/";

export const addUser = async (data) => {
  try {
    return await axios.post("http://localhost:8000/add", data);
  } catch (error) {
    console.log("Failed to call the add user api", error);
  }
};
