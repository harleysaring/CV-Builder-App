import { useState } from 'react';
import uniqid from 'uniqid';
import Navbar from './components/Navbar';

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
				<section>
					<h2 className="font-bold">Personal Details</h2>
					<form>
						<div>
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" value={personalInputs.name} onChange={handlePersonalInputChange} />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="email" value={personalInputs.email} onChange={handlePersonalInputChange} />
						</div>
						<div>
							<label htmlFor="phone_number">Number</label>
							<input type="text" name="phone_number" id="phone_number" value={personalInputs.phone_number} onChange={handlePersonalInputChange} />
						</div>
						<div>
							<label htmlFor="address">Address</label>
							<input type="text" name="address" id="address" value={personalInputs.address} onChange={handlePersonalInputChange} />
						</div>
					</form>
				</section>
				<section>
					<h2 className="font-bold">Education</h2>
					<form onSubmit={handleEducationSubmit}>
						<div>
							<label htmlFor="school">School</label>
							<input type="text" name="school" id="school" value={educationInputs.school} onChange={handleEducationInputChange} />
						</div>
						<div>
							<label htmlFor="degree">Degree</label>
							<input type="text" name="degree" id="degree" value={educationInputs.degree} onChange={handleEducationInputChange} />
						</div>
						<div>
							<label htmlFor="educ_start">Start Date</label>
							<input type="text" name="educ_start" id="educ_start" value={educationInputs.educ_start} onChange={handleEducationInputChange} />
						</div>
						<div>
							<label htmlFor="educ_end">Start End</label>
							<input type="text" name="educ_end" id="educ_end" value={educationInputs.educ_end} onChange={handleEducationInputChange} />
						</div>
						<input type="submit" value="Save" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer" />
					</form>
				</section>
				<section>
					<h2 className="font-bold">Work experience</h2>
					<form onSubmit={handleExperienceSubmit}>
						<div>
							<label htmlFor="company">Company</label>
							<input type="text" name="company" id="company" value={experienceInputs.company} onChange={handleExperienceInputsChange} />
						</div>
						<div>
							<label htmlFor="job_title">Job Title</label>
							<input type="text" name="job_title" id="job_title" value={experienceInputs.job_title} onChange={handleExperienceInputsChange} />
						</div>
						<div>
							<label htmlFor="job_respo">Job Responsibilities</label>
							<input type="text" name="job_respo" id="job_respo" value={experienceInputs.job_respo} onChange={handleExperienceInputsChange} />
						</div>
						<div>
							<label htmlFor="job_start">Start Date</label>
							<input type="text" name="job_start" id="job_start" value={experienceInputs.job_start} onChange={handleExperienceInputsChange} />
						</div>
						<div>
							<label htmlFor="job_end">Start End</label>
							<input type="text" name="job_end" id="job_end" value={experienceInputs.job_end} onChange={handleExperienceInputsChange} />
						</div>
						<input type="submit" value="Save" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer" />
					</form>
				</section>
			</div>
			<div className="resume mt-10">
				<h1 className="font-bold">Resume</h1>
				<section className="personal">
					<h1>{personalInputs.name}</h1>
					<span style={{ marginLeft: 20 }}>{personalInputs.email}</span>
					<span style={{ marginLeft: 20 }}>{personalInputs.phone_number}</span>
					<span style={{ marginLeft: 20 }}>{personalInputs.address}</span>
				</section>
				<section className="education">
					<h2 className="font-bold">Education</h2>
					<ul>
						{educations.map((education) => {
							return (
								<li key={education.id}>
									<h3>{education.school}</h3>
									<div className="float-end">{education.educ_start}-{education.educ_end}</div>
									<div>{education.degree}</div>
								</li>
							);
						})}
					</ul>
				</section>
				<section className="experience">
					<h2 className="font-bold">Work Experience</h2>
					<ul>
						{experiences.map((exp) => {
							return (
								<li key={exp.id}>
									<h3>{exp.company}</h3>
									<div className="float-end">{exp.job_start}-{exp.job_end}</div>
									<div>{exp.job_title}</div>
									<p>{exp.job_respo}</p>
								</li>
							);
						})}
					</ul>
				</section>
			</div>
		</main>
	);
}

export default App;
