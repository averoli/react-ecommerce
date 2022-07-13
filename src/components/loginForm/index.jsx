import { useState } from "react";
import  { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material/";

import "./style.css";

const loginData = {
  email: "volha@gmail.com",
  password: "123456",
};



const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [open, setOpen] = useState(true);

  let navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setUser({
      ...user,
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
    console.log(user);
  };

  const handleLogin = () => {
    if (
      user.email === loginData.email &&
      user.password === loginData.password
    ) {
      navigate("/", {replace: true})
    } else {
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      className="box_login"
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="email"
        label="Email"
        defaultValue=""
        onChange={handleChange}
      />

      <TextField
        required
        type="password"
        id="password"
        label="Password"
        defaultValue=""
        onChange={handleChange}
      />

      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      {error ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              className="dialog_content_text"
            >
              <p>OOOPS!</p>
              <p>The password does not match the e-mail address given.</p>
              <p className="dialog_text">Please try again</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      ) : undefined}
    </Box>
  );
};

export default LoginForm;
