import { useState } from 'react';
import uniqid from 'uniqid';

import Navbar from './components/Navbar';
import PersonalForm from './components/personal/PersonalForm';
import PersonalInfo from './components/personal/PersonalInfo';
import EducationForm from './components/education/EducationForm';
import EducationInfo from './components/education/EducationInfo';
import ExperienceForm from './components/experience/ExperienceForm';
import ExperienceInfo from './components/experience/ExperienceInfo';

function App() {
	const [personalInputs, setPersonalInputs] = useState({});
	const [educationInputs, setEducationInputs] = useState({});
	const [experienceInputs, setExperienceInputs] = useState({});

	const [educations, setEducations] = useState([]);
	const [experiences, setExperiences] = useState([]);

	function handlePersonalInputChange(e) {
		setPersonalInputs({ ...personalInputs, [e.target.name]: e.target.value });
	}

	function handleEducationInputChange(e) {
		setEducationInputs({ ...educationInputs, [e.target.name]: e.target.value });
	}

	function handleEducationSubmit(e) {
		e.preventDefault();
		setEducations((prevEducations) => {
			return [...prevEducations, {id: uniqid(), ...educationInputs}];
		});
		setEducationInputs({
			school: "",
			degree: "",
			educ_start: "",
			educ_end: "",
		});
	}

	function handleExperienceInputsChange(e) {
		setExperienceInputs({ ...experienceInputs, [e.target.name]: e.target.value });
	}

	function handleExperienceSubmit(e) {
		e.preventDefault();
		setExperiences((prevExperience) => {
			return [...prevExperience, {id: uniqid(), ...experienceInputs}];
		});
		setExperienceInputs({
			company: "",
			job_title: "",
			job_respo: "",
			job_start: "",
			job_end: ""
		});
	}

	return (
		<main>
			<div className="edit">
				<h1 className="font-bold">Edit</h1>
				<PersonalForm inputs={personalInputs} handlePersonalInputChange={handlePersonalInputChange}/>
				<EducationForm inputs={educationInputs} handleEducationInputChange={handleEducationInputChange} handleEducationSubmit={handleEducationSubmit}/>
				<ExperienceForm inputs={experienceInputs} handleExperienceInputsChange={handleExperienceInputsChange} handleExperienceSubmit={handleExperienceSubmit}/>
			</div>
			<div className="resume mt-10">
				<h1 className="font-bold">Resume</h1>
				<PersonalInfo inputs={personalInputs}/>
				<EducationInfo educations={educations}/>
				<ExperienceInfo experiences={experiences}/>
			</div>
		</main>
	);
}

export default App;
