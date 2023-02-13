import React, { useEffect } from 'react';
import { AppBar, Button, Toolbar, Box, Typography } from '@mui/material';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if(user && user.displayName)
            navigate('/account');
        else
            navigate('/');
    }, [user]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color='inherit' position='static'>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }} variant='h6'>Jobhub</Typography>
                    {user?.displayName && <Button onClick={logoutHandler} color="secondary">Logout</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
