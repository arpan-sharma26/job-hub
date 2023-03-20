import React from 'react';
import AutoComplete from './AutoComplete';
import { useSelector } from 'react-redux';
import { CardContent, Typography } from '@mui/material';
// import { registrationActions } from '../slices/profile-registration';

const Skills = (props) => {
    let skillsArray1 = [];
    let skillsArray2 = [];
    let skillsArray3 = [];
    let skillsArray4 = [];
    let skillsArray5 = [];
    let vals;
    // switch (props.skills) {
    //     case 'frontend':
    //         vals = 'frontend';
    //         break;
    //     case 'backend':
    //         vals = 'backend';
    //         break;
    //     case 'cloud':
    //         vals = 'cloud';
    //         break;
    //     case 'deployment':
    //         vals = 'deployment';
    //         break;
    //     case 'other':
    //         vals = 'other';
    //         break;            
    //     default:
    //         vals = '';
    //         break;
    // }
    
    skillsArray1 = useSelector(state => state.skills.frontend) || [];
    skillsArray2 = useSelector(state => state.skills.backend) || [];
    skillsArray3 = useSelector(state => state.skills.cloud) || [];
    skillsArray4 = useSelector(state => state.skills.deployment) || [];
    skillsArray5 = useSelector(state => state.skills.other) || [];
    
    // const [skills, setSkills] = useState(props.skills);

    let value;
    const skill1Selection = useSelector(state => state.skills.skill1Selection);
    const skill2Selection = useSelector(state => state.skills.skill2Selection);
    const skill3Selection = useSelector(state => state.skills.skill3Selection);
    const skill4Selection = useSelector(state => state.skills.skill4Selection);
    const skill5Selection = useSelector(state => state.skills.skill5Selection);

    switch (props.xpNo) {
        case 0:
            value = skill1Selection;
            break;
        case 1:
            value = skill2Selection;
            break;
        case 2:
            value = skill3Selection;
            break;
        case 3:
            value = skill4Selection;
            break;
        default:
            value = skill5Selection;
            break;
    }

    if((props.skills === "frontend" && (props.selectedDropdown === props.xpNo)) || ((props.selectedDropdown !== props.xpNo) && props.prevValue === "frontend"))
        vals = 1;
    else if((props.skills === 'backend' && (props.selectedDropdown === props.xpNo)) || ((props.selectedDropdown !== props.xpNo) && props.prevValue === "backend"))
        vals = 2;
    else if((props.skills === 'cloud' && (props.selectedDropdown === props.xpNo)) || ((props.selectedDropdown !== props.xpNo) && props.prevValue === "cloud"))
        vals = 3;
    else if((props.skills === 'deployment' && (props.selectedDropdown === props.xpNo)) || ((props.selectedDropdown !== props.xpNo) && props.prevValue === "deployment"))
        vals = 4;
    else if((props.skills === 'other' && (props.selectedDropdown === props.xpNo)) || ((props.selectedDropdown !== props.xpNo) && props.prevValue === "other"))
        vals = 5;
    else if((props.selectedDropdown !== props.xpNo))
        vals = 6

    switch (vals) {
        case 1:
            vals = skillsArray1
            break;
        case 2:
            vals = skillsArray2
            break;
        case 3:
            vals = skillsArray3
            break;
        case 4:
            vals = skillsArray4
            break;
        case 5:
            vals = skillsArray5
            break;
        case 6:
            vals = skillsArray5
            break;
        default:
            vals = [];
            break;
    }
    
    return (
        <CardContent>
            <Typography>Skills</Typography>
            <AutoComplete skillsArray={vals} value={value} xpNo={props.xpNo}/>
        </CardContent>
    );
}

export default Skills;
