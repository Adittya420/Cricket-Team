import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  styled,
  Typography,
  Button,
} from "@mui/material";

import { editUser, getSingleUser } from "../service/api";

import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const DefaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(DefaultValue);

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    // Effect code here
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getSingleUser(id);
    // console.log("API Response:", response); // Log the response
    setUser(response.data);
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const EditUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={onValueChange} name="username" value={user.username} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={onValueChange} name="phone" value={user.phone} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onValueChange} name="email" value={user.email} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={EditUserDetails}>
          Edit USER
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
