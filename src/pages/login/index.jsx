import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  Typography,
} from "@mui/material/";

import "./style.css";

const loginData = {
  email: "volha@gmail.com",
  password: "123456",
};

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log("That's the state of user when rendering   ", user);

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

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUser({
      ...user,
      [id]: value,
    });
    console.log("Thats the user state before rendering  ", user);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      user.email === loginData.email &&
      user.password === loginData.password
    ) {
      navigate("/", { replace: true });
    } else {
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "25ch" },
      }}
      className="box_login"
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
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

        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogin}
            sx={{ my: 2 }}
          >
            Sign in
          </Button>
        </Grid>
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

        <Grid item>
          <Link to="/signup" underline="hover">
            Create an account
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
