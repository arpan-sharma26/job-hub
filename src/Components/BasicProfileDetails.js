import React from 'react';
import { CardContent, Typography, Grid, TextField, Button } from '@mui/material';

const BasicProfileDetails = () => {
    return (
        <CardContent>
            <Typography variant="h5">Please fill details to create your profile.</Typography>
            <Typography variant="h7">This is a one time process</Typography>
            <form style={{ 'margin-top': '3%' }}>
                <Grid container>
                    <Grid xs={12} marginBottom={2}>
                        <TextField required label="First Name" placeholder="Enter First Name" variant='outlined' fullWidth></TextField>
                    </Grid>
                    <br />
                    <Grid xs={12}>
                        <TextField required label="Last Name" placeholder="Enter Last Name" variant='outlined' fullWidth></TextField>
                    </Grid>
                    <br />
                    <Grid xs={12} marginTop={2} marginBottom={2}>
                        <TextField type='email' required label="Email" placeholder="Enter e-mail" variant='outlined' fullWidth></TextField>
                    </Grid>
                    <br />
                    <Grid xs={12} marginBottom={2}>
                        <TextField label="Mobile" placeholder="Enter your number" variant='outlined' fullWidth></TextField>
                    </Grid>
                    <br />
                    <Grid xs={12}>
                        <Button type='Submit' variant='outlined'>Create Profile</Button>
                    </Grid>
                </Grid>
            </form>
        </CardContent>
    );
}

export default BasicProfileDetails;
