import PropTypes from 'prop-types';
import styles from './FriendItem.module.css';

const FriendItem =({
    avatar,
    name, 
    isOnline,
})=>{
    return (
        <li className={styles.item}>
            <span className={styles.status} style={{ backgroundColor:  isOnline ? 'green' : 'red' }}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
};

FriendItem.protoTypes ={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;