/* eslint-disable react/prefer-destructuring-assignment */
import type { FavoritePeople } from '@/pages';
import { TableCell } from './components/TableCell/TableCell';
import styles from './Table.module.scss';

type TableProps =
  | { type: 'people'; people: People }
  | { type: 'favorite'; favorite: FavoritePeople[] };

export const Table = (props: TableProps) => {
  const data = 'people' in props ? props.people.results : (props.favorite ?? []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair Color</th>
          <th>
            Add Favorite
            <br />
            /Remove favorite
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TableCell key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};
