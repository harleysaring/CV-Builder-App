function PersonalForm({inputs, handlePersonalInputChange}) {
    return (
        <section>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 8.5C15 10.433 13.433 12 11.5 12C9.567 12 8 10.433 8 8.5C8 6.567 9.567 5 11.5 5C13.433 5 15 6.567 15 8.5Z" fill="#000000"></path> <path d="M17.6305 20H5.94623C5.54449 20 5.31716 19.559 5.56788 19.2451C6.68379 17.8479 9.29072 15 12 15C14.7275 15 17.0627 17.8864 18.0272 19.2731C18.2474 19.5897 18.0161 20 17.6305 20Z" fill="#000000" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <h2 className="font-bold">Personal details</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={inputs.name} onChange={handlePersonalInputChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={inputs.email} onChange={handlePersonalInputChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone_number">Phone number</label>
                    <input type="text" name="phone_number" id="phone_number" value={inputs.phone_number} onChange={handlePersonalInputChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" value={inputs.address} onChange={handlePersonalInputChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                </div>
            </form>
        </section>
    );
}
export default PersonalForm;