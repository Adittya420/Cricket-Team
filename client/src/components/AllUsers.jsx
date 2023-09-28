import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  IconButton,
} from "@mui/material";

import { fetchUser, delUser } from "../service/api.js";

import { useEffect, useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)({
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
});

const StyledTableHeaderCell = styled(TableCell)({
  backgroundColor: "#f5f5f5",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f2f2f2",
  },
});

const Allusers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await fetchUser();
    setUsers(response.data);
  };

  const deleteUserdetails = async (id) => {
    console.log(id);
    await delUser(id);
    fetchUser();
  };
  // const handleEditClick = (userId) => {
  //   // Handle edit action here, e.g., redirect to an edit page
  //   console.log(`Edit user with ID: ${userId}`);
  // };

  // const handleDeleteClick = (userId) => {
  //   // Handle delete action here, e.g., show a confirmation dialog
  //   console.log(`Delete user with ID: ${userId}`);
  // };

  return (
    <StyledTable>
      <TableHead>
        <StyledTableRow>
          {/* <StyledTableHeaderCell>Id</StyledTableHeaderCell> */}
          <StyledTableHeaderCell>Name</StyledTableHeaderCell>
          <StyledTableHeaderCell>Username</StyledTableHeaderCell>
          <StyledTableHeaderCell>Email</StyledTableHeaderCell>
          <StyledTableHeaderCell>Phone</StyledTableHeaderCell>
          <StyledTableHeaderCell>Edit/Delete</StyledTableHeaderCell>{" "}
          {/* Combined section */}
        </StyledTableRow>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <StyledTableRow key={user.id}>
            {/* <TableCell>{user._id}</TableCell> */}
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              {/* Combined section for Edit and Delete */}
              <IconButton
                component={Link}
                to={`/edit/${user.id}`}
                // onClick={() => handleEditClick(user.id)}
                color="primary"
                aria-label="Edit"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => deleteUserdetails(user.id)}
                color="secondary"
                aria-label="Delete"
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Allusers;
