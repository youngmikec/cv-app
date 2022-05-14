

const Experience = ({experience}) => {
    const { companyName, role, duration, location } = experience;
    const card = {
        borderRadius: '5px',
        border: '1px solid lightgray',
        boxShadow: '3px 3 6px 0 lightgray',
        backgroundColor: 'rgb(252, 252,252)',
        margin: '1rem auto',
        padding: '.65rem'
    }
    return (
        <div style={card}>
            <h4>{ companyName || 'Peacegroup Technologies' }</h4>
            <p>{ role || "Angular software engineer" }</p>
            <p>{ duration || "Till Date" }</p>
            <p>{ location || "Enugu state, Nigeria" }</p>
        </div>
    )
}

export default Experience;