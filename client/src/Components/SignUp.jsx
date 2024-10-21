import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/signup", { name, email, password })
      .then(result => {
        if (result.status === 201) {
          navigate("/login");
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          window.alert("Email already exists. Please use a different email.");
        } else {
          console.log(err);
        }
      });
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
          height: { lg: "65vh" },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            fullWidth
            label="Enter Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            sx={{
              mb: 3,
              "& .MuiInputLabel-root": { fontWeight: "bold", fontSize: "1.2rem" },
            }}
          />
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
            Sign Up
          </Button>
        </form>
        <Typography sx={{ mt: 2, color: "black"  }}>
          Already have an account?{" "}
          <Link href="/login" underline="hover">
            Login
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default SignUp;
