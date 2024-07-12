import {useState} from 'react'; 

function ExperienceForm({ inputs, handleExperienceInputsChange, handleExperienceSubmit, experiences, setExperiences}) {
    const [isSectionOpen, setSectionOpen] = useState(false);
    const [isFormOpen, setFormOpen] = useState(false);

    function handleSectionOpenClick() {
        setSectionOpen(!isSectionOpen);
        setFormOpen(false);
    }

    function handleFormOpenClick() {
        setFormOpen(true);
    }

    function onClickDelete(id) {
		const new_list = experiences.filter((exp) => exp.id !== id);
		setExperiences(new_list);
	}

    return (
        <section>
            <button className="accordion" onClick={handleSectionOpenClick}>
                <div>
                    <svg fill="#000000" viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.081 8.456h-2.003a1.345 1.345 0 0 0-2.683 0h-4.79a1.345 1.345 0 0 0-2.683 0H.919V7.344a1.112 1.112 0 0 1 1.108-1.108h2.304v-.085a.477.477 0 0 1 .402-.469v-.56A1.112 1.112 0 0 1 5.84 4.016h4.318a1.112 1.112 0 0 1 1.108 1.108v.558a.477.477 0 0 1 .412.47v.085h2.294a1.112 1.112 0 0 1 1.108 1.108zm-1.999 1.06v-.143h1.504v5.346a.476.476 0 0 1-.475.475H1.889a.476.476 0 0 1-.475-.475V9.373h1.503v.143a1.346 1.346 0 0 0 2.692 0v-.143h4.782v.143a1.346 1.346 0 0 0 2.691 0zm-8.265 0V8.56a.554.554 0 1 0-1.108 0v.955a.554.554 0 1 0 1.108 0zm5.342-4.391-.002-.002H5.843l-.002.002v.56a.477.477 0 0 1 .39.466v.085h3.548v-.085a.477.477 0 0 1 .38-.465zm2.132 4.39v-.954a.554.554 0 0 0-1.109 0v.955a.554.554 0 1 0 1.109 0z"></path></g></svg>
                    <h2 className="font-bold">Work Experience</h2>
                </div>
                <svg className={`arrow ${isSectionOpen ? "open" : ""}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </button>
            <div className={`section-content ${isSectionOpen ? "open" : ""}`}>
                <div className={`section-list`} style={{display: isFormOpen && 'hidden'}}>
                    <ul className="education-list">
                        {experiences.map((experience) => {
                            return (
                                <li key={experience.id}>
                                    <div>
                                        <h3>{experience.company}</h3>
                                        <span>{experience.job_start} - {experience.job_end}</span>
                                    </div>
                                    <button onClick={() => onClickDelete(experience.id)}>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 12V17" stroke="#000000" strokeWidth="2" strokeinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={`section-form ${isFormOpen ? "open" : ""}`}>
                    <form onSubmit={handleExperienceSubmit} style={{display: isFormOpen && 'hidden'}}>
                        <div className="mb-4">
                            <label htmlFor="company">Company</label>
                            <input type="text" name="company" id="company" value={inputs.company} onChange={handleExperienceInputsChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_title">Job Title</label>
                            <input type="text" name="job_title" id="job_title" value={inputs.job_title} onChange={handleExperienceInputsChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_respo">Job Responsibilities</label>
                            <input type="text" name="job_respo" id="job_respo" value={inputs.job_respo} onChange={handleExperienceInputsChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_start">Start Date</label>
                            <input type="text" name="job_start" id="job_start" value={inputs.job_start} onChange={handleExperienceInputsChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_end">Start End</label>
                            <input type="text" name="job_end" id="job_end" value={inputs.job_end} onChange={handleExperienceInputsChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="form-buttons">
                            <button type="button" onClick={() => {setFormOpen(false)}} className="mr-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-600 hover:bg-slate-700 cursor-pointer">Cancel</button>
                            <input type="submit" value="Save" className="mr-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer" />
                        </div>
                    </form>
                </div>
                <button className="add_btn" onClick={handleFormOpenClick}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#4c4c4c" strokeWidth="1.5"></circle> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#4c4c4c" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                    Add another education
                </button>
            </div>
        </section>
    );
}

export default ExperienceForm;