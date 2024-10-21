import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box } from '@mui/material';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state?.user);
    const [loading, setLoading] = useState(!user);

    useEffect(() => {
        if (!user) {
            axios.get('http://localhost:3001/user', { withCredentials: true })
                .then(response => {
                    if (response.data.user) {
                        setUser(response.data.user);
                    } else {
                        navigate("/login");
                    }
                })
                .catch(() => navigate("/"))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [user, navigate]);

    if (loading) {
        return <center><h1>Loading...</h1></center>;
    }

    return (
        <Container
            maxWidth="md"
            sx={{
                padding: '2rem',
                marginTop: '6rem', // Avoid navbar overlap
                overflowY: 'scroll',
                maxHeight: 'calc(100vh - 64px)', // Adjust height based on your navbar
                '&::-webkit-scrollbar': {
                    display: 'none', // Hide scrollbar for webkit browsers
                },
                '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
                'scrollbar-width': 'none', // Hide scrollbar for Firefox
            }}
        >
            <Typography variant="h2" align="center" gutterBottom sx={{ paddingTop: '2rem', color: 'black' }}>
                Welcome to Recycling Helper
            </Typography>

            {/* Example of Disposal Steps */}
            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    How It Works
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Our platform makes it easy to:
                </Typography>
                <ul>
                    <li style={{ color: 'black' }}>Search for your item.</li>
                    <li style={{ color: 'black' }}>Follow our step-by-step instructions.</li>
                    <li style={{ color: 'black' }}>Dispose or recycle responsibly!</li>
                </ul>
            </Box>

            {/* Educational Content */}
            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    Why Proper Disposal Matters
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Every small action counts! Learn why recycling and proper waste disposal are critical to protecting the environment.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Recycling reduces waste and conserves valuable resources.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Proper waste disposal prevents pollution and protects ecosystems.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Reducing landfill waste helps combat climate change.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Safe disposal methods improve community health and well-being.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Sustainable practices contribute to a cleaner, greener planet for future generations.
                </Typography>
            </Box>
        </Container>
    );
}

export default Home;
