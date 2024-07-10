function EducationForm({inputs, handleEducationInputChange, handleEducationSubmit}) {
    return (
        <section>
            <h2 className="font-bold">Education</h2>
            <form onSubmit={handleEducationSubmit}>
                <div>
                    <label htmlFor="school">School</label>
                    <input type="text" name="school" id="school" value={inputs.school} onChange={handleEducationInputChange} />
                </div>
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" name="degree" id="degree" value={inputs.degree} onChange={handleEducationInputChange} />
                </div>
                <div>
                    <label htmlFor="educ_start">Start Date</label>
                    <input type="text" name="educ_start" id="educ_start" value={inputs.educ_start} onChange={handleEducationInputChange} />
                </div>
                <div>
                    <label htmlFor="educ_end">Start End</label>
                    <input type="text" name="educ_end" id="educ_end" value={inputs.educ_end} onChange={handleEducationInputChange} />
                </div>
                <input type="submit" value="Save" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer" />
            </form>
        </section>
    );
}

export default EducationForm;