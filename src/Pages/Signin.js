import { Typography } from '@mui/material';
import React from 'react';
import GoogleButton from 'react-google-button';
import {UserAuth} from '../context/AuthContext';

const Signin = () => {

    const {googleSignIn} = UserAuth();

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        }catch(err){
            console.log(err);
        }
    };

    // useEffect(() => {
    //     if(user != null || Object.keys(user).length > 0){
    //         navigate('/account');
    //     }
    // }, [navigate, user]);

    return (
        <div style={{'display':'flex'}}>
            <Typography variant="h2">Please sign in. </Typography>
            <GoogleButton onClick={handleGoogleSignIn} style={{'margin':'auto', marginTop: '5rem'}}/>
        </div>
    );
}

export default Signin;