import React from 'react';
import {Autocomplete, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { skillsActions } from '../slices/skills-slice';

const AutoComplete = (props) => {
    const dispatch = useDispatch();
    return (
        <Autocomplete
        key={false}
        multiple
        freeSolo
        filterSelectedOptions
        options={props.skillsArray}
        value={props.value}
        onChange={(e, attr) => { dispatch(skillsActions.setSkills({ skill: attr, dropdownNo: props.xpNo })) }}
        renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                label="Skills Label"
                placeholder="Skills"
            />
        )}
    />
    );
}

export default AutoComplete;
