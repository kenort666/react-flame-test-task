import { Button } from '@/components';
import { isPeopleInFavorites } from '../../helpers/isPeopleInList';
import './TableCell.module.scss';

interface TableCellProps {
  people: PeopleInfo;
}

export const TableCell = ({ people }: TableCellProps) => {
  // const item = isPeopleInFavorites(favorite, people);

  return (
    <>
      <td>{people.name}</td>
      <td>{people.height}</td>
      <td>{people.mass}</td>
      <td>{people.hair_color}</td>
      <td>
        {/* {!item ? (
          <Button variant='add' type='button' onClick={() => addNewFavorite(people)}>
            Добавить в список
          </Button>
        ) : (
          <Button variant='delete' type='button' onClick={() => removeFavorite(people.name)}>
            Удалить из списка
          </Button>
        )} */}
      </td>
    </>
  );
};
