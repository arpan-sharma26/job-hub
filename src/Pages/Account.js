import React, {useState} from 'react';
import { Typography, Card, CardContent, Button, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { UserAuth } from '../context/AuthContext';
import BasicProfileDetails from '../Components/BasicProfileDetails';
// import WorkExperience from '../Components/WorkExperience';
import { useSelector, useDispatch } from 'react-redux';
// import { sliceActions } from '../slices/addXP-slice';
import { skillsActions } from '../slices/skills-slice';
import Skills from '../Components/Skills';
import axios from 'axios';

const Account = () => {
    const { user } = UserAuth();

    const skillCategories =  useSelector(state => state.skills.categories);
    const frontendCounter = useSelector(state => state.skills.frontendCounter);
    const counterArray = useSelector(state => state.skills.counterArray);

    const dropdown1Selection = useSelector(state => state.skills.dropdown1Selection);
    const dropdown2Selection = useSelector(state => state.skills.dropdown2Selection);
    const dropdown3Selection = useSelector(state => state.skills.dropdown3Selection);
    const dropdown4Selection = useSelector(state => state.skills.dropdown4Selection);
    const dropdown5Selection = useSelector(state => state.skills.dropdown5Selection);

    const skill1Selection = useSelector(state => state.skills.skill1Selection);
    const skill2Selection = useSelector(state => state.skills.skill2Selection);
    const skill3Selection = useSelector(state => state.skills.skill3Selection);
    const skill4Selection = useSelector(state => state.skills.skill4Selection);
    const skill5Selection = useSelector(state => state.skills.skill5Selection);

    const [skillForDropdown, setSkillForDropdown] = useState("");
    const [selectedDropdown, setSelectedDropdown] = useState(0);

    const firstName = useSelector(state => state.register.firstName);
    const lastName = useSelector(state => state.register.lastName);
    const email = useSelector(state => state.register.email);
    const mobile = useSelector(state => state.register.mobile);

    let disabledAddSkillButton = false;
    let ifEmailValid = false;
    const dispatch = useDispatch();

    const addSkills = () => {
        dispatch(skillsActions.increaseSkillsCounter(frontendCounter));
    }

    // e-mail validation check
    if (email.includes(".") && email.includes("@")) {
        ifEmailValid = true;
    }

    const handleChange = (event, index) => {
        dispatch(skillsActions.adjustCategories({value: event.target.value, index}));  
        setSkillForDropdown(event.target.value);
        setSelectedDropdown(index);
        dispatch(skillsActions.resetFrontEndSkills({xpNo: index}))
    }

    const createProfile = () => {
        let data = {
            firstName,
            lastName,
            email,
            mobile,
            skills: [{[dropdown1Selection]: skill1Selection}, {[dropdown2Selection]: skill2Selection}, {[dropdown3Selection]: skill3Selection}, {[dropdown4Selection]: skill4Selection}, {[dropdown5Selection]: skill5Selection}]
        };

        axios.post("http://localhost:5000/",
            data
        ).then((res) => {
            if(res.data === "user saved")
                console.log(res)
        });

    }

    return (
        <>
            <Typography variant="h3">Welcome, {user.displayName}</Typography>
            <Card style={{ width: '35%', margin: 'auto', marginTop: '6%' }}>
                <br />
                <BasicProfileDetails />
                {/* <Skills /> */}
                {/* <CardContent>
                    <Typography>Work Experience (if any):</Typography>
                    <Button onClick={addXP} variant="outlined" color="primary">Add Experience +</Button>
                    {counterArray.map(index => <WorkExperience key={index} xpNo={index} />)}
                  
                </CardContent> */}
                <CardContent>
                    <Typography>Add Skills (if any):</Typography>
                    <br />
                    {counterArray.length === 5 ? disabledAddSkillButton = true : disabledAddSkillButton = false}
                    <Button onClick={addSkills} disabled={disabledAddSkillButton} variant="outlined" color="primary">Add Skills</Button>
                    <br /><br />
                    {counterArray.map((item, index) => {
                        let val;
                        switch (index) {
                            case 0:
                                val = dropdown1Selection;
                                break;
                            case 1:
                                val = dropdown2Selection;
                                break;
                            case 2:
                                val = dropdown3Selection;
                                break;
                            case 3:
                                val = dropdown4Selection;
                                break;
                            default:
                                val = dropdown5Selection;
                                break;
                        }
                        return (
                            <>
                                <br />
                                <FormControl sx={{ width: "40%" }} >
                                    <InputLabel>Skill Category</InputLabel>
                                    <Select
                                        key={index}
                                        value={val}
                                        label="Skills Category"
                                        onChange={(event) => handleChange(event, index)}
                                    >
                                        {skillCategories.map((skill, value) => {
                                            let key = skill.toLowerCase();
                                            let disabled;
                                            if(key === dropdown1Selection || key === dropdown2Selection || key === dropdown3Selection || key === dropdown4Selection || key === dropdown5Selection)
                                                disabled = true;
                                            return <MenuItem disabled={disabled} key={key} value={key}>{skill}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                                {
                                    // selectedDropdown===index ?  : <Skills skills={""} key={index} xpNo={-1} />
                                }
                                <Skills prevValue={val} skills={skillForDropdown} key={index} xpNo={index} selectedDropdown={selectedDropdown} />
                            </>
                        )
                    })
                    }
                    <br />
                    <br />
                    <Button disabled={!firstName || !lastName || !ifEmailValid || mobile.length !== 10} onClick={createProfile} variant='outlined'>Create Profile</Button>
                </CardContent>
            </Card>
        </>
    );
}

export default Account;
