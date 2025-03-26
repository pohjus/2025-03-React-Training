import { useEffect, useState } from "react";

function Person({ id }) {
  const [person, setPerson] = useState("loading");

  useEffect(() => {
    const fetchIt = async () => {
      let hr = await fetch(`https://swapi.dev/api/people/${id}/`);
      let person = await hr.json();
      setPerson(person);
    };
    fetchIt();
  }, [id]);

  return <p>{person.name}</p>;
}

export default Person;
