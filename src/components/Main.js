import './styles.css';
import Bio from './Bio';
import Experience from './Experience';
import Education from './Education';

const Main = ({userData}) => {
    const { bio, experience, education:{institutions}, fullName } = userData;
    return (
        <div className='Main'>
            <Bio bio={bio} fullName={fullName} />
            <br/>

            <h3>Expereinces</h3>
            { 
                experience.length > 0 ?
                experience.map((item, idx) => {
                    return <Experience experience={item} key={idx} />
                })
                : <Experience />
            }
            <br />

            <h3>Education</h3>
            { 
                institutions.length > 0 ?
                institutions.map((item, idx) => {
                    return <Education education={item} key={idx} />
                })
                : <Education />
            }
            
        </div>
    )
}

export default Main;