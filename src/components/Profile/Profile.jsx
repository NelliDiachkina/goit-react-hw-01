import css from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.cardItem}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.caption}>@{tag}</p>
        <p className={css.caption}>{location}</p>
      </div>

      <ul className={css.cardList}>
        <li className={css.cardListItem}>
          <span>Followers</span>
          <span className={css.numbersText}>{stats.followers}</span>
        </li>
        <li className={css.cardListItem}>
          <span>Views</span>
          <span className={css.numbersText}>{stats.views}</span>
        </li>
        <li className={css.cardListItem}>
          <span>Likes</span>
          <span className={css.numbersText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
