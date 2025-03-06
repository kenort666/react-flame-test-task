import { Link } from 'react-router';
import { getIdFromUrl } from '../helpers/getIdFromUrl';
import styles from './SearchPeopleItem.module.scss';

interface SearchPeopleItemProps {
  people: PeopleInfo;
}

export const SearchPeopleItem = ({ people }: SearchPeopleItemProps) => {
  const id = getIdFromUrl(people.url);

  return (
    <div className={styles.item}>
      <div>{people.name}</div>
      <Link style={{ color: 'black' }} to={`/people/${id}`}>
        Перейти на персонажа
      </Link>
    </div>
  );
};
