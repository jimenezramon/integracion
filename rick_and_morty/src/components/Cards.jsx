import Card from './Card';

export default function Cards({ characters }) {

 
  const vcard = characters.map(({ id, name, status, species, gender, origin, image }) =>
    <Card key={id.toString()}
      name={name}
      status={status}
      species={species}
      gender={gender}
      origin={origin.name}
      image={image}
    />);

  return <div>

    {vcard}
  </div>;
}
