import { SearchPeople, Table } from '@/modules';
import { usePeople } from '@/modules/Table/hooks/usePeople';

import styles from './People.module.scss';

export const People = () => {
  const { people, loading } = usePeople();

  if (loading) return <div className='status'>Loading...</div>;
  if (!people) return <div className='status'>No data</div>;

  return (
    <div className={styles.wrapper}>
      <Table type='people' people={people} />
      <SearchPeople />
    </div>
  );
};
