import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@material-ui/core/Switch";
import { Button } from "@mui/material";
import Svg from "../components/comingSoon.svg";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toaster from '../components/Toaster'

export default function FormPropsTextFields({ toggleDark, settoggleDark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  console.log(formData, "formData");
  const [enable, setEnable] = useState(false);

  const handleModeChange = () => {
    setEnable(!enable);
  };
  const validation1 = () => {
    let valid = false;

    if (formData.name && formData.email && formData.password) {
      setError("");
      valid = true;
    } else {
      setError("this field is required");
    }
    return valid;
  };

  const validation2 = () => {
    let valid = false;

    if (formData.name && formData.password) {
      setError("");
      valid = true;
    } else {
      setError("this field is required");
    }
    return valid;
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const hanldeSubmit = () => {
    
    if (!validation1()) {
      return;
    }
    setError("");
    localStorage.setItem("formData", JSON.stringify(formData));
    toast.success("SingUp Success", {
      position: "bottom-left",
    });
    navigate("/Home");
   
   
  };

  const handleLogin = () => {
    if (!validation2()) {
      return;
    }
    setError("");
    const LS = JSON.parse(localStorage.getItem("formData"));
    if (LS.email === formData.email && LS.password === formData.password) {
      // <Toaster/>
      navigate("/Home");
    } else {
      toast.success("Login success");
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
          height: "68vh",
          alignItems: "center",
        }}
      >
        <ToastContainer />
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

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {step === 0 ? (
              <p>Login your account</p>
            ) : (
              <p>Sign Up your account free</p>
            )}
          </div>

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
                label="Name"
                defaultValue=""
                name="name"
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ color: "red" }}>{formData.name ? "" : error}</p>
              </div>
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ color: "red" }}>{formData.email ? "" : error}</p>
              </div>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
                name="password"
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ color: "red" }}>{formData.password ? "" : error}</p>
              </div>

              {true && (
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button onClick={()=>hanldeSubmit()} variant="outlined">
                    SingUp
                  </Button>
                </div>
              )}
            </div>
          )}

          {step === 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ color: "red" }}>{formData.email ? "" : error}</p>
              </div>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
                name="password"
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ color: "red" }}>{formData.password ? "" : error}</p>
              </div>

              {true && (
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button onClick={()=>handleLogin()} variant="outlined">
                    login
                  </Button>
                </div>
              )}
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {step !== 2 ? (
              <p>
                Don't have account{" "}
                <Button onClick={() => setStep(2)}>SignUp</Button>{" "}
              </p>
            ) : (
              <p>
                <p>
                  If you have account{" "}
                  <Button onClick={() => setStep(0)}>Login</Button>
                </p>{" "}
              </p>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}
