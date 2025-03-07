/* eslint-disable react/prefer-destructuring-assignment */
import type { FavoritePeople } from '@/pages';
import { TableCell } from './components/TableCell/TableCell';
import styles from './Table.module.scss';

type TableProps =
  | { type: 'people'; people: People }
  | { type: 'peopleInfo'; peopleInfo: PeopleInfo }
  | { type: 'favorite'; favorite: FavoritePeople[] };

export const Table = (props: TableProps) => {
  const data =
    'people' in props
      ? props.people.results
      : 'favorite' in props
        ? props.favorite
        : (props.peopleInfo ?? []);

  if (Array.isArray(data) && data.length === 0)
    return <div className='status'>No favorites added yet.</div>;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair Color</th>
          <th>Add/Remove Favorite</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) ? (
          data.map((peopleItem, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableCell people={peopleItem} key={index} />
          ))
        ) : (
          <TableCell people={data} />
        )}
      </tbody>
    </table>
  );
};
