import { People } from '@/modules/People/People';
import styles from './Peoples.module.scss';

export const Peoples = () => {
  return (
    <section className={styles.section}>
      <People />
    </section>
  );
};
