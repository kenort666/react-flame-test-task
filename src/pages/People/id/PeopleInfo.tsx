import { Table } from '@/modules';
import { TableCell } from '@/modules/Table/components/TableCell/TableCell';
import { getPeopleId } from '@/utils/api/axios/requests/people/id';
import { useQuery } from '@siberiacancode/reactuse';
import { useParams } from 'react-router';

export const PeopleInfo = () => {
  const { id } = useParams();
  if (!id) throw new Error('No id');

  const { data, isLoading } = useQuery(() => getPeopleId({ params: { id } }), {
    enabled: !!id
  });

  if (!data) return <div>No data</div>;

  return (
    <div>
      {isLoading && <div className='status'>Loading...</div>}
      <Table type='peopleInfo' peopleInfo={data?.data} />
    </div>
  );
};
