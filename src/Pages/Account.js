import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';
import { UserAuth } from '../context/AuthContext';
import BasicProfileDetails from '../Components/BasicProfileDetails';

import { useSelector, useDispatch } from 'react-redux';
import { sliceActions } from '../slices/addXP-slice';

const Account = () => {
    const { user } = UserAuth();
    const counter = useSelector(state => state.addXP.ifAddXP);
    const dispatch = useDispatch();
    return (
        <div>
            <Typography variant="h3">Welcome, {user.displayName}</Typography>
            <Card style={{ width: '35%', margin: 'auto', 'margin-top': '6%' }}>
                <br/>
            <BasicProfileDetails/>
            <CardContent>
                <Typography>Work Experience (if any):</Typography>
                <Button onClick={()=>{dispatch(sliceActions.increment())}} variant="outlined" color="primary">Add Experience +</Button>
                <Typography> {counter}</Typography>
            </CardContent>
            </Card>
           
        </div>
    );
}

export default Account;
