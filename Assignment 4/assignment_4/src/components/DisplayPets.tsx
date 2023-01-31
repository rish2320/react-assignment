import React from 'react';

type Pet = {
  name: string;
  type: string;
}

type User = {
  name: string;
  pets: Pet[];
}

interface Props {
  users: User[];
}

const DisplayPets = ({ users } : Props) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            <h1>{user.name}</h1>
            <li>
              {user.pets.map((pet) => (
                <li key={pet.name}>{pet.name} ({pet.type})</li>
              ))}
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayPets;
