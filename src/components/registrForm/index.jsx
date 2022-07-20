import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, TextField } from "@mui/material/";
import { getValue } from "@testing-library/user-event/dist/utils";

const RegistrForm = () => {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  console.log(newUser);

  let navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { id, value } = target;
    id
      ? console.log("error")
      : setNewUser({ ...newUser, [id]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    newUser? navigate("/", { replace: true }) :console.log("lololo");;
  };

  return (
    <Grid
      container
      height="100vh"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1498480086004-2400bd8c3663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        container
        sx={{ bgcolor: "#E4E7E8", width: "auto", opacity: 0.8 }}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="firstname"
            label="First name"
            type="text"
            onChange={handleChange}
          />

          <TextField
            required
            id="email"
            label="Email adress"
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="lastname"
            label="Last name"
            type="search"
            onChange={handleChange}
          />

          <TextField
            required
            id="password"
            label="Password"
            onChange={handleChange}
          />
        </Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ my: 2 }}
          onClick={handleSumbit}
        >
          Sing in
        </Button>
      </Grid>
    </Grid>
  );
};

export default RegistrForm;
