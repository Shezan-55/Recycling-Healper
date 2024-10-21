import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';

const Display = () => {
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const result = localStorage.getItem('searchResult');
    if (result) {
      setSearchResult(JSON.parse(result));
    } else {
      console.error("No search result found in local storage.");
    }
  }, []);

  console.log("Search Result in Display:", searchResult);

  return (
    <Container
      maxWidth="md"
      sx={{
        padding: '2rem',
        marginTop: '6rem', // Add margin to avoid navbar overlap
        overflowY: 'scroll',
        maxHeight: 'calc(100vh - 64px)', // Adjust height based on your navbar height
        '&::-webkit-scrollbar': {
          display: 'none', // Hide scrollbar for webkit browsers
        },
        '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
        'scrollbar-width': 'none', // Hide scrollbar for Firefox
      }}
    >
      <Typography variant="h2" align="center" gutterBottom sx={{ paddingTop: '2rem', color: 'white' }}>
        Search Result
      </Typography>

      {searchResult ? (
        <Box sx={{ marginY: '2rem', backgroundColor: '#f5f5dc', padding: '1rem', borderRadius: '8px' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
            Waste Type: {searchResult.wasteType}
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Material Composition:</strong> {searchResult.materialComposition}
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Recycling Methods:</strong>
          </Typography>
          <ul>
            {searchResult.recyclingMethod.map((method, index) => (
              <li key={index} style={{ color: 'black' }}>{method}</li>
            ))}
          </ul>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Disposal Category:</strong> {searchResult.disposalCategory}
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Environmental Impact:</strong>
          </Typography>
          <ul>
            <li style={{ color: 'black' }}><strong>Carbon Footprint:</strong> {searchResult.environmentalImpact?.carbonFootprint}</li>
            <li style={{ color: 'black' }}><strong>Decomposition Time:</strong> {searchResult.environmentalImpact?.decompositionTime}</li>
          </ul>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Recycle Code:</strong> {searchResult.recycleCode}
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Reuse Possibility:</strong> {searchResult.reusePossibility}
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Recycle By-products:</strong>
          </Typography>
          <ul>
            {searchResult.recycleByProducts.map((byProduct, index) => (
              <li key={index} style={{ color: 'black' }}>{byProduct}</li>
            ))}
          </ul>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Disposal Instructions:</strong>
          </Typography>
          <ul>
            {searchResult.disposalInstructions.map((instruction, index) => (
              <li key={index} style={{ color: 'black' }}>{instruction}</li>
            ))}
          </ul>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Toxicity Level:</strong> {searchResult.toxicityLevel}
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            <strong>Economic Value:</strong> ${searchResult.economicValue}
          </Typography>
        </Box>
      ) : (
        <Typography variant="body1" paragraph sx={{ color: 'black', textAlign: 'center' }}>
          No data found for your search.
        </Typography>
      )}
    </Container>
  );
};

export default Display;
