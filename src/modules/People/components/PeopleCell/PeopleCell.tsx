import './PeopleCell.module.scss';

type PeopleCellType = Pick<PeopleInfo, 'name' | 'height' | 'mass' | 'hair_color'>;

export const PeopleCell = ({ name, height, mass, hair_color }: PeopleCellType) => {
  return (
    <>
      <td>{name}</td>
      <td>{height}</td>
      <td>{mass}</td>
      <td>{hair_color}</td>
    </>
  );
};
