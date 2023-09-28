import axios from "axios";

// const URL = "http://localhost:8000/";

export const addUser = async (data) => {
  try {
    return await axios.post("http://localhost:8000/add", data);
  } catch (error) {
    console.log("Failed to call the add user api", error);
  }
};

// In ../../client/src/service/api.js
export const fetchUser = async () => {
  try {
    // Your axios logic here
    return await axios.get("http://localhost:8000/all");
  } catch (error) {
    console.log("Error while calling fetchUser api", error);
  }
};

export const getSingleUser = async (id) => {
  try {
    return await axios.get(`http://localhost:8000/${id}`);
  } catch (error) {
    console.log("Error while getting single user", error);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.post(`http://localhost:8000/all/${id}`, user);
  } catch (error) {
    console.log("Error while calling editUser", error);
  }
};

export const delUser = async (id) => {
  try {
    return await axios.delete(`http://localhost:8000/${id}`);
  } catch (error) {
    console.log("Error while deleting", error);
  }
};
