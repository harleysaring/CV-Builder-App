import { useState } from 'react';
import uniqid from 'uniqid';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

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

	function generate_resume() {
		html2canvas(document.getElementById("resume")).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
        	const pdf = new jsPDF();

			const imgWidth = 210; 
			const pageHeight = 295;
			const imgHeight = (canvas.height * imgWidth) / canvas.width;
			let heightLeft = imgHeight;
			let position = 0;

			pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        	heightLeft -= pageHeight;

			while (heightLeft >= 0) {
				position = heightLeft - imgHeight;
				pdf.addPage();
				pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
				heightLeft -= pageHeight;
			}

			pdf.save('resume.pdf');
		});
	}

	return (
		<>
			<button className="p-4 bg-red-500 rounded hover:bg-red-700 text-black" onClick={generate_resume}>Download as PDF</button>
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
				<div className="resume" id="resume">
					<PersonalInfo inputs={personalInputs}/>
					<EducationInfo educations={educations}/>
					<ExperienceInfo experiences={experiences}/>
				</div>
			</main>
		</>
	);
}

export default App;
