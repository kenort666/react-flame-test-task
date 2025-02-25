import { Button } from '@/components';
import { useFavorite } from '@/hooks/outletContext/useFavorite';
import { isPeopleInList } from '../../helpers/isPeopleInList';
import './PeopleCell.module.scss';

interface PeopleCellProps {
  people: PeopleInfo;
}

export const PeopleCell = ({ people }: PeopleCellProps) => {
  const { favorite, addNewFavorite } = useFavorite();

  const item = isPeopleInList(favorite, people);

  return (
    <>
      <td>{people.name}</td>
      <td>{people.height}</td>
      <td>{people.mass}</td>
      <td>{people.hair_color}</td>
      <td>
        {item ? (
          <Button variant='delete' type='button'>
            Удалить из списка
          </Button>
        ) : (
          <Button variant='add' type='button' onClick={() => addNewFavorite(people)}>
            Добавить в список
          </Button>
        )}
      </td>
    </>
  );
};
