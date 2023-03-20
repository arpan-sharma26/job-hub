import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
    name: "skills",
    initialState: {
        counterArray: [],
        frontendCounter: 0,
        skill1Selection: [],
        skill2Selection: [],
        skill3Selection: [],
        skill4Selection: [],
        skill5Selection: [],
        dropdown1Selection: "",
        dropdown2Selection: "",
        dropdown3Selection: "",
        dropdown4Selection: "",
        dropdown5Selection: "",
        categoriesTaken: [],
        categories: ['frontend', 'backend', 'cloud', 'deployment', 'other'],
        frontend: ['AngularJS', 'NextJS', 'ReactJS', 'HTML/CSS', 'VueJS', 'Gatsby', 'TypeScript', 'Flutter'],
        backend: ['NodeJS', 'Python', 'Backend1', 'Backend2'],
        cloud: ['AWS', 'Azure', 'Google Cloud', 'Oracle'],
        deployment: ['Kubernetes', 'NGINX', 'Apache', 'Docker'],
        other: ['Git', 'GitHub', 'CI/CD', 'Agile Development', 'Pipeline'],
        selectedFrontendSkills: [],
        selectedBackendSkills: [],
        selectedCloudSkills: [],
        selectedDeploymentSkills: []
    }, 
    reducers: {
        increaseSkillsCounter(state, action){
            state.frontendCounter++;
            state.counterArray.push(action.payload+1);
        },
        adjustCategories(state, action){
            let removeCategory = action.payload.value;
            let index = action.payload.index;
            switch (index) {
                case 0:
                    state.dropdown1Selection = removeCategory;
                    break;
                case 1:
                    state.dropdown2Selection = removeCategory;
                    break;
                case 2:
                    state.dropdown3Selection = removeCategory;
                    break;
                case 3:
                    state.dropdown4Selection = removeCategory;
                    break;
                default:
                    state.dropdown5Selection = removeCategory;
                    break;
            }
            state.categoriesTaken.push(removeCategory);
        },
        resetFrontEndSkills(state, action){
            let value;
            switch (action.payload.xpNo) {
                case 0:
                    value = 'skill1Selection';
                    break;
                case 1:
                    value = 'skill2Selection';
                    break;
                case 2:
                    value = 'skill3Selection';
                    break;
                case 3:
                    value = 'skill4Selection';
                    break;
                case 4:
                    value = 'skill5Selection';
                    break;
                default:
                    break
            };
            state[value] = [];
        },
        setSkills(state, action){
            let value;
            switch (action.payload.dropdownNo) {
                case 0:
                    value = 'skill1Selection';
                    break;
                case 1:
                    value = 'skill2Selection';
                    break;
                case 2:
                    value = 'skill3Selection';
                    break;
                case 3:
                    value = 'skill4Selection';
                    break;
                case 4:
                    value = 'skill5Selection';
                    break;
                default:
                    break
            };
            if(state[value].length > action.payload.skill.length){
                state[value] = action.payload.skill
            }else{
                state[value].push(action.payload.skill[action.payload.skill.length-1])
            }
        }
    }
});


export const skillsActions = skillsSlice.actions;
export default skillsSlice;