import { useFavoriteCtx } from '@/hooks/useFavoriteCtx';
import { Table } from '@/modules';
export type FavoritePeople = PeopleInfo;

export const Favorite = () => {
  const { favorite } = useFavoriteCtx();

  return (
    <div>
      <Table type='favorite' favorite={favorite} />
    </div>
  );
};
