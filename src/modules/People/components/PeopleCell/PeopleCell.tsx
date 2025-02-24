import { Button } from '@/components';
import { useFavorite } from '@/hooks/useFavorite';
import './PeopleCell.module.scss';

interface PeopleCellProps {
  people: PeopleInfo;
}

export const PeopleCell = ({ people }: PeopleCellProps) => {
  const { favorite, addNewFavorite } = useFavorite();

  console.log(favorite);

  return (
    <>
      <td>{people.name}</td>
      <td>{people.height}</td>
      <td>{people.mass}</td>
      <td>{people.hair_color}</td>
      <td><Button variant='add' onClick={() => addNewFavorite(people)}>Добавить</Button></td>
    </>
  );
};
