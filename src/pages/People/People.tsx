import { Table } from '@/modules';
import { useOutletContext } from 'react-router';

export const People = () => {
  const { people } = useOutletContext<any>();

  return (
    <div>
      <Table type='people' people={people} />
    </div>
  );
};
