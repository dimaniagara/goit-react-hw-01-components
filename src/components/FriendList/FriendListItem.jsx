import PropTypes from 'prop-types';
import styles from './friendList.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={
          isOnline
            ? { backgroundColor: '#3ABF5B' }
            : { backgroundColor: '#E34E4E' }
        }
      >
        {isOnline}
      </span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
