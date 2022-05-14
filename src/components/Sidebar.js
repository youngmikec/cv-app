import './styles.css';
import Profile from './Profile';

const Sidebar = ({userData}) => {
    return(
        <div className='Sidebar'>
            <Profile userData={userData}  />
        </div>
    )
}

export default Sidebar;