import  FriendItem  from 'components/friendItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList =({friends=[]})=> {
    const elements = friends.map((friend)=>(
        <FriendItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}/>
    ))
    return(
        <ul className={styles.friendList}>
            {elements}
        </ul>
    )
}

FriendList.protoTypes ={
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
}
export default FriendList;