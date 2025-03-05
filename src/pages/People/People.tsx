import { SearchPeople, Table } from '@/modules';
import { getPeople } from '@/utils/api/axios/requests/people';

import { useQuery } from '@siberiacancode/reactuse';
import styles from './People.module.scss';

export const People = () => {
  const { data: people, isLoading } = useQuery(() => getPeople());

  if (isLoading) return <div className='status'>Loading...</div>;
  if (!people) return <div className='status'>No data</div>;

  return (
    <div className={styles.wrapper}>
      <Table type='people' people={people.data} />
      <SearchPeople />
    </div>
  );
};
