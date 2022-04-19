

const Experience = ({experience}) => {
    const { companyName, role, duration, location } = experience
    return (
        <div>
            <h4>{ companyName || 'Peacegroup Technologies' }</h4>
            <p>{ role || "Angular software engineer" }</p>
            <p>{ duration || "Till Date" }</p>
            <p>{ location || "Enugu state, Nigeria" }</p>
        </div>
    )
}

export default Experience;