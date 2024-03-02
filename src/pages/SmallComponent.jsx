import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@material-ui/core/Switch";
import { Button } from "@mui/material";

export default function FormPropsTextFields({ toggleDark, settoggleDark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [enable, setEnable] = useState(false);

  const handleModeChange = () => {
    setEnable(!enable);
    // settoggleDark(!toggleDark);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const hanldeSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const handleLogin = () => {
    const LS = JSON.parse(localStorage.getItem("formData"));
    if (LS.email === formData.email && LS.password === formData.password) {
      alert("login success");
    } else {
      alert("invalid password");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          sx={{
            background: toggleDark ? "black" : "",
            color: toggleDark ? "white" : "",
          }}
          onChange={handleChange}
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          name="name"
        />
        <TextField
          sx={{
            background: toggleDark ? "black" : "",
            color: toggleDark ? "white" : "",
          }}
          onChange={handleChange}
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          name="email"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
          name="password"
        />

        <Switch
          checked={enable}
          onChange={handleModeChange}
          name="toggleDark"
          color="default"
        />
        {enable && (
          <div>
            <Button onClick={hanldeSubmit} variant="outlined">
              Submit
            </Button>
          </div>
        )}
        <div>
          <Button onClick={handleLogin} variant="outlined">
            login
          </Button>
        </div>
      </div>
    </Box>
  );
}
