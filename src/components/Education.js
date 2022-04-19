import './styles.css';

const Education = ({education}) => {
    console.log(education);
    const { name, duration, cert } = education;
    return (
        <div className="flex-container flex-row">
            <div className='flex-8'>
                <h4>{ name || "Federal University of Technology Owerri" }</h4>
                <p>{ cert || "B.Tech in Computer Science." }</p>
            </div>
            <div className='flex-4'>
                <p>{ duration || "2017 - till date" }</p>
            </div>
        </div>  
    )
}

export default Education;