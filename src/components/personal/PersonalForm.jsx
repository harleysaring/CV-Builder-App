function PersonalForm({inputs, handlePersonalInputChange}) {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={inputs.name} onChange={handlePersonalInputChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={inputs.email} onChange={handlePersonalInputChange} />
            </div>
            <div>
                <label htmlFor="phone_number">Number</label>
                <input type="text" name="phone_number" id="phone_number" value={inputs.phone_number} onChange={handlePersonalInputChange} />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" value={inputs.address} onChange={handlePersonalInputChange} />
            </div>
        </form>
    );
}
export default PersonalForm;