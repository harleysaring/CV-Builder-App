function ExperienceInfo({experiences}) {
    return (
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
    );
}

export default ExperienceInfo;