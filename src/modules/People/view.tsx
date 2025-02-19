import { PeopleCell } from './components/PeopleCell/PeopleCell';
import { usePeople } from './hooks/usePeople';

import styles from './view.module.scss';

export const PeopleView = () => {
  const { people, loading } = usePeople();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Gender</th>
          <th>
            Add Favorite<br />/Remove favorite
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {people?.results.map((people) => <PeopleCell people={people} key={people.name} />)}
        </tr>
      </tbody>
    </table>
  );
};
