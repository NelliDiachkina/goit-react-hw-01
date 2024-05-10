import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
