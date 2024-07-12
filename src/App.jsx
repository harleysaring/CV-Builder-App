import { useState } from 'react';
import uniqid from 'uniqid';

import Navbar from './components/Navbar';
import PersonalForm from './components/personal/PersonalForm';
import PersonalInfo from './components/personal/PersonalInfo';
import EducationForm from './components/education/EducationForm';
import EducationInfo from './components/education/EducationInfo';
import ExperienceForm from './components/experience/ExperienceForm';
import ExperienceInfo from './components/experience/ExperienceInfo';

import './styles/index.css';

function App() {
	const [personalInputs, setPersonalInputs] = useState(
		{
			name: "Harley Davidson Saring", 
			email: "harleysaring123@gmail.com",
			phone_number: 639123123123,
			address: "Philippines"
		}
	);
	const [educationInputs, setEducationInputs] = useState({});
	const [experienceInputs, setExperienceInputs] = useState({});

	const [educations, setEducations] = useState([
		{	
			id: uniqid(),
			school: "University of Cebu",
			degree: "Bachelor of Science in Information Technology",
			educ_start: 2020,
			educ_end: 2024,
			educ_desc: "Lorem Ipsum"
		}
	]);
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
		<main className="container mx-auto p-4">
			<div className="edit">
				<PersonalForm inputs={personalInputs} handlePersonalInputChange={handlePersonalInputChange}/>
				<EducationForm 
					inputs={educationInputs} 
					handleEducationInputChange={handleEducationInputChange} 
					handleEducationSubmit={handleEducationSubmit} 
					educations={educations}
					setEducations={setEducations}
				/>
				<ExperienceForm 
					inputs={experienceInputs} 
					handleExperienceInputsChange={handleExperienceInputsChange} 
					handleExperienceSubmit={handleExperienceSubmit}
					experiences={experiences}
					setExperiences={setExperiences}
				/>
			</div>
			<div className="resume">
				<PersonalInfo inputs={personalInputs}/>
				<EducationInfo educations={educations}/>
				<ExperienceInfo experiences={experiences}/>
			</div>
		</main>
	);
}

export default App;
