import { useState } from "react";
import { Box, Button, TextField } from "@mui/material/";
import "./style.css";

const LoginForm = () => {
  const loginData = {
    email: "volha@gmail.com",
    password: "123456",
  };

  const init = {
    email: "",
    password: ""
  }

  const [user, setUser] = useState(init);

  const handleChange = (e) => {
    console.log(user);
    setUser(user.email, e.target.value);
    console.log(e.target.value);
  };

  const handleLogin = (e) => {
    console.log("koko");
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
      onChange={handleChange}
    >
      <TextField required id="email" label="Email" defaultValue="" />
      <TextField
        required
        id="password"
        label="Password"
        defaultValue=""
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
