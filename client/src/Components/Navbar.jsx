import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons'; // Import the robot icon
import Logout from './Logout';

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const buttonStyles = {
        marginRight: '20px',
        fontSize: '1.2rem',
        fontWeight: '700',
        padding: '0.3rem 1.4rem',
        color: '#fff',
        fontFamily: '"Roboto", sans-serif', // Change font family here
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(10px)',
                padding: '10px 100px',
                zIndex: 100,
                borderBottom: '2px solid rgba(255, 255, 255, 0.2)'
            }}
        >
            <Toolbar>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" component="div" sx={{ color: '#fff', marginRight: '20px', fontWeight: '600' }}>
                        Recycling Helper
                    </Typography>

                    <Button variant="text" style={buttonStyles} component={Link} to="/">
                        Home
                    </Button>
                    <Button variant="text" style={buttonStyles} component={Link} to="/about">
                        About
                    </Button>
                    <Button variant="text" style={buttonStyles} component={Link} to="/search">
                        Search
                    </Button>
                </div>

                <div style={{ flexGrow: 1 }} />

                {!isLoggedIn ? (
                    <>
                        <Button variant="text" style={buttonStyles} component={Link} to="/login">
                            Login
                        </Button>
                        <Button variant="text" style={buttonStyles} component={Link} to="/signup">
                            Signup
                        </Button>
                    </>
                ) : (
                    <>
                        <IconButton
                            color="inherit"
                            component={Link}
                            to="/chatbot"
                            sx={{ marginRight: '20px' }} // Add some margin to the right
                        >
                            <FontAwesomeIcon icon={faRobot} />
                        </IconButton>
                        <Logout setIsLoggedIn={setIsLoggedIn} />
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};
