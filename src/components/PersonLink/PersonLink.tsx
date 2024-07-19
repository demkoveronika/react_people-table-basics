import { Link } from 'react-router-dom';
import { Person } from '../../types';
import cn from 'classnames';

type Props = {
  person: Person;
  onClick: (slug: string) => void;
};

export const PersonLink: React.FC<Props> = ({ person, onClick }) => {
  if (!person) {
    return <span>-</span>;
  }

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick(person.slug);
  };

  return (
    <Link
      to={`/people/${person.slug}`}
      onClick={handleClick}
      className={cn({
        'has-text-danger': person.sex === 'f',
      })}
    >
      {person.name}
    </Link>
  );
};