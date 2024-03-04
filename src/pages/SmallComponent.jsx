import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@material-ui/core/Switch";
import { Button } from "@mui/material";
import Svg from "../components/comingSoon.svg";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function FormPropsTextFields({ toggleDark, settoggleDark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  console.log(formData, "formData");
  const [enable, setEnable] = useState(false);

  const handleModeChange = () => {
    setEnable(!enable);
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
    setStep(2);
  };

  const handleLogin = () => {
    const LS = JSON.parse(localStorage.getItem("formData"));
    if (LS.email === formData.email && LS.password === formData.password) {
      alert("login success");
      navigate("/Home");
    } else {
      alert("invalid password");
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "58vh",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
            gap: "14px",
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              width={50}
              src="https://cdn-icons-png.flaticon.com/512/4521/4521117.png"
            />
          </div>

          {step === 0 && (
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

              {true && (
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button onClick={hanldeSubmit} variant="outlined">
                    SingUp
                  </Button>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
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

              {true && (
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button onClick={handleLogin} variant="outlined">
                    login
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* <img src={Svg} alt="svg" /> */}
        </Box>
      </div>
    </div>
  );
}
