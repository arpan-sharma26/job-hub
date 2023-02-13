import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const navigateToLoginPage = () => {
        navigate('/signin');
    };

    return (
        <div>
            <Typography sx={{ marginTop: 10 }} variant="h4">Home Page</Typography>
            <Button onClick={navigateToLoginPage}>Login</Button>
        </div>
    );
}

export default Home;
