import { Table } from '@/modules';
import { useOutletContext } from 'react-router';

export type FavoritePeople = PeopleInfo;

export const Favorite = () => {
  const { favorite } = useOutletContext<any>();

  return (
    <div>
      <Table type='favorite' favorite={favorite} />
    </div>
  );
};
