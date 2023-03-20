import { CardContent, Input, Typography } from '@mui/material';
import React from 'react';

const ResumeUpload = () => {
    const fileUpload = (event) => {
        console.log(event);
    };

    return (
        <CardContent>
            <Typography>Upload Resume</Typography>
            <Input type="file" onChange={fileUpload}/>
        </CardContent>
    );
}

export default ResumeUpload;
