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
      <button type='button'>Добавить/Удалить</button>
    </>
  );
};
