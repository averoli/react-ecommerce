import { useState } from "react";
import { Box, Button, TextField } from "@mui/material/";
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
      console.log("true");
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
        <div>
          <p>OOOPS!</p>
          <p>The password does not match the e-mail address given.</p>
          <p>Please try again</p>
        </div>
      ) : undefined}
    </Box>
  );
};

export default LoginForm;
