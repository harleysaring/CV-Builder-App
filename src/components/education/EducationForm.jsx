import { useState } from 'react';

function EducationForm({ inputs, handleEducationInputChange, handleEducationSubmit, educations, setEducations}) {
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
		const new_list = educations.filter((educ, i) => educ.id !== id);
		setEducations(new_list);
	}

    return (
        <section>
            <button className="accordion" onClick={handleSectionOpenClick}>
                <div>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 10L12 4.5L22 10L17.9457 12.2298M2 10L6.05427 12.2298M2 10V16M6 17.5V12.5C6 12.4084 6.01848 12.3182 6.05427 12.2298M6 17.5C6 18.6046 8.68629 19.5 12 19.5C15.3137 19.5 18 18.6046 18 17.5M6 17.5C6 16.3954 8.68629 15.5 12 15.5C15.3137 15.5 18 16.3954 18 17.5M18 17.5V12.5C18 12.4084 17.9815 12.3182 17.9457 12.2298M17.9457 12.2298C17.9334 12.1993 17.9189 12.1691 17.9025 12.139C17.3927 11.2067 14.9439 10.5 12 10.5C9.05606 10.5 6.60733 11.2067 6.09749 12.139C6.08105 12.1691 6.06663 12.1993 6.05427 12.2298" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>;
                    <h2 className="font-bold">Education</h2>
                </div>
                <svg className={`arrow ${isSectionOpen ? "open" : ""}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </button>
            <div className={`section-content ${isSectionOpen ? "open" : ""}`}>
                <div className={`section-list`} style={{display: isFormOpen && 'hidden'}}>
                    <ul className="education-list">
                        {educations.map((education) => {
                            return (
                                <li key={education.id}>
                                    <div>
                                        <h3>{education.school}</h3>
                                        <span>{education.educ_start} - {education.educ_end}</span>
                                    </div>
                                    <button onClick={() => onClickDelete(education.id)}>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 12V17" stroke="#000000" strokeWidth="2" strokeinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={`section-form ${isFormOpen ? "open" : ""}`}>
                    <form onSubmit={handleEducationSubmit} style={{display: isFormOpen && 'hidden'}}>
                        <div className="mb-4">
                            <label htmlFor="school">School</label>
                            <input type="text" name="school" id="school" value={inputs.school} onChange={handleEducationInputChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" name="degree" id="degree" value={inputs.degree} onChange={handleEducationInputChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="educ_start">Start Date</label>
                            <input type="text" name="educ_start" id="educ_start" value={inputs.educ_start} onChange={handleEducationInputChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="educ_end">Start End</label>
                            <input type="text" name="educ_end" id="educ_end" value={inputs.educ_end} onChange={handleEducationInputChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="educ_desc">Description</label>
                            <textarea type="text" name="educ_desc" id="educ_desc" value={inputs.educ_desc} onChange={handleEducationInputChange} className="block font-normal w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
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

export default EducationForm;