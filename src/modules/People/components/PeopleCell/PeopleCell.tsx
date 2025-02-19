import './PeopleCell.module.scss';

interface PeopleCellProps extends PeopleInfo {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
}

export const PeopleCell = ({ name, height, mass, hair_color }: PeopleCellProps) => {
  return (
    <>
      <td>{name}</td>
      <td>{height}</td>
      <td>{mass}</td>
      <td>{hair_color}</td>
    </>
  );
};
