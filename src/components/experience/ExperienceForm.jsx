function ExperienceForm({inputs, handleExperienceInputsChange, handleExperienceSubmit}) {
    return (
        <section>
            <h2 className="font-bold">Work experience</h2>
            <form onSubmit={handleExperienceSubmit}>
                <div>
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" id="company" value={inputs.company} onChange={handleExperienceInputsChange} />
                </div>
                <div>
                    <label htmlFor="job_title">Job Title</label>
                    <input type="text" name="job_title" id="job_title" value={inputs.job_title} onChange={handleExperienceInputsChange} />
                </div>
                <div>
                    <label htmlFor="job_respo">Job Responsibilities</label>
                    <input type="text" name="job_respo" id="job_respo" value={inputs.job_respo} onChange={handleExperienceInputsChange} />
                </div>
                <div>
                    <label htmlFor="job_start">Start Date</label>
                    <input type="text" name="job_start" id="job_start" value={inputs.job_start} onChange={handleExperienceInputsChange} />
                </div>
                <div>
                    <label htmlFor="job_end">Start End</label>
                    <input type="text" name="job_end" id="job_end" value={inputs.job_end} onChange={handleExperienceInputsChange} />
                </div>
                <input type="submit" value="Save" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer" />
            </form>
        </section>
    );
}

export default ExperienceForm;