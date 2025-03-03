import { Button } from '@/shared/Button/Button';
import { useOutletContext } from 'react-router';
import { isPeopleInFavorites } from '../../helpers/isPeopleInFavorites';

interface TableCellProps {
  item: PeopleInfo;
}

export const TableCell = ({ item }: TableCellProps) => {
  const { favorite, addFavorite, removeFavorite } = useOutletContext<any>();

  const isInFavorites = isPeopleInFavorites(item, favorite);

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.height}</td>
      <td>{item.mass}</td>
      <td>{item.hair_color}</td>
      <td>
        {isInFavorites ? (
          <Button variant='delete' type='button' onClick={() => removeFavorite(item.name)}>
            Удалить из списка
          </Button>
        ) : (
          <Button variant='add' type='button' onClick={() => addFavorite(item)}>
            Добавить в список
          </Button>
        )}
      </td>
    </tr>
  );
};
