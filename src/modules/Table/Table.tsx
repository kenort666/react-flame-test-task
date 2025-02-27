import type { FavoritePeople } from '@/app/App';
import styles from './People.module.scss';

interface TableProps {
  data: People | FavoritePeople;
}

export const Table = ({ data }: TableProps) => (
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
      <tr>
        {/* {location.pathname === '/'
          ? people?.results.map((people, index) => <TableCell people={people} key={index} />)
          : favorite.map((people, index) => <TableCell people={people} key={index} />)} */}
      </tr>
    </tbody>
  </table>
);
