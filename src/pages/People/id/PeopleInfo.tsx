import { Table } from '@/modules';
import { getPeopleId } from '@/utils/api/axios/requests/people/id';
import { useQuery } from '@siberiacancode/reactuse';
import { useParams } from 'react-router';

export const PeopleInfo = () => {
  const { id } = useParams();
  if (!id) throw new Error('No id');

  const { data, isLoading } = useQuery(() => getPeopleId({ params: { id } }), {
    enabled: !!id
  });

  if (isLoading) return <div className='status'>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <div>
      <Table type='peopleInfo' peopleInfo={data?.data} />
    </div>
  );
};
