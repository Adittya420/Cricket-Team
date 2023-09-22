import mongoose from "mongoose";

const Connection = async (username1, password1) => {
  const URL = `mongodb+srv://${username1}:${password1}@cluster0.q5sed5v.mongodb.net/`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }); // This means you are saying that dont use old version that are depricated.
    //Also this returns promise Promises have three states:Pending:Fulfilled (Resolved): Rejected:

    console.log("Database Connected !!");
  } catch (error) {
    console.log("Error while connecting :(", error);
  }
};

export default Connection;
