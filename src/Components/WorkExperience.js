import { CardContent, Typography, TextField, Button} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sliceActions } from '../slices/addXP-slice';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const WorkExperience = (props) => {

    const dispatch = useDispatch();
    const counterArray = useSelector(state => state.addXP.counterArray);
    let defaultValue = false;
    const removeXP = (event) => {
        let level = parseInt(event.target.parentNode.parentNode.getAttribute('xplevel'));
        dispatch(sliceActions.decrement(level));
    };

    if(counterArray.length === 1){
        defaultValue = true;
    };

    if(counterArray[0] === props.xpNo){
        defaultValue = true;
    }

    const saveXP = () =>{
        
    }

    return (
        <>
            <CardContent>
                <Typography variant="h5">Work Experience - {props.xpNo}</Typography>
                <Typography variant="h7">{(props.xpNo === 1 || defaultValue) ? `Most relevant experience` : `Past Experience` }</Typography>
                <form xplevel={props.xpNo} style={{ marginTop: '3%' }}>
                    <Grid container>
                        <Grid item={true} xs={12} marginBottom={2}>
                            <TextField required label="Title" placeholder="Title" variant='outlined' fullWidth></TextField>
                        </Grid>
                        <Grid item={true} xs={12} marginBottom={2}>
                            <TextField required label="Company Name" placeholder="Enter Company Name" variant='outlined' fullWidth></TextField>
                        </Grid>
                        <Grid item={true} xs={12} marginBottom={2}>
                            <TextareaAutosize style={{ maxWidth: "99%" }} label="Description" placeholder="Enter description"/>
                            {/* <TextField  variant='outlined' fullWidth></TextField> */}
                        </Grid>
                        <Button  variant='outlined' onClick={removeXP}>REMOVE</Button>
                        <Button  variant='outlined' onClick={saveXP}>SAVE</Button>
                    </Grid>
                </form>
            </CardContent>
        </>
    );
}

export default WorkExperience;
