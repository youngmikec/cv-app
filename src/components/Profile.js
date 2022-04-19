import './styles.css';
// import '../assets/img/Mike-profile.jpeg';

const Profile = (props) => {
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                {/* <img alt='Profile'/> */}
                <div className='profile-img'></div>
            </div>
            <br/>

            <div>
                <p>Address</p>
                <p>Phone no</p>
                <p>Email</p>
                <p>LInkedin url</p>
                <p>Github link</p>
            </div>
            <br/>

            <div>
                <h3>Top Skills</h3>
                <ul>
                    <li>HTML</li>
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