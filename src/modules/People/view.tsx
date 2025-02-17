import { PeopleCell } from './components/PeopleCell/PeopleCell';
import { usePeople } from './hooks/usePeople';

import './view.module.scss';

export const PeopleView = () => {
  const { people, loading } = usePeople();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {people?.results.map((people) => <PeopleCell {...people} key={people.name} />)}
        </tr>
      </tbody>
    </table>
  );
};
