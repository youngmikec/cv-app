

const Bio = ({fullName, bio}) => {
    return (
        <div>
            <h1>{fullName}</h1>
            <h3>Front End software Engineer</h3>

            <br/>
            <br/>
            <h3>Bio Summary</h3>
            <p>{bio}</p>
        </div>
    )
}

export default Bio;