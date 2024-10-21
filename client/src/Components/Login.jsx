import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";

function Login({ setIsLoggedIn, isLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password }, { withCredentials: true })
      .then((result) => {
        if (result.data === "Success") {
          axios.get("http://localhost:3001/user", { withCredentials: true }).then((response) => {
            if (response.data.user) {
              setIsLoggedIn(true);
              navigate("/search", { state: { user: response.data.user } });
            }
          });
        } else {
          alert("Login failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 10 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: { xs: "80vw", sm: "50vw", md: "40vw", lg: "30vw", xl: "20vw" },
          height: { lg: "55vh" },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 3,
              "& .MuiInputLabel-root": { fontWeight: "bold", fontSize: "1.2rem" },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: 3,
              "& .MuiInputLabel-root": { fontWeight: "bold", fontSize: "1.2rem" },
            }}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: 2,
              backgroundColor: "primary.main",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Login
          </Button>
        </form>
        <Typography sx={{ mt: 2, color: "black" }}>
          Don't have an account?{" "}
          <Link href="/signup" underline="hover">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
