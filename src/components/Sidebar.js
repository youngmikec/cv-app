import './styles.css';
import Profile from './Profile';

const Sidebar = ({userData}) => {
    return(
        <div className='Sidebar'>
            <Profile />
        </div>
    )
}

export default Sidebar;