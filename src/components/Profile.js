import './styles.css';
// import '../assets/img/Mike-profile.jpeg';

const Profile = ({userData}) => {

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                {/* <img alt='Profile'/> */}
                <div className='profile-img'></div>
            </div>
            <br/>

            <div>
                <p>Address: <span>{userData.address || 'No 47 Anikeugwu street Ifo Layout Abakpa Nike Enugu, Enugu state Nigeria.'}</span></p>
                <p>Phone no: <span>{ userData.phone || "08108816975"}</span></p>
                <p>Email: <span>{ userData.email || "michaelozor15@gmail.com"}</span></p>
                <p>LInkedin url: <span>
                <a href={ userData.linkedinUrl || 'linkedin.com/in/ozor-michael-b5768a186'} rel="noreferrer" style={{textDecoration: 'none', color: 'white'}} target="_blank">
                    { userData.linkedinUrl || "linkedin.com/in/ozor-michael-b5768a186"}
                    </a></span>
                </p>
                <p>Github link: <span>
                    <a href={userData.githubUr || 'https://github.com/youngmikec'} rel="noreferrer" style={{textDecoration: 'none', color: 'white'}} target="_blank">
                    {userData.githubUr || 'https://github.com/youngmikec'}
                    </a></span>
                </p>
            </div>
            <br/>

            <div>
                <h3>Top Skills</h3>
                <ul>
                    {
                        (userData.skills.length > 0)
                        ? userData.skills.map((skill, idx) => {
                            return <li key={idx}>{skill.title}</li>
                        })
                        : `
                        <li>HTML</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>Angular</li>
                        <li>Reactjs</li>
                        <li>Nodejs</li>
                        <li>Expressjs</li>
                        <li>Graphql</li>
                        `
                    }
                </ul>
            </div>
            <br/>

            <div>
                <h3>Languages</h3>
                <p>English (Professional Working)</p>
                <p>Igbo (Native or Bilingual)</p>
            </div>


        </div>
    )
}

export default Profile;