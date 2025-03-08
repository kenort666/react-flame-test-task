import { useFavoriteCtx } from '@/hooks/useFavoriteCtx';
import { Button } from '@/shared/Button/Button';
import { isPeopleInFavorites } from '../../helpers/isPeopleInFavorites';

interface TableCellProps {
  people: PeopleInfo;
}

export const TableCell = ({ people }: TableCellProps) => {
  const { favorite, addFavorite, removeFavorite } = useFavoriteCtx();

  const isInFavorites = isPeopleInFavorites(people, favorite);

  return (
    <tr>
      <td>{people.name}</td>
      <td>{people.height}</td>
      <td>{people.mass}</td>
      <td>{people.hair_color}</td>
      <td>
        {isInFavorites ? (
          <Button variant='delete' type='button' onClick={() => removeFavorite(people.name)}>
            Удалить из списка
          </Button>
        ) : (
          <Button variant='add' type='button' onClick={() => addFavorite(people)}>
            Добавить в список
          </Button>
        )}
      </td>
    </tr>
  );
};
