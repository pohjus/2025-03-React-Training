import { useEffect, useState } from "react";

function Person() {
  const [person, setPerson] = useState("loading");

  useEffect(() => {
    const fetchIt = async () => {
      let hr = await fetch("https://swapi.dev/api/people/1/");
      let person = await hr.json();
      setPerson(person);
    };
    fetchIt();
  }, []);

  return <p>{person.name}</p>;
}

export default Person;
