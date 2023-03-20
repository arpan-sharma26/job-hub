import React from 'react';
import { CardContent, Typography, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registrationActions } from '../slices/profile-registration';
// import { IMaskInput } from 'react-imask';

const BasicProfileDetails = () => {

    const dispatch = useDispatch();
    const number = useSelector(state => state.register.mobile);

    const mobileValidation = (event) => {
        // eslint-disable-next-line eqeqeq
        if((event.target.value.length <= 10 && Number.isInteger(parseInt(event.target.value))) || event.target.value == '')
            dispatch(registrationActions.registerUser({ mobile: event.target.value }))
    }

    return (
        < CardContent >
            <Typography variant="h5">Please fill details to create your profile.</Typography>
            <Typography variant="h7">This is a one time process</Typography>
            <form style={{ marginTop: '3%' }}>
                <Grid container>
                    <Grid item={true} xs={12} marginBottom={2}>
                        <TextField onChange={(event) => { dispatch(registrationActions.registerUser({ firstName: event.target.value })) }} required label="First Name" placeholder="Enter First Name" variant='outlined' fullWidth></TextField>
                    </Grid>
                    <br />
                    <Grid item={true} xs={12}>
                        <TextField onChange={(event) => { dispatch(registrationActions.registerUser({ lastName: event.target.value })) }} required label="Last Name" placeholder="Enter Last Name" variant='outlined' fullWidth></TextField>
                    </Grid>
                    <br />
                    <Grid item={true} xs={12} marginTop={2} marginBottom={2}>
                        <TextField onChange={(event) => { dispatch(registrationActions.registerUser({ email: event.target.value })) }} type='email' required label="Email" placeholder="Enter e-mail" variant='outlined' fullWidth></TextField>
                    </Grid>
                    <br />
                    <Grid item={true} xs={12} marginBottom={2}>
                        <TextField type="tel" value={number} inputProps={{ maxLength: 10 }} onChange={mobileValidation} label="Mobile" required placeholder="Enter your number" variant='outlined' fullWidth></TextField>
                    </Grid>
                </Grid>
            </form>
        </CardContent >
    );
}

export default BasicProfileDetails;
