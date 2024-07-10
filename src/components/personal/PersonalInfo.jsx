function PersonalInfo({inputs}) {
    return (
        <section className="personal">
            <h1>{inputs.name}</h1>
            <span style={{ marginLeft: 20 }}>{inputs.email}</span>
            <span style={{ marginLeft: 20 }}>{inputs.phone_number}</span>
            <span style={{ marginLeft: 20 }}>{inputs.address}</span>
        </section>
    );
}

export default PersonalInfo;