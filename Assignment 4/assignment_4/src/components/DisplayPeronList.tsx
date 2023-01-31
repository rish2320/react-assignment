
type Person = {
  id: number;
  name: string;
  age: number;
  skill: string;
}

interface Props {
  persons: Person[];
}

const DisplayPersonList = ({ persons } : Props) => {
  return (
    <div>
      <ul>
        {persons.map((person) => (
          <ul key={person.id}>
            <h1>I am {person.name}. I am {person.age} years old. I know {person.skill}.</h1>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default DisplayPersonList;
