import React from 'react';

const Player = ({ firstName, lastName, profession, nationality, centuries }) => {
  const centuryList = centuries.map((c, index) =>
    <li key={index.toString()}>
        {c.runs} against {c.against} on {c.date}
    </li>
  );

  return (
    <div>
      <h1>First Name: {firstName}</h1>
      <h1>Last Name: {lastName}</h1>
      <h2>Profession: {profession}</h2>
      <h2>Nationality: {nationality}</h2>
      { centuryList }
    </div>);
}

export default Player;
