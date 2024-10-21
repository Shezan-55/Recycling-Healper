import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Logout({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    setIsLoggedIn(false);
                    navigate("/login");
                }
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
    };

    // Parallax-style button design, similar to Navbar
    const button = { 
        marginRight: '20px', 
        fontSize: '1.2rem', 
        fontWeight: '700', 
        padding: '0.3rem 1.4rem', 
        color: '#fff', 
        borderBottom: '2px solid rgba(255, 255, 255, 0.2)' // Subtle border for style
    };

    return (
        <Button 
            variant="text" 
            color="error" 
            style={button} 
            onClick={handleLogout}
        >
            Logout
        </Button>
    );
}

export default Logout;
