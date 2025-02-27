import { usePeople } from '@/modules/Table/hooks/usePeople';
import { Table } from '@/modules/Table/Table';
import styles from './Peoples.module.scss';

export const People = () => {
  const { people, loading } = usePeople();

  if (loading) return <h1>Загрузка...</h1>;

  if (!people) return <h1>Na chui</h1>;

  return (
    <section className={styles.section}>
      <Table data={people} />
    </section>
  );
};
