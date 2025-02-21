import { Button } from '@/components';
import './PeopleCell.module.scss';

interface PeopleCellProps {
  people: PeopleInfo;
}

export const PeopleCell = ({ people }: PeopleCellProps) => {
  return (
    <>
      <td>{people.name}</td>
      <td>{people.height}</td>
      <td>{people.mass}</td>
      <td>{people.hair_color}</td>
      <td><Button variant='add'>Добавить</Button></td>
    </>
  );
};
