/* eslint-disable react/no-array-index-key */
import { PeopleCell } from './components/PeopleCell/PeopleCell';
import { usePeople } from './hooks/usePeople';

import styles from './People.module.scss';

export const People = () => {
  const { people, loading } = usePeople();

  if (loading) {
    return <h1 className={styles.loading}>Loading...</h1>;
  }

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
        <tr>
          {people?.results.map((people, index) => <PeopleCell people={people} key={index} />)}
        </tr>
      </tbody>
    </table>
  );
};
