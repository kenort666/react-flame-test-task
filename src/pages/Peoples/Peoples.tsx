import { TableView } from '@/modules/People/view';
import styles from './Peoples.module.scss';

export const Peoples = () => {
  return (
    <section className={styles.section}>
      <TableView />
    </section>
  );
};
