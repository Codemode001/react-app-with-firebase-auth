import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

import "./overrides.css";

// const mdTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 525,
  bgcolor: "background.paper",
  border: "2px",
  boxShadow: 24,
  p: 4,
};

const styleDelete = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const ManageUsers = () => {
  const navigate = useNavigate();
  //initialization of the modals
  const [openAddUser, setOpenAddUser] = React.useState(false);
  const [openEditUser, setOpenEditUser] = React.useState(false);
  const [openDeleteUser, setOpenDeleteUser] = React.useState(false);

  const OpenAddUser = () => setOpenAddUser(true);
  const closeAddUser = () => setOpenAddUser(false);
  const openEdit = () => setOpenEditUser(true);
  const closeEdit = () => setOpenEditUser(false);
  const openDelete = () => setOpenDeleteUser(true);
  const closeDelete = () => setOpenDeleteUser(false);

  const [modalData, setModalData] = React.useState({});

  const [users, setUsers] = React.useState([
    { id: "1", firstName: "harold", lastName: "pisos", role: "true" },
    { id: "2", firstName: "paul", lastName: "belascuain", role: "true" },
  ]);

  const [firstNameValue, setfirstNameValue] = React.useState("");
  const [lastNameValue, setLastNameValue] = React.useState("");
  const [idValue, setIdValue] = React.useState("");
  const [roleValue, setRoleValue] = React.useState("");

  const onChangeFirstName = (event) => {
    setfirstNameValue(event.target.value);
  };
  const onChangeLastName = (event) => {
    setLastNameValue(event.target.value);
  };
  const onChangeId = (event) => {
    setIdValue(event.target.value);
  };
  const onChangeRole = (event) => {
    setRoleValue(event.target.value);
  };

  // ===========Push value==========

  const addNewUser = () => {
    users.push({
      id: idValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
      role: roleValue,
    });

    setfirstNameValue("");
    setLastNameValue("");
    setIdValue("");
    setRoleValue("");
    closeAddUser();
  };

  const editUser = (id) => {
    for (let user of users) {
      if (user.id === id) {
        console.log("do something");
        if (firstNameValue) {
          user.firstName = firstNameValue;
          setfirstNameValue(null);
        } else {
          console.log("do nothing");
        }
        if (lastNameValue) {
          user.lastName = lastNameValue;
          setLastNameValue(null);
        } else {
          console.log("do nothing");
        }
        if (roleValue) {
          user.role = roleValue;
          setRoleValue(null);
        } else {
          console.log("do nothing");
        }
      }
    }

    closeEdit();
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    closeDelete();
  };

  const goBack = () => {
    navigate("/dashboard");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{
          backgroundColor: "#01303f",
          height: "5rem",
          fontSize: "4rem",
          fontFamily: "monospace",
        }}
      >
        <div>CRUD</div>
        <Button onClick={goBack}>
          <ArrowBackIcon />
        </Button>
      </div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container id="manageAccountsContainer">
            <Table
              sx={{ minWidth: 650, marginBottom: "2rem" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>ID number</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>isOnline</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    // key={user.id} commented, not sure why it's here by default
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: "none" }}
                    >
                      {user.id}
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      {user.firstName + " " + user.lastName}
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      {user.role}
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <div id="actions-container">
                        <div>
                          <Button
                            id="settingsButton1"
                            onClick={() => {
                              setModalData(user);
                              openEdit();
                            }}
                          >
                            Edit
                          </Button>
                        </div>
                        <div>
                          <Button
                            id="settingsButton2"
                            onClick={() => {
                              setModalData(user);
                              openDelete();
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Divider variant="fullwidth" id="theDivider" />
            <div id="addUserButtonContainer">
              <Button onClick={OpenAddUser} id="addUserButton">
                ADD USER
              </Button>
            </div>

            <Modal
              open={openAddUser}
              onClose={closeAddUser}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div id="addUserText">
                  <Typography
                    id="modal-modal-title"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#bb86fc",
                    }}
                    component="h2"
                  >
                    Add User
                  </Typography>
                </div>
                <form>
                  <div id="nameInput">
                    <TextField
                      id="outlined-basic"
                      label="FirstName *"
                      name={"firstname"}
                      variant="outlined"
                      sx={{ marginRight: "1rem" }}
                      value={firstNameValue}
                      defaultValue={""}
                      onChange={onChangeFirstName}
                    />
                    <TextField
                      id="outlined-basic"
                      label="LastName *"
                      variant="outlined"
                      name={"lastname"}
                      value={lastNameValue}
                      onChange={onChangeLastName}
                    />
                  </div>
                  <div id="bottomInputs">
                    <TextField
                      id="outlined-basic"
                      label="ID number *"
                      variant="outlined"
                      name={"id-number"}
                      type="number" //accepts only numbers
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 10);
                      }} //limit the input of the user
                      value={idValue}
                      onChange={onChangeId}
                    />
                    <TextField
                      id="outlined-basic"
                      label="is online *"
                      variant="outlined"
                      name={"position"}
                      sx={{ marginTop: "1rem" }}
                      defaultValue={""}
                      value={roleValue}
                      onChange={onChangeRole}
                    />
                  </div>
                </form>
                <div id="addUserButtons">
                  <Button
                    id="cancel"
                    sx={{ marginRight: "1rem" }}
                    onClick={closeAddUser}
                  >
                    Cancel
                  </Button>
                  <Button id="update" type="submit" onClick={addNewUser}>
                    ADD
                  </Button>
                </div>
              </Box>
            </Modal>
          </Container>
        </Box>
      </Box>{" "}
      \{/* =======START OF EDIT MODAL========= */}
      <Modal
        open={openEditUser}
        onClose={closeEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="editUserText">
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#bb86fc",
              }}
              component="h2"
            >
              {modalData.firstName + " " + modalData.lastName}
            </Typography>
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "17px",
                color: "#bb86fc",
              }}
              component="h2"
            >
              Update users information
            </Typography>
          </div>
          <form>
            <div id="nameInput">
              <TextField
                id="outlined-basic"
                label="FirstName *"
                name={"firstname"}
                variant="outlined"
                sx={{ marginRight: "1rem" }}
                defaultValue={modalData.firstName}
                onChange={onChangeFirstName}
              />
              <TextField
                id="outlined-basic"
                label="LastName *"
                variant="outlined"
                name={"lastname"}
                defaultValue={modalData.lastName}
                onChange={onChangeLastName}
              />
            </div>
            <div id="bottomInputs">
              <TextField
                id="outlined-basic"
                label="Position *"
                variant="outlined"
                name={"position"}
                defaultValue={modalData.role}
                onChange={onChangeRole}
                sx={{ marginTop: "1rem" }}
              />
            </div>
          </form>
          <div id="addUserButtons">
            <Button
              id="cancel"
              sx={{ marginRight: "1rem" }}
              onClick={closeEdit}
            >
              Cancel
            </Button>
            <Button
              id="update"
              type="submit"
              onClick={() => {
                editUser(modalData.id);
              }}
            >
              Update
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openDeleteUser}
        onClose={closeDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleDelete}>
          <div id="editModalText">
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "20px",
                color: "#bb86fc",
              }}
              component="h2"
            >
              Are you sure you want to delete{" "}
              {modalData.firstName + " " + modalData.lastName}
            </Typography>
          </div>
          <div id="addUserButtons">
            <Button
              id="cancel"
              sx={{ marginRight: "1rem" }}
              onClick={closeDelete}
            >
              Cancel
            </Button>
            <Button
              id="update"
              type="submit"
              onClick={() => deleteUser(modalData.id)}
            >
              Okay
            </Button>
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default ManageUsers;
