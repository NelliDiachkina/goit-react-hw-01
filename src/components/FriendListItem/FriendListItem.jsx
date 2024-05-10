import clsx from 'clsx';
import css from './FriendListItem.module.css';

function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.caption, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
