function EducationInfo({educations}) {
    return (
        <section className="education">
            <h2 className="font-bold">Education</h2>
            <ul>
                {educations.map((education) => {
                    return (
                        <li key={education.id}>
                            <h3 className="font-bold">{education.school}</h3>
                            <div className="font-bold float-end">{education.educ_start}-{education.educ_end}</div>
                            <div>{education.degree}</div>
                            <p>{education.educ_desc}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default EducationInfo;