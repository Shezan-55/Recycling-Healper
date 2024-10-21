import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                padding: '2rem',
                marginTop: '2rem', // Add margin to avoid navbar overlap
                overflowY: 'scroll',
                maxHeight: 'calc(100vh - 64px)', // Adjust height based on your navbar height
                '&::-webkit-scrollbar': {
                    display: 'none', // Hide scrollbar for webkit browsers
                },
                '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
                'scrollbar-width': 'none', // Hide scrollbar for Firefox
            }}
        >
            <Typography variant="h2" align="center" gutterBottom sx={{ paddingTop: '2rem', color: 'black' }}>
                About Us
            </Typography>

         

            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    Who We Are
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    We are a passionate team of environmental advocates, developers, and educators who recognize the
                    urgent need for responsible waste management. Whether you’re unsure about how to recycle specific
                    materials or need guidance on eco-friendly disposal methods, we’re here to guide you every step of
                    the way.
                </Typography>
            </Box>

            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    What We Do
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Our platform provides an easy-to-use system that helps users:
                </Typography>
                <ul>
                    <li style={{ color: 'black' }}>Identify the type of waste they have.</li>
                    <li style={{ color: 'black' }}>Learn about proper disposal or recycling methods.</li>
                    <li style={{ color: 'black' }}>Discover eco-friendly practices for minimizing waste.</li>
                    <li style={{ color: 'black' }}>Understand the environmental impact of incorrect disposal.</li>
                </ul>
            </Box>

            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    Our Vision
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    Our vision is a world where waste is minimized, resources are conserved, and harmful pollution is
                    reduced. By educating people on the importance of responsible waste management, we aim to inspire a
                    global movement towards more sustainable living.
                </Typography>
            </Box>

            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    Why Proper Waste Disposal Matters
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    <strong>Environmental Protection:</strong> Proper disposal prevents pollutants from contaminating our
                    air, soil, and water.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    <strong>Conservation of Resources:</strong> Recycling helps reduce the need for raw materials,
                    conserving precious natural resources.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    <strong>Reduced Greenhouse Gas Emissions:</strong> By minimizing landfill waste, we can help lower
                    harmful emissions that contribute to climate change.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    <strong>Healthy Communities:</strong> Responsible waste management improves public health by keeping
                    hazardous materials out of the environment.
                </Typography>
            </Box>

            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    Our Commitment
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    We are committed to providing up-to-date, accurate information that can help everyone take actionable
                    steps to improve waste management. Whether you are recycling at home or managing industrial waste, we
                    strive to make the process as simple, efficient, and environmentally responsible as possible.
                </Typography>
            </Box>

            <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    Join Us in Making a Difference
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                    We invite you to explore our resources, share your experiences, and join us in our mission to reduce
                    waste and create a more sustainable future. Together, we can ensure that every discarded item finds
                    its rightful place—whether it's recycled, reused, or safely disposed of.
                </Typography>
            </Box>
        </Container>
    );
};

export default About;
